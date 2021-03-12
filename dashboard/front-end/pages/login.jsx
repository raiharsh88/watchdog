import {
    Container, LoginTab, Logo, InputTab, Canvas,
    Title, InputWrapper, Quote, QuoteTab,
    TextLink, OauthTab, Button, Providers,

    Error, Input
} from '../styled/loginStyled'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { url } from '../config';


import 'bootstrap/dist/css/bootstrap.min.css';

const postConfig = {

    method: 'POST', credentials: 'include', redirect: 'follow', headers: {
        'Content-Type': 'application/json',

    },

    body: {}
}
const HeadTag = function (props) {

    return (
        <Head>
            <title>Login - Nebula Living</title>
            <link rel="shortcut icon" href="/meta/title.png" type="image/png" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossOrigin="anonymous"
            />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap" rel="stylesheet" />

            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500&display=swap" rel="stylesheet" />        </Head>
    )
}

let i = 0;

const LoginPage = function (props) {

    const [creds, setCreds] = useState({ email: 'raiharsh2240@gmail.com', password: '' });
    const [error, setError] = useState('')
    const router = useRouter();
    let text = 'I can see with closed eyes  ';

    var [content, setContent] = useState('');

    // const router = useRouter();
    useEffect(async () => {

        // const res = await fetch(`${url}/auth/checkAuth`, { credentials: 'include' })
        //     .then(data => data.status)
        //     .catch(err => alert('Something went wrong'));
        // console.log(res);
        // if (res === 200) {
        //     return router.push('/');
        // }

        text.split('').map((t, k) => setTimeout(() => {

            setContent(text.slice(0, i));
            i++;
        }, 101 * k))

    }, [])



    const LoginUser = async function () {

        if (!creds.email || !creds.password) {

            return setError('email and password cannot be empty');

        }
        postConfig.body = JSON.stringify(creds);
        const res = await fetch(`${url}/auth/login`, postConfig)
            .then(data => data.json())
            .catch(e => alert('Something went wrong '));

        console.log(res);
        return
        if (!res) {
            alert('something went wrong');
            router.reload();
        }


        if (res.err) {
            setCreds({ email: '', password: '' })
            return setError(res.err);
        }


        if (!router.query.next) return router.push('/');

        router.push(router.query.next);





    }


    const updateInput = function (e, key) {

        const Temp = { ...creds };
        Temp[key] = e.target.value;
        setError('');
        setCreds(Temp);






    }
    return (


        <main style={{
            // backgroundColor: '#f7faff',
            border: 'none'
        }}>
            <HeadTag />

            <Container>



                <LoginTab className="col col-12">
                    <Title>
                        Login
                     </Title>
                    <InputTab>
                        <InputWrapper>
                            <label>Username</label>
                            <Input type="text" name="email" id="email" value={creds.email} placeholder="Email" error={error} onChange={(e) => updateInput(e, 'email')} />
                            <label>Password</label>

                            <Input type="password" name="password" id="password" value={creds.password} placeholder="Password" error={error} onChange={(e) => updateInput(e, 'password')} />
                            <Error>{error}</Error>

                            <button onClick={LoginUser}>Sign In</button>


                            <TextLink href="/register">Not an account ? Register</TextLink>
                            <OauthTab>

                                <Providers>
                                    <Button>
                                        <i className="fab fa-google"></i>
                                    </Button>
                                    <Button>
                                        <i className="fab fa-facebook-f"></i>

                                    </Button>

                                </Providers>
                            </OauthTab>
                        </InputWrapper>
                    </InputTab>

                </LoginTab>
                <Canvas>
                    <Logo>
                        <img src={`${url}/meta/icon.png`} alt="logo" />
                        <h1>Watch Dog</h1>

                    </Logo>


                    <TypeWriter text={content} />
                </Canvas>
            </Container>
        </main>
    )
}




const TypeWriter = function (props) {


    return (

        <QuoteTab>
            <Quote>
                {props.text}
            </Quote></QuoteTab>
    )
}


// export async function getServerSideProps() {

//     const res = await fetch(`${url}/auth/checkAuth`, {credentials: 'include' })
//         .then(res => res.status)
//         .catch(err => console.log(err));
//     console.log('res status is ', res);


//     if (res === 200) {
//         console.log('already signed in');
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: true,
//             },
//         }
//     } else {
//         return {
//             props: { }, // will be passed to the page component as props
//         }
//     }
// }

export default LoginPage;