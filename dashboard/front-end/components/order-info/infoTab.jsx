import { useState, useEffect } from 'react';

import { InfoTab, InfoTabInner, Title, InfoBody, InfoPair, ItemDetails, PaymentRow } from '../../styled/order-info/mainStyled';




const Info = function (props) {


    const [data, setData] = useState(null);

    useEffect(() => {
        // console.log(props.data);
        let tempData = {

        }
        if (props.type === 'personal') {

            tempData = {
                name: props.data.name,
                email: props.data.email,
                phone: props.data.phone,
                ...props.data.address

            }


        }

        if (props.type === 'order') {


            tempData = {

                cart: props.data.cart,

            }

            // console.log(props.data);

            setData(tempData);
        }


        if (props.type === 'payment') {

            tempData = {
                razorpay: props.data.razorpay
            }
        }


        setData(tempData)

    }, [])



    if (!data) return null

    if (props.type === 'order') return <Order data={data} />

    if (props.type === 'payment') return <Payment data={data} />

    return (
        <InfoTab>


            <Title><i className="fal fa-user"></i> <h4>{props.type}</h4></Title>

            <InfoTabInner>

                <InfoBody>

                    {Object.keys(data).map(k => <InfoPair key={k}> <h4><strong>{k.slice(0, 1).toUpperCase() + k.slice(1).toLowerCase()}</strong>  : {data[k]}</h4></InfoPair>)}

                </InfoBody>

            </InfoTabInner>

        </InfoTab>
    )
}





const Order = function (props) {

    const [data, setData] = useState(null);
    useEffect(() => {




        let tempData = {

            items: []
        }


        props.data.cart.forEach(item => {

            let eachItem = {
                item: [],
                meta: {},
            }

            let total = 0;

            for (let [key, value] of Object.entries(item)) {

                if (key !== 'meta') {

                    for (let [num, part] of Object.entries(value)) {



                        let elem = part.key + ' : ' + part.name
                        eachItem.item.push(elem);

                        total += parseInt(part.price);

                    }
                } else {

                    eachItem.meta = value;

                }
            }


            eachItem.meta.total = total * parseInt(item.meta.quantity);



            tempData.items.push(eachItem);

        })

        setData(tempData);


    }, [])


    if (!data) return null;






    return (



        <InfoTab>

            <Title><i className="fal fa-box"></i><h4> Order ({props.data.cart.length})</h4></Title>


            <InfoTabInner>
                {data.items.map(item => <ItemDetails key={item.meta.orderId}>

                    <div>



                        {item.item.map(i => <h4 key={i}>{i}</h4>)}

                    </div>


                    <div>
                        <h4> Quantity : {item.meta.quantity}</h4>
                        <h4> Total : {item.meta.total}</h4>

                    </div>
                </ItemDetails>)}
            </InfoTabInner>
        </InfoTab>
    )
}



const Payment = function (props) {
    const [data, setData] = useState(null);




    useEffect(() => {

        // console.log(props.data)
        let tempData = {
            meta: {}
        }

        if (!props.data) return
        let rzp = props.data.razorpay.slice(-1).pop();


        tempData.meta.status = !rzp ? 'pending' : !rzp.event ? 'pending'
            : rzp.event === 'order.paid' ? 'paid'
                : rzp.event === 'payment.failed' ? 'failed'
                    : 'pending';

        tempData.account_id = rzp.account_id;

        if (tempData.meta.status === 'paid') {

            let entity = rzp.payload.payment.entity;
            tempData.method = entity.method;

            tempData.currency = entity.currency;


            tempData.amount = entity.amount / 100;


            tempData.amount = (tempData.amount).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });// + (entity.amount / 100) ;


            tempData.email = entity.email;

            tempData.bank = entity.bank;

            tempData.card = entity.card.network;
            tempData.card_id = entity.card.id;

            tempData.meta.time = new Date(entity.created_at * 1000).toDateString() + '  ' + new Date(entity.created_at * 1000).toLocaleTimeString('en-US', { hour12: true });
        }

        if (tempData.meta.status === 'failed') {

            let entity = rzp.payload.payment.entity;
            tempData.method = entity.method;

            tempData.currency = entity.currency;


            tempData.amount = entity.amount / 100;


            tempData.amount = (tempData.amount).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });// + (entity.amount / 100) ;


            tempData.email = entity.email;

            tempData.bank = entity.bank;

            tempData.card = entity.card.network;
            tempData.card_id = entity.card.id;

            tempData.meta.time = new Date(entity.created_at * 1000).toDateString() + '  ' + new Date(entity.created_at * 1000).toLocaleTimeString('en-US', { hour12: true });

        }

        // console.log('RZP is', tempData)


        setData(tempData)

    }, [])


    if (!data) return <h1>Loading...</h1>
    return (<InfoTab>

        <Title><i className="fal fa-rupee-sign"></i><h4>Payment</h4><span>{data.meta.time}</span></Title>


        <InfoTabInner>

            <PaymentRow status={data.meta.status}><h4><strong>Status: <span>{data.meta.status}</span></strong></h4></PaymentRow>

            {Object.keys(data).map((k) => {

                return k !== 'meta' ? <PaymentRow key={k}><h4><strong>{k}</strong> : {data[k]}</h4></PaymentRow> : null;

            }).filter(e => e !== null)}




        </InfoTabInner>
    </InfoTab>)
}

export default Info;