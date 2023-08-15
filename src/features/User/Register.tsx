import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';

function Register() {

    const {
        handleSubmit,
        formState: { errors },
        trigger,
        register,
        watch
    } = useForm();

    const INITIAL_REGISTER_OBJ = {
        name: "",
        password: "",
        emailId: ""
    }

    const [loading, setLoading] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        // Call API to check user credentials and save token in localstorage
        localStorage.setItem("token", "DumyTokenHere")
        setLoading(false)
        window.location.href = '/app/welcome'
    }

    async function onhandleSubmit(data) {
        console.log(data)
        try {
            await login({});
            //history.push("/");
            alert("User Created Successfully");
        } catch (error) {
            console.log(error);
            alert("User created failed");
            alert(error);
        }
    }

    /*const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setRegisterObj({ ...registerObj, [updateType]: value })
    }*/

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Registrar Cuenta</h2>
                        <form onSubmit={handleSubmit(submitForm)}>

                            <div className="mb-4">

                                <input className="mt-4" type='text' name="Name" />

                                <input className="mt-4" type='email' name="Email Id" />

                                <input type="password" name="Password" />

                            </div>


                            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

                            <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register