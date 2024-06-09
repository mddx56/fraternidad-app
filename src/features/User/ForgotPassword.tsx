import { CheckCircle } from 'lucide-react'
import { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorText from '../../components/Typography/ErrorText'
import LandingIntro from './LandingIntro'


function ForgotPassword() {

    const INITIAL_USER_OBJ = {
        emailId: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)

    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        else {
            setLoading(true)
            // Call API to send password reset link
            setLoading(false)
            setLinkSent(true)
        }
    }

    type Props = {
        updateType: string;
        value: string;
    }

    const updateFormValue = ({ updateType, value }: Props) => {
        setErrorMessage("")
        setUserObj({ ...userObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>¿Olvidaste tu contraseña?</h2>

                        {
                            linkSent &&
                            <>
                                <div className='text-center mt-8'><CheckCircle className='inline-block w-32 text-success' /></div>
                                <p className='my-4 text-xl font-bold text-center'>Link Sent</p>
                                <p className='mt-4 mb-8 font-semibold text-center'>Check your email to reset password</p>
                                <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>

                            </>
                        }

                        {
                            !linkSent &&
                            <>
                                <p className='my-8 font-semibold text-center'>Enviaremos un enlace para restablecer la contraseña a tu correo electrónico.</p>
                                <form onSubmit={(e) => submitForm(e)}>

                                    <div className="mb-4">
                                        <input className='input input-bordered w-full' placeholder='Ingrese su correo electrónico' type="email" defaultValue={userObj.emailId} />
                                    </div>

                                    <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                                    <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Enviar Link</button>

                                    <div className='text-center mt-4'>Volver  <Link to="/login"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Inicia sesión</button></Link></div>
                                </form>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword