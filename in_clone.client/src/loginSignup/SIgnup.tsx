import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { FacebookFilled } from '@ant-design/icons';
import { Form, Formik } from 'formik';
import { IUser } from './UserInterface';
import { object, string } from 'yup';
import axios from 'axios';
import { baseURL } from '../Services/baseUrl';
import { toast } from 'react-toastify';

const initialSignupValues: IUser = {
    userId: '',
    email: '',
    password: '',
    fullName: '',
    userName: ''
}

let signupValidation = object({
    email: string().email().required(),
    password: string().min(6).required(),
    fullName: string().required(),
    userName: string().required()
})

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        const newUser = {
            email: values.email,
            password: values.password,
            fullName: values.fullName,
            userName: values.userName
        }
        await axios.post(`${baseURL}/api/User/SignIn`, newUser).then((res) => {
            if (res.status == 200) {
                console.log("User Added Successfully")
                navigate("/");
            }
        }).catch((error) => {
            toast.error(error.response.data);
        });
    }

    return (
        <div className="container" style={{ fontFamily: 'Poppins' }}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="card my-2" style={{ width: '300px' }}>
                    <div className="card-body ">
                        <img src="src/assets/igLogo.svg" alt="" width={'266px'} className='my-3' />
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
                        <Formik
                            initialValues={initialSignupValues}
                            validationSchema={signupValidation}
                            onSubmit={handleSubmit}
                        >
                            {({ values, errors, touched, setFieldValue }) =>
                                <Form>
                                    <div className="form-group my-2">
                                        <input type="text" className="form-control" id="email" placeholder="Email"
                                            value={values.email}
                                            onChange={(e: any) => setFieldValue("email", e.target.value)}
                                        />
                                        {errors.email && touched.email ? (
                                            <div className='text-danger'>{errors.email}</div>
                                        ) : ''}
                                    </div>
                                    <div className="form-group my-2">
                                        <input type="password" className="form-control" id="password" placeholder="Password"
                                            value={values.password}
                                            onChange={(e: any) => setFieldValue("password", e.target.value)}
                                        />
                                        {errors.password && touched.password ? (
                                            <div className='text-danger'>{errors.password}</div>
                                        ) : ''}
                                    </div>
                                    <div className="form-group my-2">
                                        <input type="text" className="form-control" id="fullName" placeholder="Fullname"
                                            value={values.fullName}
                                            onChange={(e: any) => setFieldValue("fullName", e.target.value)}
                                        />
                                        {errors.fullName && touched.fullName ? (
                                            <div className='text-danger'>{errors.fullName}</div>
                                        ) : ''}
                                    </div>
                                    <div className="form-group my-2">
                                        <input type="text" className="form-control" id="userName" placeholder="Username"
                                            value={values.userName}
                                            onChange={(e: any) => setFieldValue("userName", e.target.value)}
                                        />
                                        {errors.userName && touched.userName ? (
                                            <div className='text-danger'>{errors.userName}</div>
                                        ) : ''}
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 my-2">Signup</button>
                                    <div className='text-center mt-3' style={{ fontSize: '0.8rem' }}>
                                        <p className='text-black-50'>By signing up you agree with our <span className='text-primary-emphasis'>Terms,    Privacy Policy,</span> and <span className='text-primary-emphasis'>Cookie Policy</span>.</p>
                                    </div>
                                </Form>}
                        </Formik>
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