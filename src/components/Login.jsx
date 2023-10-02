import { useDispatch } from "react-redux";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { login } from "../store/userSlice";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState(false);

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (userName && password && email) {
            dispatch(
                login({
                    userName: userName,
                    password: password,
                    email: email,
                    isLoggedIn: true,
                })
            );
            setShowError(false);
            return;
        }
        setShowError(true);
        return;
    };

    return (
        <div>
            <h1 className="font-bold text-3xl text-white ml-5 pt-5">
                Login Form
            </h1>
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col items-center"
            >
                <Input
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {showError && (
                    <p className="text-red-600 font-semibold">
                        Please Fill All Parts of the Form
                    </p>
                )}
                <Button text="Submit" />
            </form>
        </div>
    );
};

export default Login;
