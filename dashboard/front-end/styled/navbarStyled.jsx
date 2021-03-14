import styled from 'styled-components'


const Menu = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:flex-start;



`

const Option = styled.div`
display:flex;
flex-direction:row;
justify-content :flex-start;
align-items :center;
margin-top:10px;
margin-bottom:10px;

padding:13px 24px 13px 15px;

border-radius:23px;
width:max-content;


&:hover{
    background-color:rgba(6, 86, 120,0.1);
    cursor:pointer;
    transition: background-color 0.1s linear;

    i{
        color:rgb(4, 159, 224);
        transition:color 0.1s linear;

    }

    h1{
color:rgb(4, 159, 224);
transition:color 0.1s linear;
    }
}

i{
    font-size:28px;
    color:white;
    margin-right:20px;

}



h1{
    font-family:sans-serif;
    font-weight:800;
    color:white;
    font-size:20px;
    margin:0;


}
img{

    width:90px ;
    height:auto;
}
`


const Bigbutton = styled.div`

background-color:#049fe0;
padding:10px 24px 10px 15px;

width:100%;
margin-top:30px;
text-align:center;


border-radius:26px;
span{
    font-family:sans-serif;
    font-weight:800;
    color:white;
    font-size:20px;
    text-align:center;

}
&:hover{
    background-color:#068ac2;
    cursor:pointer;
    transition: background-color 0.1s linear;

   

    
}
`
export { Menu, Option, Bigbutton }