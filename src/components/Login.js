import React from 'react';
import {useDispatch} from 'react-redux';
import addItem from '../actions/addItem'

const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        dispatch(addItem("isSignedIn", true))
    }

    
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image justify-content-center">
                    <div className="align-self-center text-center">
                        <h1 className="login-header">We Offer Best Delivery Service</h1>
                    </div>
                </div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Welcome back!</h3>
                                    <form>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" onClick={signIn}>Sign in</button>
                                        <div className="text-center">
                                            <a className="small forgot">Forgot password?</a></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;