import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function testFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log("Documento encontrado:", doc.id, doc.data());
    });
  } catch (error) {
    console.error("Erro ao buscar documentos:", error);
  }
}

testFirestore();
