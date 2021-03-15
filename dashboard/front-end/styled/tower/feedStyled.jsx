import styled from 'styled-components';


const Column = styled.div`

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
background-color:rgba(0,0,0,1);
span{

    color:white;
    font-family:'Source Sans Pro';
    font-size:22px;
    font-weight:600;
    text-transform :capitalize;
}

`

const ImageCard = styled.div`

/* height:500px;
width:100%;
border:1px solid white; */
width:100%;
/* height:400px; */
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow-x:hidden;
border-radius:7px;
padding:10px 32px 20px 32px;
margin:20px 0px 20px 0px;
transition: background-color 0.1s linear;
img{
    max-width:100%;
    height:auto;
    object-fit:contain;
    border-radius:7px;
}


&:hover{
    cursor:pointer;
    background-color:rgb(10,10,10);

    /* box-shadow: 0px 0px 12px -4px rgba(46,213,255,1); */
}


`

const CardHead = styled.div`

padding:10px 0px 10px 0px;
align-self:flex-start;


i{

}

span{
    font-size:14px;
    font-weight:400;
    font-family:'Dosis';
    color:white;
    


}

`

const InfoDiv = styled.div`

display:flex;
flex-direction:row;
justify:flex-start;
align-items:center;


`
const CardFoot = styled.div`



`




export { Column, Head, ImageCard, CardHead }