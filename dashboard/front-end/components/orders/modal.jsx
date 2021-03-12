
import { useEffect, useState } from 'react';
import { ModalBox } from '../../styled/admin/ordersPage';




const Modal = function (props) {

    const [content, setContent] = useState(null);


    useEffect(() => {


        console.log('Modal Loaded', props.rec);
    }, [props.rec])
    return (

        <ModalBox>
            {props.rec}
        </ModalBox>
    )
}



export default Modal;