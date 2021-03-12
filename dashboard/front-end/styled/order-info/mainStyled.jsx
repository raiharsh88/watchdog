import styled from 'styled-components';


const Container = styled.div`

background-color:transparent;
width:100%;
/* height:100%; */


.col{
    padding:15px;
}


`

const InfoTab = styled.div`
border-radius:10px;
width:100%;
background-color:white;
box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);

height:350px;
position:relative;

/* overflow-x:hidden;
overflow-y:scroll; */

padding:15px;
&::-webkit-scrollbar {
  display: none;
}
`

const InfoTabInner = styled.div`


display:flex;
flex-direction:column;
position:relative;
max-height:83%;
margin-top:10px;
/* height:auto; */
overflow-x:hidden;
overflow-y:scroll;

&::-webkit-scrollbar {
  display: none;
}
padding:0px 10px 15px 10px;
`
const Title = styled.div`
/* position:sticky; */
/* top:absolute; */
border-radius:8px;

box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
padding:15px 10px 15px 10px;

background-color:white;
color:rgb(214 , 59,59);
display:flex;
flex-direction:row;
h4{
font-size:16px;
font-family:'Dosis';
font-weight:500;
letter-spacing:1px;
text-align:left;
margin:0;
text-transform:capitalize;

}


span{
    margin:0;
    margin-left:auto;
}

i{
    font-size:18px;
    margin:0px 7px  0px 0px;

}

`

const InfoBody = styled.div`

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
padding:15px 0px 0px 0px;



`

const InfoPair = styled.div`
padding:10px 0px 10px 0px;
border-top:1px solid #eee;
width:100%;


h4{
    font-family:'Source Sans Pro';
    font-weight:400;
    color:#555;
    font-size:15px;
    margin:0;
   


}



`


const ItemDetails = styled.div`


padding:13px 10px 13px 10px;
/* border:1px solid #ccc; */

box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);

border-radius:10px;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
margin:22px 0px 0px 0px;

h3{

    font-size:15px;
    
}
div{


   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
   flex:0.5;   
}


h4{

    font-family:'Dosis';
    font-size:15px;
    color:#555;

}
`



const PaymentRow = styled.div`
display:flex;
flex-direction:row;

padding:10px 0px 10px 0px;
border-top:1px solid #eee;
width:100%;
h4{
    font-family:'Source Sans Pro';
    font-weight:400;
    color:rgb(214, 59,59);
    font-size:15px;
    margin:0;
    
}

strong{
    color:#555;

    text-transform:capitalize;
}

span{
    font-size:15px;
    border-radius:12px;
    color:rgb(230,230,230);
    padding:2px 10px 2px 10px;
    border:none;
    margin-left:20px;
    background-color:${props => props.status === 'paid' ? '#76d115' : props.status === 'pending' ? 'yellow' : 'rgb(214, 59,59)'};

}
`


const ShipTab = styled.div`

border-radius:10px;
width:100%;
background-color:white;
box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);

height:250px;
position:relative;

/* overflow-x:hidden;
overflow-y:scroll; */

padding:15px;
&::-webkit-scrollbar {
  display: none;
}
`
const ShipStatus = styled.div`

display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
margin-top:30px;

select{

  width:80%;
   padding:10px 15px 10px 15px;
   border:1px solid #aaa;
   border-radius:7px;


   &:focus{
       outline:none;
   }


}


button{
    width:20%;
    background-color:rgb(214,59,59);
    color:rgb(230,230,230);
    padding:10px 15px 10px 15px;
    border:none;
    border-radius:7px;
    margin-left:10px;
    font-family:'Source Sans Pro';
    font-size:14px;



    &:focus{
       outline:none;
   }

}


`
export {
    Container, InfoTab, InfoTabInner, Title, InfoBody,
    InfoPair, ItemDetails, PaymentRow, ShipTab, ShipStatus
} 