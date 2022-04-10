import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";

let useCollection = (collectionName) => {
    let error = ref("");
    let addDocument = async (data) => {
        try {
            await addDoc(collection(db, collectionName), data);
        } catch (err) {
            console.log(err.message);
            error.value = err;
        }
    }
    return { addDocument, error };
}
export default useCollection;