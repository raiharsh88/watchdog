import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Navbar, Nav, Modal } from 'react-bootstrap'
import { url } from '../config';

const Logo = styled.div`
display:flex;

flex-direction:row;
justify-content:flex-start;
align-items:center;

flex:0.3;
p{
    font-family:'Roboto' ,sans-serif;
font-weight:400;
font-size:15px;
color:white;
letter-spacing:8px;
text-transform:uppercase;
margin:0;
padding-left:16px;

&:hover{
    cursor:pointer;
}
}
img{
    width:auto;
    height:40px;

    /* max-width:100%; */
    max-height:100%;
    object-fit:contain;
}

&:hover{
    cursor:pointer;
}

`


const Nlinks = styled.span`
  font-family:'Roboto' ,sans-serif;
font-weight:400;
font-size:12px;
color:#333;
letter-spacing:8px;
text-transform:uppercase;
margin:0;
padding-left:16px;

display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;
height:100%;

i{
 font-size:15px;
}



&:hover{
    color:rgb(214, 59 ,59);
}
`
const CountVar = styled.h4`

padding:1px;
border-radius:50%;
margin:0;
margin-left:3px;
/* border:1px solid rgb(214 , 59 ,59); */
font-family:'Roboto';
font-weight:200;
font-size:15px;
color:rgb(214 , 59 ,59);
/* background-color:rgba(230, 230,230,1); */


`

const Shop = styled.button`
color:white;
background-color:skyblue;
padding:4px 10px 4px 10px;

`




const NavBar = function (props) {

    const [show, setShow] = useState(true);

    const [count, setCount] = useState(0);

    useEffect(async () => {

        const req = await fetch(`${url}/cout/cart-count`, { credentials: 'include', cache: 'no-cache' })
            .then(res => res)
            .catch(err => console.error(err));


        if (!req) return console.error('Unable to fetch cart items count');


        if (req.status === 200) {

            const res = await req.json();



            setCount(res.count);
        }


    }, [])




    return (

        <React.Fragment>
            <Navbar style={{ boxShadow: '0px 3px 5px -5px rgba(0,0,0,0.75)', backgroundColor: 'rgb(240,240,245)', opacity: 10, position: "sticky", top: 0, zIndex: 200, paddingTop: '5px', paddingBottom: '5px', }} expand="lg" >
                <Navbar.Brand href="#home">
                    <Link href="/">
                        <Logo  >

                            <img src='/meta/logo-living-1x.png' alt="Nebula Living" />
                            {/* <p>nebula living</p> */}
                        </Logo>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundImage: 'none !important', color: 'white' }} ><i className="fal fa-bars" ></i></Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Link href="/orders"><Nlinks>Orders</Nlinks></Nav.Link>
                        {/* <Nav.Link href="/builder" style={{ textAlign: 'center' }}><Nlinks style={{ color: 'rgb(214,59,59)', border: '1px solid rgb(214,59,59)', borderRadius: '20px', padding: '6px 10px 6px 10px', paddingLeft: '20px', width: 'max-content', display: 'block', margin: 'auto', textAlign: 'center' }} onClick={() => setShow(true)}>SHOP</Nlinks></Nav.Link> */}
                        {/* <Nav.Link href="/cart"><Nlinks><i className="fal fa-shopping-cart"></i><CountVar>{count}</CountVar></Nlinks></Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </React.Fragment >
    )



    // return (

    //     <Nav>
    //         <Link href="#">

    //             <Logo  >

    //                 <img src='/meta/title-3x.png' alt="Nebula Living" />
    //                 <p>nebula living</p>
    //             </Logo>
    //         </Link>



    //         <Controls>


    //             {/* 
    //             <NavLink href="/login">

    //           </NavLink> */}
    //         </Controls>

    //     </Nav>
    // )

}

export default NavBar






// const Nav = styled.nav`

// width:100%;
// padding:10px 20px 10px 30px;
// display:flex;
// flex-direction:row;
// align-items:center;
// background-color:white;
// border-bottom:1px solid #c9c9c9;
// background-color:#131414;
// position:relative;
// z-index:100;
// height:7%;


// i{
//     font-size:16px;
//     font-family:'Roboto' , sans-serif;
//     color:white;
// }

// `






// const Controls = styled.div`
// flex:0.7;
// display:flex;
// flex-direction:row;
// align-items:center;
// justify-content:flex-end;

// `
// const NavLink = styled.a`
// font-size:14px;
// font-family:'Roboto' ,sans-serif;
// color:white;
// font-weight:300;
// margin-left:20px;


// &:hover{
//     text-decoration:none;
//     color:rgb(214, 59 ,59);
// }

// `