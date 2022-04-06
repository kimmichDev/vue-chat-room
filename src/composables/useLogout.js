import "../firebase/config";
import { getAuth } from "firebase/auth";
let logout = () => {
    try {
        getAuth().signOut();
        console.log("signout");
    } catch (error) {
        console.log(error.message);
    }
}
let useLogOut = () => {
    return { logout };
}
export default useLogOut;