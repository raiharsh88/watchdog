import React, { useState, useEffect } from 'react';
import { url } from '../../config';
import Loader from '../loader';

import { Column, Head, AddCam, Bigbutton, Error, Success } from '../../styled/tower/camerasStyled';


const AddCamera = function (props) {



    const [form, setForm] = useState({ camId: '' })
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);



    async function registerCam() {


        const req = await fetch(`${url}/api/add-camera?camId=${form.camId}`, { credentials: 'include' });


        if (req.status) setForm({ ...form, camId: '' })
        if (req.status === 409) {
            const res = await req.json();
            setError(res.err)
        }



        if (req.status === 500) {

            setError('Something went wrong server side');

        }
        if (req.status === 200) {

            setSuccess('Device added successfully');

        }

    }


    const updateForm = function (e) {

        setError(null);
        setSuccess(null);



        setForm({ ...form, camId: e.target.value });
    }




    return (

        <AddCam error={error}>
            <i className="fal fa-camera"></i>
            <input type="text" placeholder="enter your camera ID"

                id="camId" onChange={updateForm} value={form.camId} />

            <Error>{error}</Error>
            <Success>{success}</Success>

            <Bigbutton onClick={registerCam} >

                <span>ADD</span>


            </Bigbutton>



        </AddCam>
    )

    return (

        <div className="row">
            <div className="col-8 col">

                <Column>

                    <Head>
                        <span>{props.option}</span>
                    </Head>


                    <h1>Cameras</h1>
                </Column>

            </div>
        </div>

    )
}





export default AddCamera;

