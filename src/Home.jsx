import React from 'react'
import Navbar from './Navbar';
import Behavioural from './Behavioural';
import Mygoals from './Mygoals';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='home-banner w-100 d-flex align-items-center justify-content-start' 
            style={{background:'url(https://www.jdrf.org/wp-content/uploads/2018/10/College-Internship-688x393.jpg)no-repeat center center/cover'}}
            >
                <h1 className='text-white w-50 mx-5'>"Embrace mental health, empower your well-being."</h1>
            </section>
            <Behavioural />
            <Mygoals />
        </>
    )
}

export default Home;