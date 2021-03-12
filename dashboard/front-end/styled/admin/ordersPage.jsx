import styled from 'styled-components';


const Container = styled.div`
width:100%;
height:92vh;
overflow:hidden;
background-color:rgb(252,252,251); 


.row{
    height:100%;
}
.col{
    height:100%;
    padding:0;
}
`

const PageTitle = styled.div`

display:flex;
flex-direction:row;
justify-content:flex-start;
padding:13px 15px 10px 15px;
 border-bottom:1px solid #ddd;
 h3{
     color:#707070;
     width:max-content;
     font-family:'Source Sans Pro';
     font-weight:600;
     font-size:19px;
     letter-spacing:1px;
    

       
 }



`

const ModalBox = styled.div`
position:fixed;
top:40%;
left:50%;
padding:50px;




`
const Modal = styled.div`

`



export { Container, PageTitle, ModalBox };
