import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { logout, selectUser } from "../store/userSlice";

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <p className="py-10 text-white text-xl font-semibold">
                Welcome {user.userName}
            </p>
            <Button text="Logout" onClick={handleLogout} />
        </>
    );
};

export default Logout;
