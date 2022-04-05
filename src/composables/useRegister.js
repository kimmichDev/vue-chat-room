import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
let isRegistering = ref(false);
let error = ref("");
let signUp = async (displayName, email, password) => {
    try {
        isRegistering.value = true;
        let res = await createUserWithEmailAndPassword(getAuth(), email, password);
        await updateProfile(res.user, { displayName });
        isRegistering.value = false;
        return res;
    } catch (err) {
        error.value = err.message;
        isRegistering.value = false;
    }
}
let useSignUp = () => {
    return { isRegistering, error, signUp };
}
export default useSignUp;