import React, { useState, useEffect } from 'react';

import Loader from '../../components/loader';
import { Column, SearchBar, Head, Bigbutton, InfoDiv, Download } from '../../styled/tower/infoTabStyled';
import { url } from '../../config'


const InfoTab = function (props) {


    const [infoTab, setInfoTab] = useState(null)

    useEffect(async () => {

        // console.log(props.data);


        setInfoTab(props.data);

        if (!props.data) return;


        let { imgId, camId, url } = props.data;

        let pairs = {}


        for (let [key, value] of Object.entries(props.data.meta)) {

            // console.log(key, value)


            pairs[key] = value;


            // console.log('Float detected', value)
            // pairs[key] = (parseFloat(value) * 100).toFixed(2);






        }


        // let confds = props.data.meta.confidence;
        // for (let i = 0; i < confds.length; i++) {

        //     pairs['Person ' + (i + 1)] = confds[i];
        // }

        // delete pairs.confidence;

        // console.log(pairs);

        delete pairs.camId;

        setInfoTab({ imgId, camId, url, pairs: pairs })


    }, [props.data])


    if (!props.data) return <Loader />
    if (!infoTab) return <Loader />


    return (
        <Column>



            <SearchBar>
                <input type="text" placeholder="Search" />
                <i className="far fa-search"></i>
            </SearchBar>

            <Head>
                {Object.keys(infoTab.pairs).map((key) =>
                    <InfoDiv
                        key={key}><label>{key}</label><span>{infoTab.pairs[key].toUpperCase()}</span>
                    </InfoDiv>)}
            </Head>


            <Map />


            <div className="row">


                <div className="col col-6">
                    <a href={infoTab.url} download={infoTab.imgId}
                        target="_blank"
                        title={'watchdog'}>
                        <Download>

                            Save


                    </Download>

                    </a>
                </div>


                <div className="col col-6">
                    <Bigbutton>
                        <span>Visit Cam</span>
                    </Bigbutton>
                </div>
            </div>


        </Column>

    )
}




const Map = function () {

    return (

        <iframe
            width="600"
            height=""
            style={{ border: 0, width: '100%', height: '300px' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.689914280744!2d72.91558698948343!3d19.2293918704978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0c88b1d3d9f%3A0x3621dd69daa8e2cf!2sSanjay%20Gandhi%20National%20Park!5e0!3m2!1sen!2sin!4v1615833956834!5m2!1sen!2sin">
        </iframe>

    )
}

export default InfoTab;