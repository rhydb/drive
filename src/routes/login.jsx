import { useContext, useState } from "react"
import { Form, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"
import { login } from "../utils/login"

export const Login = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        const user = await login();
        if (user.token) {
            setToken(user.token);
            navigate("/");
        }
    }

    return (
        <div className="h-screen w-full flex">
            <div className="m-auto">
                <h1 className="text-2xl font-bold">Login</h1>
                <Form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
                    <input onInput={e => setUsername(e.target.value)} placeholder="Username" type="text" className="input"/>
                    <input onInput={e => setPassword(e.target.value)} placeholder="Password" type="password" className="input"/>
                    <button disabled={!(username && password)} type="submit" className="btn-primary w-full mt-2">Login</button>
                </Form>
            </div>
        </div>
    )
}