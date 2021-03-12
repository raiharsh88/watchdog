import styled from 'styled-components';
import { url } from '../config';

const Container = styled.div`

min-height:100vh;
background-color:transparent;
display:flex;
flex-direction:row;
border:none;

/* justify-content:center;
align-items:center; */

@media (max-width:768px){
/* background-color:rgba(255,0,0, 0.9); */
 max-height:100vh;
 flex-direction:column-reverse;
/* background-image:url(${url + '/images/login-page-bg.png'}); */

}

`
const Canvas = styled.div`
background-color:#3b9ba1;
flex:0.65;
border:none;
box-sizing:border-box;
padding:40px;
background-image:url(${url + '/images/login-bg.png'});
/* background-size:cover; */
background-repeat:no-repeat;
/* background-position:center; */

@media (max-width:768px){
/* display:none; */
flex:0.1 ;
padding:20px 40px 20px 40px;


}
`
const LoginTab = styled.div`
background-color:rgba(255 ,255 ,255,0.3);
overflow:hidden;
border:none;
padding:40px;
box-sizing:border-box;
flex:0.35;

display:flex;
flex-direction:column;
justify-content:flex-start;
@media (max-width:768px){
    background-color:transparent;
     
flex:0.9;
/* background-image:url(${url + '/images/login-page-bg.png'}); */

}


`

const Logo = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:flex-start;

align-items:center;

@media (max-width:800px){
    justify-content:center;
     /* padding:20px 40px 20px 40px; */


}
/* background-color:rgba(20 ,20 ,20 , 0.5); */

h1{
    font-family:'Raleway';
    color:#181616;
    font-size:20px ;
    font-weight:500;
    padding:1px 0px 1px 5px;
    letter-spacing:8px;
    margin:0;
    margin-left:16px;
    text-transform:uppercase;

    background-color:rgba(80,80,80,0.3);


}

img{
    max-width:90px;
    max-height:auto;
    object-fit:contain;


      /* filter: saturate(3);
 filter: grayscale(100%);
filter: contrast(160%);
filter: brightness(0.25);
 filter: blur(3px);
 filter: invert(100%);
filter: sepia(100%);
 filter: hue-rotate(300deg);
 filter: opacity(50%); */
}

`

const InputWrapper = styled.div`
width:68%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media (max-width:767px){
width:100%;


}

@media (min-width:900px) and (max-width:1024px){
width:80%;


}
`

const Title = styled.div`
  font-family:'Source Sans Pro',sans-serif;
  font-size:32px;
  color:#002369;
  text-align:center;
  flex:0.3;

  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;

  
`
const InputTab = styled.div`
padding:15px;
flex:0.6;

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;


label{
    font-size:14px;
    font-family:'Source Sans Pro',sans-serif;
    font-weight:400;
    text-align:left;
    width:100%;
    color:#404c63;
    padding: 5px 18px 5px 18px;
    margin:0;

    @media (max-width:768px){
        text-align:center;


}


}
button{
  
    width:45%;
    border-radius:18px;
    background-color:#002369;
    color:white;
    font-family:'Roboto',sans-serif;
    padding: 10px 18px 10px 18px;
    border:1px solid white;

    margin:0.7rem 0rem 1.8rem 0rem;
    
&:hover{
    background-color:white;
    color:#002369;
    border:1px solid #404c63;
}


&:focus{
    outline:none;
}
}

`



const Input = styled.input`

width:100%;
margin-bottom:1.4rem;
padding:10px 14px ;
border:1px solid ${props => props.error.length > 0 ? 'rgb(214, 59, 59)' : '#404c63'};
border-radius:18px;

font-family:'Roboto';
font-size:16px;
color:#002369;
font-weight:300;
&::placeholder { 
    color:#404c63;
  opacity: 0.5;
  font-weight:300;
}

&:focus{
    outline:none;
}
@media (max-width:768px){
        text-align:center;
        /* border:none; */


}





`

const QuoteTab = styled.div`

width:100%;
height:auto;
margin-top:20%;
max-width:100%;
overflow:hidden;
@media (max-width:768px){
    display:none;
}
`

const Quote = styled.h1`

    font-size:70px;
    font-family:'Roboto';
    font-weight:500;
    color:#181616;
    letter-spacing:10px;
   
    word-wrap: break-word;
    
    max-width:100%;
    position:relative;

   
    animation:blink 0.8s  ease-in-out;

   


   @keyframes blink{
       0%{
           opacity:0;
       }
       100%{
           /* color:#a68112; */
           opacity:1;
       }
   }

`

const TextLink = styled.a`
 font-size:13px;
 color:#002369;

 font-family:'Roboto',sans-serif;
 text-align:center;
 width:100%;

&:hover{
    color:#404c63;

    text-decoration:none;
}
`


const OauthTab = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`

const Providers = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:100%;
padding:15px;

i{
    margin:0;

}
`

const Button = styled.div`
text-align:center;
    width:45%;
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:#002369;
    color:white;
    font-family:'Roboto',sans-serif;
    padding: 10px;
    border:1px solid white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    margin:0.7rem 8px 1.8rem 8px;


    
&:hover{
    background-color:white;
    cursor:pointer;
    color:#002369;
    border:1px solid #404c63;
}


&:focus{
    outline:none;
}`


const Error = styled.p`
font-size:13px;
color:rgb(214 , 59 ,59);
font-family:'Roboto',sans-serif;
font-weight:300;
text-align:center;
margin:0;

`

export {
    Title, Container, LoginTab, Logo, InputTab, Canvas, InputWrapper,
    QuoteTab, Quote, TextLink, OauthTab, Providers, Button, Error,
    Input

};