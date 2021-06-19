import Image from "next/image";
import { signIn } from "next-auth/client";
interface Props{

}


const Login:React.FC<Props> = () =>  {
    return (
        <div
            className="flex space-x-2 justify-center"
            style={{ alignItems: "center" }}
        >
            <div className="flex flex-col space-y-2">
                <input type="text" placeholder="Email or phone number" />
                <input type="password" placeholder="password" />
            </div>
            <div className="flex flex-col space-y-2">
                <input type="text" placeholder="Email or phone number" />
                <input type="password" placeholder="password" />
            </div>
        </div>
    );
}

export default Login;
