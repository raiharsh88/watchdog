import React, { useState, useEffect } from 'react';
import { url } from '../../config'
import InfoTab from '../../components/tower/infoTab';
import { useRouter } from 'next/router'
import { Column, Head, ImageCard, CardHead, InfoDiv } from '../../styled/tower/feedStyled';
import { Bigbutton } from '../../styled/navbarStyled';
import Loader from '../../components/loader';


const Feed = function (props) {


    const router = useRouter();



    const [meta, setMeta] = useState({
        head: props.option
    })

    const [refresh, setUpdate] = useState(false);
    const [data, setData] = useState(null);
    const [infoTab, setInfoTab] = useState(null);





    async function checkUpdates() {

        if (!data) return
        // if (!data.data) return;
        if (data.data.length < 1) return;
        const idxx = data.data[0].imgId;

        const req = await fetch(`${url}/api/latest?imgId=${idxx}`, { credentials: 'include' });
        if (req.status === 404) {
            // alert('Login');
            setUpdate(false);
            console.log('No Updates available', false);


        } else if (req.status === 200) {
            setUpdate(true);
            console.log('Updates available', true);
        }


    }


    async function loadDashBoard() {

        setData(null);
        setInfoTab(null);
        setInterval(() => {
            checkUpdates()
        }, 5000)

        const req = await fetch(url + '/api/load-dashboard', { credentials: 'include' });


        if (req.status !== 200) return alert('Something went wrong');

        let data = await req.json();

        // data.data = data.data;



        setData(data);
        setInfoTab(data.data[0])
        setUpdate(false);



    }

    useEffect(async () => {

        loadDashBoard();

    }, [])


    useEffect(async () => {



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
                        <span>{meta.head}</span>

                        {(refresh) && <i className="far fa-sync-alt" onClick={() => router.reload()}></i>}

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