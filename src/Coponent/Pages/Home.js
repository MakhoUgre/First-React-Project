
import './Styles/Home.css'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(()=> {
        setTimeout(()=>{
            navigate('/Programs');

        },5000);
    },[]);

    return(
        <main>
            <h1 className="h1"> Home Page !</h1>
            <h3 className='h1'> This Page Will Move To "Programs" Page In 5 Secs</h3>
        </main>

    );
}

export default Home ;