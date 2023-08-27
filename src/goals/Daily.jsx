import React from 'react'
import ReactPlayer from 'react-player'
import video from "../assets/videos/avatar.mp4"

const Daily = () => {

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    return (
        <div className="container">
            <h2>DAILY TIPS</h2>
            <p>The substance use recovery includes modules for coping skills, relapse prevention, and emotional well-being</p>
            <div className="custom-player">
                <div className="row">
                    <div className="col-md-6">
                        <ReactPlayer url={video} controls={true} width="100%" height="100%" />
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center gap-2 w-100 ">
                            <div className="border border-2 rounded-2 p-2 d-flex align-items-center gap-1 w-100">
                                <i className="bi bi-search"></i>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className='border border-0'
                                    style={{ outline: 'none' }}
                                />
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle bg-black  py-2 border border-3 border-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    August
                                </button>
                                <ul class="dropdown-menu">
                                    {
                                        months.map((month, ind) => {
                                            return (
                                                <li>
                                                    <a class="dropdown-item" href="#">{month}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='tips-videos py-3'>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3'>
                                <img src="https://images.pexels.com/photos/5036588/pexels-photo-5036588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                                className='w-25 h-25 rounded-2' 
                                />
                                <div>
                                    <h5>Societal Pressure</h5>
                                    <div className="d-flex gap-3">
                                        <span className='text-secondary'>5 mins</span>
                                        <span className='text-secondary'>August 8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Daily;