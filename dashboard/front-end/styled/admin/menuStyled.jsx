import styled from 'styled-components';



const MenuBox = styled.div`

display:flex;
flex-direction:column;
/* background-color:rgb(240,240,240); */
width:100%;
height:100%;
height:100%;
/* border-right:1px solid #ddd; */
padding-top:40px;

`

const Option = styled.div`

display:flex;
flex-direction:row;
padding:10px 20px 10px 30px;
width:auto;
font-family:'Source Sans Pro';
align-items:center;
justify-content:flex-start;
&:hover{
    cursor:pointer;
}

span{
    margin-left:15px;
    color:${props => props.selected === true ? 'rgb(214,59,59)' : '#545454'};
    font-size:15px;
    font-weight:500;

    
}
i{
    
    font-weight:400;
    color:${props => props.selected === true ? 'rgb(214,59,59)' : '#aaa'};
    font-size:19px;
}


`


export { MenuBox, Option };