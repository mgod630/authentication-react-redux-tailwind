import Logout from "./components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";
import Login from "./components/Login";

function App() {
    const user = useSelector(selectUser);
    return (
        <div>
            <div className="rounded w-5/6 sm:w-1/2 text-center mx-auto mt-20 bg-slate-400">
                {user ? <Logout /> : <Login />}
            </div>
        </div>
    );
}

export default App;
