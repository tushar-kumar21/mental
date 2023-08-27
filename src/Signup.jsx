import React from 'react';

const Signup = () => {
    return (
        <main className="w-100 row signup" style={{height:'100vh'}}>            
                <section className="col-md-6 d-flex align-items-center justify-content-center px-5">
                    <form action="" className="col-sm-10 p-4">
                        <h1 className="mb-5">Get Started Now</h1>
                        <div className="mb-3">
                            <label htmlFor="email" className='pb-1'>Email Id</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className='pb-1'>Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <div className="my-3 d-flex justify-content-between gap-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input cursor-pointer" id="rememberMe" />
                                <label className="form-check-label cursor-pointer" htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <a href="#" className='text-decoration-none main-color'>Forgot password?</a>
                        </div>
                        <button type="submit" className="form-button w-100 mt-5">Login</button>
                    </form>
                </section>
                <section className="col-md-6 p-0 d-md-block d-none border form-img">                    
                </section>            
        </main>
    );
}

export default Signup;
