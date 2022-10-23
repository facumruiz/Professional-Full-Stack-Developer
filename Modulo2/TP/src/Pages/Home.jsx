import React from 'react';
import Banner from '../Components/Banner';
import Productos from '../Components/Productos';


function Home(){
    return(
        <>

            <div>
                <Productos />
            </div>
            
            <div>
                <Banner />
            </div>
        </>
    )
}

export default Home