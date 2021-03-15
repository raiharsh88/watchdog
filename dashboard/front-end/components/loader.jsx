import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';


const Container = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
filter:blur(0.9);
z-index:100;
background-color:rgba(0 , 0 ,0,0.3);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default function Loader() {




    return (

        <Container>
            <Spinner animation="grow" style={{ width: '45px', height: '45px' }} />

        </Container>
    )
}