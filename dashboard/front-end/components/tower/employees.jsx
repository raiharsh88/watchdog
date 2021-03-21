import React, { useState, useEffect } from 'react';

import Loader from '../../components/loader';
import {
    Column, SearchBar, Head, Bigbutton,
    InfoDiv, Download
} from '../../styled/tower/infoTabStyled';
import { url } from '../../config'

import { EmployeeCard, EmpployeeDetail, Icon, DeleteButton, Error, Success } from '../../styled/tower/accessStyled';


const Employees = function (props) {






    if (!props.data) return <Loader />

    if (props.data.data.length < 1) return null;

    return (
        <Column>



            <SearchBar>
                <input type="text" placeholder="Search" />
                <i className="far fa-search"></i>
            </SearchBar>

            <Head>

            </Head>




            {props.data.data.map((data) => <Card key={data.email} data={data} loadEmployees={props.loadEmployees} />)}

        </Column>

    )
}




const Card = function (props) {


    const [error, setError] = useState(null);


    const [success, setSuccess] = useState(null);

    async function deleteUser() {


        const email = props.data.email;
        const req = await fetch(`${url}/auth/remove-user?email=${email}`, { credentials: 'include' });


        if (req.status === 400) {


            const res = await req.json();

            alert(res.err);



            return props.loadEmployees()
        }
        else if (req.status === 403) {

            const res = await req.json();

            alert(res.err);



            return props.loadEmployees()

        }
        else if (req.status === 500) {

            const res = await req.json();

            alert(res.err);

            return props.loadEmployees()

        }
        else if (req.status === 200) {

            const res = await req.json();

            alert(res.msg);

            return props.loadEmployees()

        }



    }
    // if (!props.data) return null
    return (


        <EmployeeCard>
            <Icon>

                <i class="fas fa-user-circle"></i>

            </Icon>


            <EmpployeeDetail>
                <span>{props.data.email.slice(0, props.data.email.indexOf('@'))}</span>

                <p>{props.data.email}</p>
                <small>Last seen {new Date(parseInt(props.data.since)).toLocaleString()}</small>
            </EmpployeeDetail>
            <DeleteButton >

                <i onClick={deleteUser} className="fas fa-trash"></i>

            </DeleteButton>
        </EmployeeCard>


    )
}



export default Employees;