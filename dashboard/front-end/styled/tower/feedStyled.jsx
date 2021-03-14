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

const CardBox = styled.div`

height:500px;
width:100%;
border:1px solid white;
`


export { Column, Head, CardBox }