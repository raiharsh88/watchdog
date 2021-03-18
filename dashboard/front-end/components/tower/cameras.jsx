import React, { useState, useEffect } from 'react';
import { url } from '../../config';
import Loader from '../loader';

import { Column, NoCams, Head, CamIcon, CamWrapper, Status } from '../../styled/tower/camerasStyled';


const Cameras = function (props) {


    const [cams, setCams] = useState(null)

    useEffect(async () => {
        const req = await fetch(url + '/api/list-cameras', { credentials: 'include' });

        if (req.status === 401) {
            return router.replace('/login');


        }

        if (req.status === 404) {
            setCams({ data: [] });

        }

        const res = await req.json();
        setCams({ data: res.data.reverse() });



    }, [])


    if (!cams) return <Loader />

    if (cams.data.length < 1) {


        return (

            <NoCams>
                <i className="fal fa-camera"></i>
                <h1>
                    You do not have any cameras in your network!
                </h1>

            </NoCams>
        )
    }
    return (


        <div className="row">
            <div className="col-8 col">

                <Column>

                    <Head>
                        <span>{props.option}</span>
                    </Head>



                    <CamWrapper>
                        <div className="row">




                            {cams.data.map(cam => <OneCam key={cam.camId} data={cam} />)}
                        </div>

                    </CamWrapper>

                </Column>

            </div>
        </div>
    )
}




const OneCam = function (props) {


    const [cam, setCam] = useState(props.data);


    useEffect(() => {


        if (!cam) return;
        const min_3 = 1000 * 60 * 3;


        if ((Date.now() - parseInt(cam.lastSeen)) > min_3) setCam({ ...cam, online: false })
        else setCam({ ...cam, online: true })




    }, [])

    useEffect(() => {
        // console.log('Setting cam', cam)
    }
        , [cam.online])
    return (
        <div className="col col-3">
            <CamIcon>

                <Status color="white">
                    <small> {(cam.camId).toUpperCase()}</small>
                </Status>

                <i className="fal fa-camera"></i>


                {(cam.online === false) &&
                    <Status color="#b81111">
                        <i className="fas fa-circle"></i>
                        <small>Offline</small></Status>}


                {cam.online && (<Status color="#5aa14d">
                    <i className="fas fa-circle"></i>

                    <small>Online</small>
                </Status>)}

            </CamIcon>
        </div>
    )
}


export default Cameras;

