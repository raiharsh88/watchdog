import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { url } from '../config';
import { Menu, Option, Bigbutton } from '../styled/navbarStyled';

const Navbar = function (props) {


    return (
        <Menu>
            <Option>
                <img src={url + '/meta/icon2.png'} alt="logo" />
            </Option>

            <Option>
                <i className="fas fa-home-alt"></i>
                <h1>Home</h1>
            </Option>

            <Option>
                <i className="fal fa-bell"></i>
                <h1>Notifications</h1>
            </Option>
            <Option>
                <i class="far fa-wifi"></i>
                <h1>Network</h1>
            </Option>
            <Option>
                <i className="fal fa-lock"></i>
                <h1>Access</h1>

            </Option>
            <Option>
                <i className="fal fa-file"></i>
                <h1>Reports</h1>
            </Option>

            <Bigbutton>
                <span>Add Device</span>
            </Bigbutton>
        </Menu>
    )
}

export default Navbar;