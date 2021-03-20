import React, { useState, useEffect } from 'react';

import Loader from '../../components/loader';
import {
    Column, SearchBar, Head, Bigbutton,
    InfoDiv, Download
} from '../../styled/tower/infoTabStyled';
import { url } from '../../config'

import { EmployeeCard, EmpployeeDetail, Icon } from '../../styled/tower/accessStyled';


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




            {props.data.data.map((data) => <Card key={data.email} data={data} />)}

        </Column>

    )
}




const Card = function (props) {



    // if (!props.data) return null
    return (


        <EmployeeCard>
            <Icon>

                <i class="fas fa-user-circle"></i>

            </Icon>


            <EmpployeeDetail>
                <span>{props.data.email.slice(0, props.data.email.indexOf('@'))}</span>

                <p>{props.data.email}</p>
                <small>Last seen {new Date(parseInt(props.data.since)).toLocaleTimeString()}</small>
            </EmpployeeDetail>
        </EmployeeCard>


    )
}



export default Employees;