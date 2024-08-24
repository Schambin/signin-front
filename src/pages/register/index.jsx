import Image from '../../assets/small-team-discussing-ideas-2194220-0.svg';
import { Link } from 'react-router-dom';
import { Input } from '../../components/input/index';

export function RegisterUser() {
    return (
        <div className="w-full mt-28 flex gap-6 justify-center">
            <div className="max-w-xl px-10 py-14 flex flex-col rounded-md border-2 border-zinc300 gap-12 shadow-2xl">
                <div>
                    <h1 className="text-2xl text-left">Welcome!</h1>
                    <p className="font-medium text-3xl">Sign Up</p>
                </div>
                <form action="#" className="flex flex-col items-center gap-7">
                    <label className="flex flex-col" title="Name" htmlFor="Name" >
                        <span>Name</span>
                        <Input type={'email'} placeholder={'John Doe'} />
                    </label>
                    <label className="flex flex-col" title="Email" htmlFor="email" >
                        <span>Email</span>
                        <Input type={'email'} placeholder={'johndoe@email.com'} />
                    </label>
                    <label className="flex flex-col" title="Password" htmlFor="password" >
                        Password<Input type={'password'} placeholder={'Your Password'} />
                    </label>
                </form>
                <button className="text-zinc50 text-lg py-5 bg-zinc950 rounded-md">Register</button>
                <p className="text-center">Don't have an account ?
                    <Link className="text-violet800 font-bold hover:underline " to={"/"}>LogIn</Link>
                </p>
            </div>
            <div className="">
                <img src={Image} alt="boy and girl talking" />
            </div>
        </div>
    )
}