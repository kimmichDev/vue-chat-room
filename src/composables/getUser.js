import "../firebase/config";
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let user = ref(getAuth().currentUser);
let userData = () => {
    try {
        onAuthStateChanged(getAuth(), (currentUser) => {
            user.value = currentUser;
            return user.value;
        });
    } catch (error) {
        console.log(error.message);
    }
}
userData();
let getUser = () => {
    return { user }
}
export default getUser;