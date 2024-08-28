import Image from '../../assets/small-team-discussing-ideas-2194220-0.svg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { api } from '../../services/api';

export function Register() {
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post('/register', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            });

            alert('User registered successfully. Please login.');
        } catch (err) {
            console.error(err);
            alert('Error registering user. Please try again later.');
        }
    }

    return (
        <div className="w-full mt-28 flex gap-6 justify-center">
            <div className="max-w-xl px-10 py-14 flex flex-col rounded-md border-2 border-zinc300 gap-12 shadow-2xl">
                <div>
                    <h1 className="text-2xl text-left">Welcome!</h1>
                    <p className="font-medium text-3xl">Sign Up</p>
                </div>
                <form onSubmit={handleSubmit} action="#" className="flex flex-col items-center gap-7">
                    <label className="flex flex-col" title="Name" htmlFor="Name" >
                        <span>Name</span>
                        <input
                            ref={nameRef}
                            type='text'
                            placeholder='John Doe'
                            className="border-2 border-zinc500 rounded-md px-4 py-5 w-[420px] mt-4"
                        />
                    </label>
                    <label className="flex flex-col" title="Email" htmlFor="email" >
                        <span>Email</span>
                        <input
                            ref={emailRef}
                            type='email'
                            placeholder='johndoe@email.com'
                            className="border-2 border-zinc500 rounded-md px-4 py-5 w-[420px] mt-4"
                        />
                    </label>
                    <label className="flex flex-col" title="Password" htmlFor="password" >
                        <span>Password</span>
                        <input
                            ref={passwordRef}
                            type='password'
                            placeholder='johndoe@123'
                            className="border-2 border-zinc500 rounded-md px-4 py-5 w-[420px] mt-4"
                        />
                    </label>
                    <button className="text-zinc50 text-lg py-5 bg-zinc950 rounded-md w-full">Register</button>
                </form>
                <p className="text-center">Don't have an account ?
                    <Link className="text-violet800 font-bold hover:underline " to={"/"}>LogIn</Link>
                </p>
            </div>
            <div>
                <img src={Image} alt="boy and girl talking" />
            </div>
        </div>
    )
}