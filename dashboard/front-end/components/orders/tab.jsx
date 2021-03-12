import React, { useState, useEffect } from 'react';
import { PageTitle } from '../../styled/admin/ordersPage';
import { TabContainer, EachOrder, Property, Status } from '../../styled/admin/tabStyled';
import { url } from '../../config';
import Modal from './modal';


const Tab = function (props) {

    const [orders, setOrders] = useState(null);


    useEffect(async () => {


        const req = await fetch(`${url}/admin/all-orders`, { credentials: 'include' });


        if (req.status === 200) {

            let res = await req.json();


            setOrders(res);
        }




    }, [])


    if (orders === null) return <h1>Loading</h1>
    return (

        <React.Fragment>

            {/* <PageTitle><h3>All Orders</h3></PageTitle> */}

            <TabContainer>

                {orders.orders.map((ord) => <Order {...ord} key={ord.receipt} />)}
            </TabContainer>
        </React.Fragment>

    )
}



const Order = function (props) {

    const [order, setOrder] = useState(null);
    const [data, setData] = useState(null);
    const [modal, setModal] = useState(false);


    const format = function (amount) {

        amount = (amount / 100).toString();

        let decimal = amount.split('.').pop();
        amount = amount.split('.')[0];

        amount = amount.split('').reverse().map((n, i) => Number.isInteger((i + 1) / 3) ? ',' + n : n).reverse().join('');

        return amount + "." + decimal.slice(0, 2);

    }
    useEffect(() => {

        let tempData = {
            time: 0,
            name: props.name,
            receipt: props.receipt,
            amount: 0,
            paid: 0,
            status: ''

        }



        if (props.razorpay) {
            if (props.razorpay.length > 0) {
                const rzp = props.razorpay.slice(-1).pop();


                // console.log(rzp);

                tempData.time = rzp.created_at;



                if (rzp.payload.payment) {

                    tempData.amount = rzp.payload.payment.entity.amount;
                    tempData.status = rzp.payload.payment.entity.status;


                } else {
                    tempData.amount = razorpay[0].amount;
                    tempData.status = 'pending';
                }




            } else {


                tempData.time = props.time;
                tempData.status = 'pending';

            }
        } else {

            tempData.time = props.time * 1000;
            tempData.status = 'penidng';

        }

        // console.log(tempData.time);


        tempData.amount = (tempData.amount / 100).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })  //format(tempData.amount);
        setData(tempData);



        // console.log('', props.razorpay)
    }, [])



    async function openModal(receipt) {

        // const req = await fetch(`${url}/admin/order-details?rec=${receipt}`, { credentials: 'include' });


        // if (req.status === 200) {
        //     const res = await req.json();


        //     console.log(res);

        // }
        console.log('opening')

        setModal(true);


    }

    // return 'Ok'

    if (!data) return null;
    return (
        <EachOrder>
            <Property color={'rgb(214, 59,59)'}>

                {data.receipt}

            </Property>
            <Property>
                {/* {data.time} */}
                <strong>{new Date(parseInt(data.time) * 1000).toLocaleString('en-us', { hour12: true }).replaceAll('/', ' - ')}</strong>
            </Property>
            <Property>

                {data.name}

            </Property>


            <Property>

                {data.amount}
            </Property>

            <Status status={data.status}>
                {data.status}

            </Status>




            <Property >

                {/* <i className="fal fa-file-edit" onClick={openModal}></i> */}

                <a href={`/order-info?rec=${props.receipt}`}>Details</a>
            </Property>

            {modal && <Modal rec={props.receipt} />}

        </EachOrder>
    )
}

export default Tab;