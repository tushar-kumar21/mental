import React from 'react';

const FPass = () => {
    return (
        <main className="w-100 row signup" style={{ height: '100vh' }}>
            <section className="col-md-6 d-flex align-items-center justify-content-center px-5">
                <form action="" className="col-sm-10 p-4">
                    <h1 className="mb-5">Forgot Password</h1>
                    <p>Please enter the phone number we will send the OTP in this phone number.</p>

                    <div className="mb-3">
                        <label htmlFor="email" className='pb-1'>Email Id</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>

                    <button type="submit" className="form-button w-100 mt-5">Send</button>
                    <p className='text-center py-2'>
                        <a href="#" className='text-decoration-none main-color'>Back to Sign in</a>
                    </p>
                </form>
            </section>
            <section className="col-md-6 p-0 d-md-block d-none border form-img">
            </section>
        </main>
    );
}

export default FPass;
