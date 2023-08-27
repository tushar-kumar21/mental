import React from 'react';

const Behavioural = () => {

    return (
        <div className="container py-5">
            <h3 className='text-center mb-3'>My Behavioural Health Recovery Courses</h3>
            <p className='text-center mb-5'>The behavioural health recovery courses focus on holistic approaches to promote well-being and support your journey towards mental wellness.</p>
            <div className="row">
                <div className="col-md-6 mb-5 position-relative d-flex flex-column align-items-center">
                    <div className="card mb-5">
                        <img src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Course 1" />

                    </div>

                    <div className='position-absolute bottom-0 bg-white rounded-3 w-75 py-2 px-3 d-flex justify-content-between shadow'>
                        <div className="d-flex flex-column justify-content-between">
                            <h4>Foundation Of Recovery</h4>
                            <p className='text-black'>3 Modules</p>
                        </div>

                        <div class="loading-circle">
                            <div class="loading-text">75%</div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-5 position-relative d-flex flex-column align-items-center">
                    <div className="card mb-5">
                        <img src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Course 2" />
                    </div>

                        <div className='position-absolute bottom-0 bg-white rounded-3 w-75 py-2 px-3 d-flex justify-content-between shadow'>
                            <div className="d-flex flex-column justify-content-between">
                                <h4>Builing Resilience</h4>
                                <p>3 Modules</p>
                            </div>
                            <div class="loading-circle">
                                <div class="loading-text">0%</div>
                            </div>
                        </div>
                </div>
                <div className="col-md-6 mb-5 position-relative d-flex flex-column align-items-center">
                    <div className="card mb-5">
                        <img src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Course 3" />
                    </div>
                        <div className='position-absolute bottom-0 bg-white rounded-3 w-75 py-2 px-3 d-flex justify-content-between shadow'>
                            <div className="d-flex flex-column justify-content-between">
                                <h4>Personal Growth & Recovery</h4>
                                <p>3 Modules</p>
                            </div>
                            <div class="loading-circle">
                                <div class="loading-text">100%</div>
                            </div>
                        </div>
                </div>

                <div className="col-md-6 mb-5 position-relative d-flex flex-column align-items-center">
                    <div className="card mb-5">
                        <img src="https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Course 4" />


                    </div>
                        <div className='position-absolute bottom-0 bg-white rounded-3 w-75 py-2 px-3 d-flex justify-content-between shadow'>
                            <div className="d-flex flex-column justify-content-between">
                                <h4>Sustaining Recovery & Thriving</h4>
                                <p>3 Modules</p>
                            </div>
                            <div class="loading-circle">
                                <div class="loading-text">100%</div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Behavioural;
