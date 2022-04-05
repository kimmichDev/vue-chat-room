import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
let error = ref("");
let isLoging = ref(false);
let signIn = async (email, password) => {
    try {
        isLoging.value = true;
        let res = await signInWithEmailAndPassword(getAuth(), email, password);
        isLoging.value = false;
        return res;
    } catch (err) {
        // error.value = err.code;
        error.value = "Can't login account";
        isLoging.value = false;
    }
}
let useLogin = () => {
    return { error, signIn, isLoging };
}
export default useLogin;
