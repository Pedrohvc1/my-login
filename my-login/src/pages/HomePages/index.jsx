import React, { useContext} from "react";
import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    };
    return(
        <>
        <h1>HomePage</h1>
        <button onClick={handleLogout}>Sair</button>
        </>
    )
}
export default HomePage