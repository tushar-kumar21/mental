import React from 'react';

const RPass = () => {
    return (
        <main className="w-100 row signup" style={{height:'100vh'}}>            
                <section className="col-md-6 d-flex align-items-center justify-content-center px-5">
                    <form action="" className="col-sm-10 p-4">
                        <h1 className="mb-5">Get Started Now</h1>
                        <div className="mb-3">
                            <label htmlFor="password" className='pb-1'>Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className='pb-1'>Confirm Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        
                        <button type="submit" className="form-button w-100 mt-5">Confirm</button>
                    </form>
                </section>
                <section className="col-md-6 p-0 d-md-block d-none border form-img">                    
                </section>            
        </main>
    );
}

export default RPass;
