import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { FacebookFilled } from '@ant-design/icons';

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className="container" style={{ fontFamily: 'Poppins' }}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="card my-2" style={{ width: '300px' }}>
                    <div className="card-body ">
                        <img src="src\assets\igLogo.svg" alt="" width={'266px'} className='my-3' />
                        <div className='d-flex flex-column justify-content-center'>
                            <button className='btn btn-primary fw-medium'><FacebookFilled /> Signup with Facebook</button>
                            <div className='text-center my-3 text-black-50'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div style={{ borderTop: '1px solid lightgrey', width: "100%", height: '1px' }} />
                                    <div className='px-1'>OR</div>
                                    <div style={{ borderTop: '1px solid lightgrey', width: "100%", height: '1px' }} />
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="username" placeholder="Email" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" id="fullname" placeholder="Fullname" />
                            </div>
                            <div className="form-group my-2">
                                <input type="password" className="form-control" id="Username" placeholder="Username" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 my-2">Signup</button>
                            <div className='text-center mt-3' style={{ fontSize: '0.8rem' }}>
                                <p className='text-black-50'>By signing up you agree with our <span className='text-primary-emphasis'>Terms,    Privacy Policy,</span> and <span className='text-primary-emphasis'>Cookie Policy</span>.</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='card text-center my-2' style={{ width: '300px' }}>
                    <p className='my-3 d-flex flex-column'>
                        Have an account ?
                        <span onClick={() => navigate("/Login")} className='fw-medium text-primary-emphasis text-decoration-none'> Login</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;