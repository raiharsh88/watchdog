
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import io from 'socket.io-client';

import Head from 'next/head';
import { Container } from '../styled/order-info/mainStyled'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { url } from '../config';
import Feed from '../components/tower/feed';
import Cameras from '../components/tower/cameras';
import AddCamera from '../components/tower/addCamera';
import Access from '../components/tower/access';



const HeadTag = function (props) {

    return (

        <Head>


            <title>Tower - 1010</title>

            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link rel="shortcut icon" href={url + '/meta/watchdog.png'} type="image/png" />
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

export default function OrderInfo(props) {
    const router = useRouter();

    const [option, setOption] = useState('home')
    const [data, setData] = useState(null);
    const [auth, setAuth] = useState(null);



    // const [current , setCurrent] = useEffect('feed');

    useEffect(async () => {

        const req = await fetch(url + '/auth/check-auth', { credentials: 'include' });

        if (req.status === 403) {
            return router.replace('/login');
        }


        setAuth(true);







    }, [])


    // useEffect(() => {

    //     console.log(router.query.tab)


    //     let tab = router.query.tab;

    //     let tabs = ['home', 'add_cam', 'network'];


    //     if (tabs.indexOf(tab) === -1) {

    //         router.replace({
    //             pathname: '/',
    //             query: { tab: 'home' },
    //         })
    //     }



    // }, [router.pathname])





    // if (!data) return <h1>Loading....</h1>

    return (

        <main style={{ minHeight: '100vh', maxHeight: "100vh", backgroundColor: 'rgb(0,0,0)' }}>
            <HeadTag />
            {auth && (<div className="container-fluid">

                <div className="row h-100 pr-5 pl-5" style={{ height: '100%' }}>
                    <div className="col col-2">
                        <Navbar option={option} setOption={setOption} />
                    </div>
                    <div className="col col-10 pl-5">
                        {option === 'home' ? <Feed option={option} />
                            : option === 'network' ? <Cameras option={option} />
                                : option === 'add_camera' ? <AddCamera option={option} /> : null}
                        {(option === 'access') && <Access option={option} auth={auth} />}

                    </div>

                </div>


            </div>)}

        </main>
    )

}



