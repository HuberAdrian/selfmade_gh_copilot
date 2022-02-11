import React, {useEffect, useState} from 'react';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from 'react-notion';

function How_git_works() {

    const [data, setData] = useState();


    useEffect(() => {
       fetch("https://notion-api.splitbee.io/v1/page/001e5bd586fb4a71a8303498527171be")
        .then(response => response.json())
        .then(dat => {
            console.log(dat)
            setData(dat);
        }); 

       
    }, []);

    
  return <div>
     
      <NotionRenderer blockMap={data} fullPage={false} darkMode={false} />
  </div>;
}

export default How_git_works;
