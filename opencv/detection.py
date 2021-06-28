import cv2
import numpy as np
import time
import requests

net = cv2.dnn.readNet('yolov3.weights', 'yolov3.cfg')

counter = 0

classes = []
with open('coco.names', 'r') as f:
    classes = f.read().splitlines()


cap = cv2.VideoCapture('impractical.mp4')

file_url = 'http://localhost:5000/upload'


while True:

    _, img = cap.read()

    time.sleep(1/60)

    height, width, _ = img.shape

    blob = cv2.dnn.blobFromImage(img, 1/255, (416,416), (0,0,0), swapRB=True, crop=False)

    net.setInput(blob)

    output_layer_names = net.getUnconnectedOutLayersNames()
    layerOutputs = net.forward(output_layer_names)

    boxes = []
    confidences = []
    class_ids = []

    for output in layerOutputs:

        for detection in output:

            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence > 0.5:

                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)

                w = int(detection[2] * width)
                h = int(detection[3] * height)

                x = int(center_x - w/2)
                y = int(center_y - h/2)

                boxes.append([x, y, w, h])
                confidences.append((float(confidence)))
                class_ids.append(class_id)

    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

    font = cv2.FONT_HERSHEY_PLAIN
    colors = np.random.uniform(0, 255, size=(len(boxes), 3))


    if len(indexes) > 0:

        for i in indexes.flatten():

            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            confidence = str(round(confidences[i]))
            color = colors[i]
            rect_counter = 0

            if label == 'person':

                cv2.rectangle(img, (x,y), (x+w, y+h), [0, 255, 0], 2)
                rect_counter += 1
                cv2.putText(img, label + " " + confidence, (x, y+20), font, 2, (255,255,255), 2)
                

                gray= cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

                edges= cv2.Canny(gray, 50,200)

                _, contours, hierarchy = cv2.findContours(edges.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

                number_of_objects_in_image= len(contours)

                print ("The number of objects in this image: ", str(number_of_objects_in_image))


                # name = "file%d.jpg"%counter
                # save_img = cv2.imwrite(name, img)

                # files = {'file': open(name, 'rb')}

                # data = {"label":label, "confidence":confidences[i]}

                # r = requests.post(url = file_url, files=files, data=data)
                # counter += 1

                # pastebin_url = r.text
                # print("The pastebin URL is:%s"%pastebin_url)

                txt = 'There are {} people in frame.'
                #print(txt.format(rect_counter))
    

    cv2.imshow('Image', img)
    key = cv2.waitKey(10)
    if key == 27:
        break


cap.release()
cv2.destroyAllWindows()
