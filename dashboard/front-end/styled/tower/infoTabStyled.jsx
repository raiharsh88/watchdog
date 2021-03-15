import styled from 'styled-components';


const Column = styled.div`

width:100%;
height:100%;
max-width:100%;
max-height:100%;
overflow-x:hidden;
overflow-y:scroll;

display:flex;
flex-direction:column;
justify-content:flex-start;

position:relative;
iframe{
    border-radius:10px;
    margin:15px 0px ;
}
`

const SearchBar = styled.div`
width:100%;

padding:15px 20px 15px 20px;
max-width:100%;
border-bottom:1px solid rgb(47, 51, 54);
position:sticky;
left:0;
right:0;
top:0;
background-color:rgba(0,0,0,1);
position:relative;
/* display:flex;
flex-direction:column;
justify:center; */

i {
    /* position:absolute;
    left:10px;
    top:10px;
    z-index:1;
    color:white; */

    color:#c9c9c9;;
    font-size:20px;
    display:inline-block;
    position:absolute;
    top:26px;
    left:31px;

}
input{
    display:inline-block;

    width:100%;
    padding:7px 20px 7px 38px;
    border-radius:30px;
    background-color:#404040;
    border:1px solid #3f3f3f;
    outline:none;
    color:white;

    

&:focus{
    outline:none;
}
&::placeholder{

text-align:center;
color:#c9c9c9;
font-family:sans-serif;
font-weight:200;

}



}



`


const Head = styled.div`

`








const Bigbutton = styled.div`

/* background-color:#049fe0; */
padding:7px 24px 7px 15px;

width:100%;
margin-top:30px;
text-align:center;

border:1px solid #049fe0;
border-radius:26px;
span{
    font-family:sans-serif;
    font-weight:400;
    color:white;
    font-size:16px;
    text-align:center;

}
&:hover{
    /* background-color:#068ac2; */
    cursor:pointer;
    transition: background-color 0.1s linear;

   

    
}
`

export {

    Column,
    SearchBar,
    Bigbutton
}