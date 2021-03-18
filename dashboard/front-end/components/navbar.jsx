import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { url } from '../config';
import { Menu, Option, Bigbutton } from '../styled/navbarStyled';

const Navbar = function (props) {


    return (
        <Menu>
            <Option  >
                <img src={url + '/meta/watchdog.png'} alt="logo" />
            </Option>

            <Option selected={props.option === 'home'} onClick={() => props.setOption('home')}>
                <i className="fas fa-home-alt"></i>
                <h1>Home</h1>
            </Option>

            <Option selected={props.option === 'notifications'} onClick={() => props.setOption('notifications')}>
                <i className="fal fa-bell"></i>
                <h1>Notifications</h1>
            </Option>
            <Option selected={props.option === 'archive'} onClick={() => props.setOption('archive')}>
                <i className="far fa-inbox"></i>
                <h1>Archives</h1>
            </Option>
            <Option selected={props.option === 'network'} onClick={() => props.setOption('network')}>
                <i className="far fa-wifi"></i>
                <h1>Network</h1>
            </Option>
            <Option selected={props.option === 'access'} onClick={() => props.setOption('access')}>
                <i className="fal fa-lock"></i>
                <h1>Access</h1>

            </Option>
            <Option selected={props.option === 'reports'} onClick={() => props.setOption('reports')}>
                <i className="fal fa-file"></i>
                <h1>Reports</h1>
            </Option>

            {(props.option == 'network') && <Bigbutton onClick={() => props.setOption('add_camera')}>
                <span>Add Camera</span>
            </Bigbutton>}
        </Menu>
    )
}

export default Navbar;