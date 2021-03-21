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
display:flex;
flex-direction:row;
justify-content:space-between;
span{

    color:white;
    font-family:'Source Sans Pro';
    font-size:22px;
    font-weight:600;
    text-transform :capitalize;
}


i{

    padding:0px;
    border-radius:20px;
    font-size:25px;
    color:rgb(4, 159, 224);

    &:hover{
        cursor:pointer;
    }

}


`

const ImageCard = styled.div`


width:100%;

border-bottom:0.1px solid rgb(47, 51, 54);
border-left:none;
border-right:none;
/* height:350px; */
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow-x:hidden;
border-radius:0;
padding:10px 32px 70px 32px;
/* margin:20px 0px 20px 0px; */
transition: background-color 0.1s linear;

background-color:${props => props.selected ? 'rgba(15,15,15,0.5)' : 'transparent'};

img{
    max-width:100%;
    max-height:100%;
    object-fit:contain;
    border-radius:7px;
}


&:hover{
    cursor:pointer;
    background-color:rgba(15,15,15,0.5);

    /* box-shadow: 0px 0px 12px -4px rgba(46,213,255,1); */
}


`

const CardHead = styled.div`
width:100%;
padding:10px 0px 10px 0px;
align-self:flex-start;
display:flex;
flex-direction:row;
justify-content:space-between;





`

const InfoDiv = styled.div`

display:flex;
flex-direction:row;
justify:flex-start;
align-items:center;

span{
    font-size:12px;
    font-weight:400;
    font-family:'Noto Sans';
    color:white;
    


}




i{
    color:white;
    font-size:14px;
    margin-right:15px;
}

`
const CardFoot = styled.div`



`




export { Column, Head, ImageCard, CardHead, InfoDiv }