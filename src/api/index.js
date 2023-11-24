import { ref as RefDb, get } from "firebase/database";
import { db } from "../firebase";
import { storage } from "../firebase";
import { getDownloadURL, getMetadata, ref } from "firebase/storage";

// export const getListStudent = async () => {
//   try {
//     const snapshot = await get(RefDb(db, "Students"));

//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       return data;
//     } else {
//       console.log("No data available");
//       return null; // or handle the case where no data is available
//     }
//   } catch (error) {
//     console.error(error);
//     throw error; // rethrow the error to be caught in the component
//   }
// };

// export const getImagesStudent = async () => {
//   const imageListRef = ref(storage, `Images/`);
//   try {
//     const response = await listAll(imageListRef);
//     return response
//   } catch (error) {
//     throw error;
//   }
// };

export const getListStudent = async () => {
  const studentsRef = RefDb(db, "Students");

  try {
    const snapshot = await get(studentsRef);

    if (snapshot.exists()) {
      const dataFromFirebase = Object.values(snapshot.val());

      // Điều chỉnh đường dẫn và tải ảnh từ Firebase Storage
      for (const item of dataFromFirebase) {
        const imageRef = ref(storage, `/Images/${item.id}.png`);

        try {
          // Check if the image exists before downloading
          const metadata = await getMetadata(imageRef);

          if (metadata) {
            const url = await getDownloadURL(imageRef);
            item.image = url;
          } else {
            console.error(`Image not found for ID ${item.id}`);
          }
        } catch (error) {
          console.error("Error downloading image: ", error);
        }
      }

      return dataFromFirebase;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getListNotifications = async () => {
  const studentsRef = RefDb(db, "Notifications");

  try {
    const snapshot = await get(studentsRef);

    if (snapshot.exists()) {
      const dataFromFirebase = Object.values(snapshot.val());

      // Điều chỉnh đường dẫn và tải ảnh từ Firebase Storage
      for (const item of dataFromFirebase) {
        const imageRef = ref(storage, `/Unknown/${item.idPerson}.png`);

        try {
          // Check if the image exists before downloading
          const metadata = await getMetadata(imageRef);

          if (metadata) {
            const url = await getDownloadURL(imageRef);
            item.image = url;
          } else {
            console.error(`Image not found for ID ${item.idPerson}`);
          }
        } catch (error) {
          console.error("Error downloading image: ", error);
        }
      }

      return dataFromFirebase;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};
