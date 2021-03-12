import Menu from '../components/orders/menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';

import Head from 'next/head';
import { Container } from '../styled/admin/ordersPage'
import Tab from '../components/orders/tab';

const HeadTag = function (props) {

    return (

        <Head>


            <title>Admin - Nebula Living</title>

            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link rel="shortcut icon" href="/meta/title.png" type="image/png" />
            {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossOrigin="anonymous"
            />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700;800&display=swap" rel="stylesheet" />

            <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500&family=Nanum+Myeongjo:wght@700;800&family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
    )
}
const Order = () => {


    return (

        <main>
            <HeadTag />

            <Navbar />

            <Container>
                <div className="row">
                    <div className="col col-lg-2 col-md-3 col-12">
                        <Menu />

                    </div>

                    <div className="col col-lg-10 col-md-9 col-12">
                        <Tab />
                    </div>
                </div>

            </Container>
        </main>

    )
}


export default Order;