import { FormInput, SubmitBtn } from "../components"
import { Form, Link } from "react-router-dom"

const Register = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Form method="POST" className='card w-96 p-8 bg-base-100 gap-y-4'>
                <h4 className="mb-7 text-center text-3xl font-bold">Register</h4>
                <FormInput type='text' label='Username' name='username'></FormInput>
                <FormInput type='email' label='Email' name='email' defaultValue='test@test.com'></FormInput>
                <FormInput type='password' label='Password' name='password' defaultValue='secret'></FormInput>
                <div className="mt-4">
                    <SubmitBtn text='register'></SubmitBtn>
                </div>

                <p className="text-center">Already a member
                    <Link
                        to='/login'
                        className="ml-2">Login</Link></p>
            </Form>

        </section>
    )
}

export default Register
