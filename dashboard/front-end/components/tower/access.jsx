import React, { useState, useEffect } from 'react';
import { useRouter } from 'next';
import { url } from '../../config'
import Employees from '../../components/tower/employees';

import {
    Column, Head, ImageCard,
    CardHead, InfoDiv, Form, InputBox, FormTab
    , Bigbutton, Error, Success, Role
} from '../../styled/tower/accessStyled';
import Loader from '../../components/loader';


const Access = function (props) {


    const [form, setForm] = useState({
        email: '',
        password: '',
        password2: '',
        role: 'employee'
    });

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);



    const [employees, setEmployees] = useState(null)


    const loadEmployees = async function () {
        setEmployees(null);


        const req = await fetch(`${url}/api/load-employees`, { credentials: 'include' });

        const res = await req.json();


        setEmployees(res);





    }


    useEffect(() => {

        loadEmployees();
    }, [])

    const formSubmit = async function () {

        const req = await fetch(`${url}/auth/add-user`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(form)

        });

        setForm({
            email: '',
            password: '',
            password2: '',
            role: 'employee'
        });


        if (req.status === 403) {

            // alert('You are not authorized');
            return setError("You should be authenticated");
        }

        else if (req.status === 401) {
            // alert('Your are not logged in');
            return setError("You are unauthenticated!");
        }

        else if (req.status === 409) {

            // alert('User already exists');

            return setError("User already exists!");
        }
        else if (req.status === 400) {
            const res = await req.json();
            return setError(res.err);

        }

        setSuccess("User addedd successfully!");
        loadEmployees();

    }

    const formUpdate = (e) => {

        setError('')
        setSuccess('')
        let temp = { ...form }


        temp[e.target.name] = e.target.value;

        setForm({ ...temp })

    }



    return (

        <div className="row">
            <div className="col-8 col">

                <Column>

                    <Head>
                        <span>Manage Access</span>

                    </Head>
                    <FormTab>


                        <Form>
                            <i className="fal fa-users"></i>
                            <InputBox error={error}>

                                <input type="text" value={form.email} name="email" placeholder="email" onChange={formUpdate} />

                            </InputBox>
                            <Error></Error>

                            <InputBox error={error}>

                                <input type="password" value={form.password} name="password" placeholder="password" onChange={formUpdate} />

                            </InputBox >
                            <Error></Error>

                            <InputBox error={error}>

                                <input type="password" value={form.password2} name="password2" placeholder="confirm password" onChange={formUpdate} />

                            </InputBox >


                            <div className="row">
                                <div className="col col-6">
                                    <Role>
                                        <span>Admin</span>

                                        <input type="radio" checked={form.role === "admin"} name="role" value="admin" defaultValue="admin" onChange={formUpdate} />

                                    </Role>
                                </div>

                                <div className="col col-6">
                                    <Role>
                                        <span>Employee</span>

                                        <input type="radio" checked={form.role !== 'admin'} name="role" value="employee" defaultValue="employee" onChange={formUpdate} />

                                    </Role>
                                </div>
                            </div>
                            <Error>{error}</Error>
                            <Success>{success}</Success>


                            <Bigbutton onClick={formSubmit}>
                                <span>
                                    Add
                                    </span>
                            </Bigbutton>




                        </Form>
                    </FormTab>



                </Column>

            </div>

            <div className="col col-4">

                <Employees data={employees} loadEmployees={loadEmployees} />
            </div>
        </div>
    )
}





export default Access