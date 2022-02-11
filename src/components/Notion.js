import React, {useEffect, useState} from 'react';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from 'react-notion';
import 'prismjs/components/prism-javascript';

import Navbar from './Navbar';

function Notion(props) {
    const {nav=false, endpoint=""} = props;

    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);




    useEffect(() => {
       fetch(`https://notion-api.splitbee.io/v1/page/${endpoint}`)
        .then(response => response.json())
        .then(dat => {
            console.log(dat)
            setData(dat);
            setLoaded(true)
        }); 

       
    }, []);

    if (endpoint == "") {
        return <p>couldn't load data</p>
    }
    
  return <div>
    {nav && <Navbar />}
    {loaded && <NotionRenderer blockMap={data} fullPage={nav} darkMode={true} /> } 
  </div>;
}

export default Notion;
