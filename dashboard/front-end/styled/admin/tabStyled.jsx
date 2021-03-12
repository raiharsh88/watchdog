import styled from 'styled-components';

const TabContainer = styled.div`
  height:100%;
  width:100%;
  overflow-x:hidden;
  white-space:nowrap;
  overflow-y:scroll;  
   background-color:white;
   padding:30px;

`
const EachOrder = styled.div`
margin-top:8px;
margin-bottom:8px;
background-color:white;
/* box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.75); */
padding:10px;
display:block;
/* width:90%; */
margin-left:auto ;
margin-right:auto;
border:none;
border-bottom:1px solid #dce0e6;
display:flex;
flex-direction:row;
justify-content:space-around;
`

const Property = styled.div`

    flex:${props => props.flex ? props.flex : '0.2'};
    display:flex;
    flex-direction:row;
    justify-content:center;
    color:${props => props.color ? props.color : '#4f4f4f'};
    font-family:'Noto Sans';
font-size:14px;
text-align:center;

i{
    font-size:26px;


    &:hover{
        cursor:pointer;
    }
}

`

const Status = styled.div`
flex:${props => props.flex ? props.flex : '0.2'};

padding:4px 12px 4px 12px;
/* border:1px solid ${props => props.paid === true ? '' : 'rgb(214,59,59)'}; */
border:none;
color:white;
border-radius:15px;
font-family:'Noto Sans';
font-size:14px;
text-align:center;
text-transform:capitalize;
color:rgb(240,240,240);
background-color:${props => props.status === 'captured' ? '#70de35' : 'rgb(214,59,59)'};
flex:0.05;

/* align-self:flex-end; */
`
export { TabContainer, EachOrder, Property, Status };