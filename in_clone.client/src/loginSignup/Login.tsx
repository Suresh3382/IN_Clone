import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

interface ILogin {
  username: string;
  password: string;
}

const initialLoginValues: ILogin = {
  username: '',
  password: ''
}

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ fontFamily: 'Poppins' }}>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card my-2" style={{ width: '300px' }}>
          <div className="card-body">
            <img src="src\assets\igLogo.svg" alt="" width={'266px'} className='my-3' />
            <Formik initialValues={initialLoginValues} onSubmit={(values) => console.log(values)}>
              <form>
                <div className="form-group my-2">
                  <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group my-2">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </Formik>
            <div className='text-center my-3 text-black-50'>
              <div className='d-flex justify-content-center align-items-center'>
                <div style={{ borderTop: '1px solid lightgrey', width: "100%", height: '1px' }} />
                <div className='px-2'>OR</div>
                <div style={{ borderTop: '1px solid lightgrey', width: "100%", height: '1px' }} />
              </div>
            </div>
            <div className='text-center'>
              <p className='text-primary fw-medium'>Login with Facebook</p>
              <p className='text-primary-emphasis' style={{ fontSize: '0.8rem' }}>Forget password ?</p>
            </div>
          </div>
        </div>
        <div className='card text-center my-4' style={{ width: '300px' }}>
          <p className='my-2 d-flex flex-column'>
            Don't have an account ?
            <span onClick={() => navigate("/Signup")} className='fw-medium text-primary-emphasis text-decoration-none'> Signup</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;