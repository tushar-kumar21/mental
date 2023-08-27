import React from 'react'
import Navbar from '../Navbar';
import Common from '../Common';
import Daily from './Daily';

const Goals = () => {
    return (
        <>
            <Navbar />
            <section className='home-banner w-100 d-flex align-items-start justify-content-center flex-column px-5 gap-4'
                style={{ background: 'url(https://www.jdrf.org/wp-content/uploads/2018/10/College-Internship-688x393.jpg)no-repeat center center/cover' }}
            >
                <h2 className='text-white w-50 mx-2'>Foundation Of Recovery</h2>
                <p className='text-white mx-2'>Establishing the fundamental knowledge and skills necessary to understand substance use disorder, the cyclem of addiction, and the core principles of cognitive behavioural therapy as the groundwork for initiating the recovery journey</p>
            </section>
            <Daily/>

        </>
    )
}

export default Goals;