import React, { useState, useEffect } from 'react';
import { url } from '../../config';
import Loader from '../loader';

import { Column, NoCams, Head, CamIcon, CamWrapper, Status } from '../../styled/tower/camerasStyled';


const Reports = function (props) {


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
                        <span>Reports</span>
                    </Head>





                </Column>

            </div>
        </div>
    )
}







export default Reports;

