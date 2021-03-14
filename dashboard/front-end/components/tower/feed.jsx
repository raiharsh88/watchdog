import { useState, useEffect } from 'react';
import { Column, Head, CardBox } from '../../styled/tower/feedStyled';
const Feed = function (props) {


    const [meta, setMeta] = useState({
        head: props.option
    })



    // useEffect(() => {

    //     console.log('meta head', meta)
    // }, [meta.head])



    return (
        <Column>

            <Head>
                <span>{meta.head}</span>
            </Head>

            <Card>

            </Card>
            <Card>

            </Card>
            <Card>

            </Card>
        </Column>
    )
}



const Card = function () {

    return (


        <CardBox>

        </CardBox>

    )
}
export default Feed;