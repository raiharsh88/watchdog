import React, { useState, useEffect } from 'react';
import { url } from '../../config'

import { Column, Head, ImageCard, CardHead } from '../../styled/tower/feedStyled';
import Loader from '../../components/loader';
const Feed = function (props) {


    const [meta, setMeta] = useState({
        head: props.option
    })

    const [data, setData] = useState(null);


    useEffect(async () => {

        const req = await fetch(url + '/api/sample', { credentials: 'include' });

        if (req.status !== 200) return alert('Something went wrong');


        let data = await req.json();


        console.log('Data is', data);


        setData(data);




    }, [])


    // useEffect(() => {

    //     console.log('meta head', meta)
    // }, [meta.head])

    if (!data) {

        return (

            <Column>
                <Loader />
            </Column>
        )

    }


    return (
        <Column>

            <Head>
                <span>{meta.head}</span>
            </Head>
            {data.data.map(image => <Card data={image} key={image.imgId} />)}
        </Column>
    )
}



const Card = function (props) {


    const [image, setImage] = useState(null);


    useEffect(() => {




        setImage(props.data);

        console.log('Image is ', props.data)


    }, [])


    if (!image) return null;

    return (


        <React.Fragment>

            <ImageCard>
                <CardHead>
                    <span>
                        {image.camId}
                    </span>
                    <span>
                        {new Date(image.time).toLocaleTimeString('en-us', { timeZone: 'Asia/Kolkata' }) + '    ' + new Date(image.time).toDateString('en-us', { timeZone: 'Asia/Kolkata' })}
                    </span>
                </CardHead>
                <img src={image.url} alt="" />
            </ImageCard>
        </React.Fragment>
    )
}
export default Feed;