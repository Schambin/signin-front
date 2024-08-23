import { Link } from "react-router-dom";
import  Image  from '../../assets/small-team-discussing-ideas-2194220-0.svg';

export function RegisterUser() {
    return (
        <div className="w-full mt-28 flex gap-6 justify-center">
            <div className="max-w-96 px-10 py-14 items-center flex flex-col flex-wrap rounded-md border-2 border-zinc400">
                <h2>Welcome!</h2>
                <form action="#" className="flex flex-col items-center">
                    <input type="text"      placeholder="Name" />
                    <input type="text"      placeholder="Email" />
                    <input type="password"  placeholder="Password" />
                </form>
                <button>Register</button>
                <p>Already have an account ? <Link to="/">Login</Link></p>
            </div>
            <div className="">
                <img src={Image} alt="boy and girl talking" />
            </div>
        </div>
    )
}