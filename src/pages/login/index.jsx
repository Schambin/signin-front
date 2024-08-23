import { Link } from "react-router-dom"
import Image  from '../../assets/small-team-discussing-ideas-2194220-0.svg';
import { Input } from '../../components/input/index'

export function Login() {
    return (
        <div className="w-full mt-28 flex gap-6 justify-center">
            <div className="max-w-96 px-10 py-14 flex flex-col flex-wrap rounded-md border-2 border-zinc400">
            <h1 className="text-2xl text-left">Welcome!</h1>
            <p className="font-medium text-3xl">Sign In</p>
                <form action="#" className="flex flex-col items-center">
                    <label htmlFor="email" >
                        <Input type={'email'}/>
                    </label>
                    <label title="Password" htmlFor="password" >
                        <Input type={'password'}/>
                    </label>
                </form>
                <button>Login</button>
                <p>Don't have an account  ?  <Link to={"/register"}>Register</Link></p>
            </div>
            <div className="">
                <img src={Image} alt="boy and girl talking" />
            </div>
        </div>
    )
}