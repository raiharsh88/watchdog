import React, { useState, useEffect } from 'react';

import { Column, SearchBar, Bigbutton } from '../../styled/tower/infoTabStyled';
import { url } from '../../config'


const InfoTab = function (props) {


    const InfoState = useState(null)
    useEffect(async () => {

        const req = await fetch(url + '/api/sample', { credentials: 'include' });

        if (req.status !== 200) return alert('Something went wrong');


        let data = await req.json();


        console.log('Data is', data);




    })


    return (

        // <Column>

        //     <SearchBar>

        //     </SearchBar>


        // </Column>

        <Column>
            <SearchBar>
                <input type="text" placeholder="Search" />
                <i className="far fa-search"></i>
            </SearchBar>

            <Map />

            <Bigbutton>
                <span>Visit Cam</span>
            </Bigbutton>
        </Column>

    )
}




const Map = function () {

    return (

        <iframe
            width="600"
            height=""
            style={{ border: 0, width: '100%', height: '300px' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.689914280744!2d72.91558698948343!3d19.2293918704978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0c88b1d3d9f%3A0x3621dd69daa8e2cf!2sSanjay%20Gandhi%20National%20Park!5e0!3m2!1sen!2sin!4v1615833956834!5m2!1sen!2sin">
        </iframe>

    )
}

export default InfoTab;