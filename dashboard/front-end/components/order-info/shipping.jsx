import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router'
import { ShipTab, Title, ShipStatus } from '../../styled/order-info/mainStyled';
import { url } from '../../config';






const Shipping = function (props) {

    const router = useRouter();

    const [data, setData] = useState(null);

    const selectRef = useRef(null);


    useEffect(async () => {
        let rec = router.query.rec;

        if (!rec) return;

        const req = await fetch(`${url}/track/shipping-info?rec=${rec}`, { credentials: 'include' });



        if (req.status === 404 || req.status === 401) {
            return alert('Receipt not found');
        }

        if (req.status === 500) {

            return alert('')
        }
        if (req.status === 200) {

            const res = await req.json();


            setData(res);

            console.log('Shipping info', res);

        }



    }, [])


    async function updateStatus(e) {
        // console.log('Updating status');

        let rec = router.query.rec;
        let stage = selectRef.current.value;

        const req = await fetch(`${url}/admin/update-shipping?rec=${rec}&stage=${stage}`, { credentials: 'include' });


        if (req.status === 500) {

            return alert('INTERNAL_SERVER_ERROR');


        }

        if (req.status === 401 || req.status === 401) {

            return alert('INVALID_REQUEST');
        }


        if (req.status === 200) {

            let res = await req.json();


            console.log('Updated shipping info', res);

            setData(res);



        }



    }



    if (!data) return null;

    return (

        <ShipTab>

            <Title><i className="fal fa-shipping-fast"></i><h4>Shipping</h4></Title>

            <ShipStatus>
                <select ref={selectRef} >
                    {(data.states.length >= 0) && <option value="1" selected={data.states.length === 1}>Packaging</option>}
                    {(data.states.length >= 1) && <option value="2" selected={data.states.length === 2}>Picked by courier</option>}

                    {(data.states.length >= 2) && <option value="3" selected={data.states.length === 3}>In Transit</option>}
                    {(data.states.length >= 3) && <option value="4" selected={data.states.length === 4}>Delivered</option>}


                </select>

                <button onClick={updateStatus}>Update</button>
            </ShipStatus>


        </ShipTab>
    )
}


export default Shipping;