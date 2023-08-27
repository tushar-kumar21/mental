import React from 'react'

const Mygoals = () => {
    return (
        <div className="main-bg py-5 w-100">
            <h3 className='text-center mb-3'>My Goals</h3>
            <p className='text-center mb-5'>Track mental health goals with the app's feature for progress monitoring and stay focused, motivated, and aligned with your personal growth journey.</p>
            <div className="container px-5">
                <div className="bg-white p-2 d-flex justify-content-between align-items-center rounded-2 goals mb-3 py-3">
                    
                <div className='d-flex align-items-center'>
                        <input type="checkbox" className="form-check-input cursor-pointer" id="first" />
                        <label className="form-check-label mx-3 cursor-pointer"
                            htmlFor="first">Acknowledge and celebrate achievements, no matter how email</label>
                    </div>
                    <i class="bi bi-three-dots text-secondary cursor-pointer"></i>
                </div>

                <div className="bg-white p-2 d-flex justify-content-between align-items-center rounded-2 goals mb-3 py-3">

                    <div className='d-flex align-items-center'>
                        <input type="checkbox" className="form-check-input cursor-pointer" id="second" />
                        <label className="form-check-label mx-3 cursor-pointer"
                            htmlFor="second">Acknowledge and celebrate achievements, no matter how email</label>
                    </div>
                    <i class="bi bi-three-dots text-secondary cursor-pointer"></i>
                </div>

                <div className="bg-white p-2 d-flex justify-content-between align-items-center rounded-2 goals mb-3 py-3">

                <div className='d-flex align-items-center'>
                        <input type="checkbox" className="form-check-input cursor-pointer" id="third" />
                        <label className="form-check-label mx-3 cursor-pointer"
                            htmlFor="third">Acknowledge and celebrate achievements, no matter how email</label>
                    </div>
                    <i class="bi bi-three-dots text-secondary cursor-pointer"></i>
                </div>

                <div className="bg-white p-2 d-flex justify-content-between align-items-center rounded-2 goals mb-3 py-3">

                <div className='d-flex align-items-center'>
                        <input type="checkbox" className="form-check-input cursor-pointer" id="fourth" />
                        <label className="form-check-label mx-3 cursor-pointer"
                            htmlFor="fourth">Acknowledge and celebrate achievements, no matter how email</label>
                    </div>
                    <i class="bi bi-three-dots text-secondary cursor-pointer"></i>
                </div>

                <button className='form-button px-3 mt-1'>See All Goals</button>

            </div>
        </div>
    )
}

export default Mygoals;