import styled from 'styled-components';



const Column = styled.div`
/* display:flex;
flex-direction:column; */
width:100%;
height:100vh;
max-height:100vh;
max-width:100%;
overflow-x:hidden;
overflow-y:scroll;
border:0.1px solid rgb(47, 51, 54);
border-top:none;
position:relative;
padding:0;
/* background-color:rgb(5,5,5) */
/* justify-content:center; */

/* padding:0px 32px 0px 32px; */
`

const Head = styled.div`
width:100%;

padding:15px 20px 15px 20px;
max-width:100%;
border-bottom:1px solid rgb(47, 51, 54);
position:sticky;
left:0;
right:0;
top:0;
background-color:rgba(0,0,0,1) !important;
opacity:1;
z-index:100;
span{

    color:white;
    font-family:'Source Sans Pro';
    font-size:22px;
    font-weight:600;
    text-transform :capitalize;
}

`

const ImageCard = styled.div`


width:100%;

border-bottom:0.1px solid rgb(47, 51, 54);
border-left:none;
border-right:none;


display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow-x:hidden;
border-radius:0;
padding:10px 32px 70px 32px;
/* margin:20px 0px 20px 0px; */
transition: background-color 0.1s linear;

img{
    max-width:80%;
    height:auto;
    object-fit:contain;
    border-radius:7px;
}


&:hover{
    cursor:pointer;
    background-color:rgba(15,15,15,0.5);

    /* box-shadow: 0px 0px 12px -4px rgba(46,213,255,1); */
}


`

const NoCams = styled.div`
    
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:center;

     
      
      i{
          font-size:100px;
          color:#c9c9c9;
          margin-bottom:20px;
      }

    h1{
        font-family:'Dosis';
        font-weight:200;
        color:#c9c9c9;
        font-size:22px;
        text-align:center;


    }
`



const AddCam = styled.div`


width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:center;

     
      
      i{
          font-size:20px;
          color:#c9c9c9;
          margin-bottom:20px;
      }

    h1{
        font-family:'Dosis';
        font-weight:200;
        color:#c9c9c9;
        font-size:22px;
        text-align:center;


    }


    input {

width:30%;
margin-bottom:1.4rem;
padding:10px 14px ;
border:1px solid ${props => props.error ? 'rgb(214,59,59)' : '#757575'};
border-radius:18px;
background-color:transparent;
font-family:'Roboto';
font-size:16px;
color:white;
text-align:center;
font-weight:300;
&::placeholder { 
    color:#adacac;
  opacity: 0.5;
  font-weight:300;
}
&:focus{
    outline:none;
}



    }



`
const Bigbutton = styled.div`

/* background-color:#049fe0; */
padding:7px 24px 7px 24px;

width:max-content;
margin-top:30px;
text-align:center;

border:1px solid #049fe0;
border-radius:20px;
background-color:#049fe0;

span{
    font-family:sans-serif;
    font-weight:400;
    color:white;
    font-size:14px;
    text-align:center;

}
&:hover{
    /* background-color:#068ac2; */
    cursor:pointer;
     background-color:transparent;
    transition: background-color 0.1s linear;

span{
    color:#049fe0;

}
   

    
}
`

const Error = styled.small`

font-size:14px;
font-weight:400;
line-height:18px;
color:rgb(214, 59,59);


`
const Success = styled.small`

font-size:14px;
font-weight:400;
line-height:18px;
color:#1e9c3f;


`


const CamWrapper = styled.div`
 height:auto;
 width:100%;




.col{
    margin-top:40px;
    margin-bottom:40px;
    display:flex;
    flex-direction:column;
    justify:flex-start;
    align-items:center;
}
 
 
 `
const CamIcon = styled.div`
width:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items :center;
border-radius:10px;
padding:0px 30px 0px 30px;
background-color:rgba(20,20,20,0.5);


i{
    font-size:50px;
    color:#b8b6b6;

}

`



const Status = styled.div`

margin:10px 0px 10px 0px;

display:flex;
flex-direction:row;
justify:content:flex-end;
align-items:center;

small{
color:${props => props.color};
font-family:'Noto Sans';

}

i{
    margin-right:8px;
    font-size:8px;
    color:${props => props.color};

}
`
export {
    Column, NoCams, Head, AddCam,
    Bigbutton, Success, Error, CamIcon,
    CamWrapper, Status
}