import React, { useState, useEffect } from 'react';
import { url } from '../../config'
import InfoTab from '../../components/tower/infoTab';

import { Column, Head, ImageCard, CardHead, InfoDiv } from '../../styled/tower/feedStyled';
import Loader from '../../components/loader';


const Feed = function (props) {





    const [meta, setMeta] = useState({
        head: props.option
    })

    const [data, setData] = useState(null);
    const [infoTab, setInfoTab] = useState(null);





    async function checkUpdates(imgId) {

        const req = await fetch(`${url}/api/latest?imgId=${imgId}`, { credentials: 'include' });


        if (req.status === 401) {
            alert('Login');

        }

        // if (req.status === )

    }
    useEffect(async () => {

        const req = await fetch(url + '/api/load-dashboard', { credentials: 'include' });

        if (req.status !== 200) return alert('Something went wrong');


        let data = await req.json();

        data.data = data.data.reverse().splice(0, 30)


        setData(data);
        setInfoTab(data.data[0])





    }, [])






    async function imageDetails(imgId) {



        if (infoTab) {
            if (infoTab.imgId == imgId) return;

        }
        setInfoTab(null);
        const req = await fetch(`${url}/api/image-details?imgId=${imgId}`, { credentials: 'include' });
        if (req.status === 404) return setInfoTab({ err: 'Image not found!' });
        if (req.status !== 200) return alert('Unable to load image details')
        const res = await req.json();


        // setTimeout(() => setInfoTab(res), 100);

        setInfoTab(res)

    }

    if (!data) {

        return (

            <Column>
                <Loader />
            </Column>
        )

    }


    return (

        <div className="row">
            <div className="col-8 col">

                <Column>

                    <Head>
                        {/* <span style={{ color: 'red' }}>MADARCHOD CALL KAR DIMAAG MAT KHARAB KAR</span> */}
                        <span>{meta.head}</span>

                        {/* {alert("BHOSDIWALE CALL KAR")} */}
                    </Head>
                    {data.data.map(image => <Card data={image}
                        key={image.imgId} imageDetails={imageDetails} infoTab={infoTab} />)}
                </Column>

            </div>

            <div className="col col-4">


                {!infoTab ? <Loader /> : <InfoTab data={infoTab} />}





            </div>
        </div>
    )
}



const Card = function (props) {


    const [image, setImage] = useState(null);


    useEffect(() => {




        setImage(props.data);



    }, [])


    if (!image) return null;

    return (



        <ImageCard selected={image.imgId === (props.infoTab ? props.infoTab.imgId : 'xyz')} onClick={() => props.imageDetails(image.imgId)}>
            <CardHead>

                <InfoDiv>
                    <i className="fad fa-camera"></i>
                    <span>
                        {image.camId.toUpperCase()}
                    </span>
                    {/* <span>
                        {new Date(image.time).toLocaleTimeString('en-us', { timeZone: 'Asia/Kolkata' }) + '    ' + new Date(image.time).toDateString('en-us', { timeZone: 'Asia/Kolkata' })}
                    </span> */}

                </InfoDiv>

                <InfoDiv>
                    <i className="far fa-clock"></i>
                    <span>
                        {new Date(image.time).toLocaleTimeString('en-us', { timeZone: 'Asia/Kolkata' }) + '    ' + new Date(image.time).toDateString('en-us', { timeZone: 'Asia/Kolkata' })}
                    </span>

                </InfoDiv>

            </CardHead>
            <img src={image.url} alt="" />
        </ImageCard>
    )
}
export default Feed;