import {initializeApp} from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore, updateDoc, arrayUnion } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoULpAo20eKHhZkXsvkvcAhnwa9c8QuIc",
  authDomain: "photo-tagging-app-d8ecb.firebaseapp.com",
  projectId: "photo-tagging-app-d8ecb",
  storageBucket: "photo-tagging-app-d8ecb.appspot.com",
  messagingSenderId: "455985555200",
  appId: "1:455985555200:web:d3eaba2458c6fbf37835e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getlevel(name){
  const levelsCol = collection(db, "levels");
  const levelsSnapshot = await getDocs(levelsCol);
  const levelList = levelsSnapshot.docs.map(doc => doc.data()[name]);
  return levelList;

}

export async function addToLeaderboard(time, level_name, name){
  if(time > 750){
    const levelDoc = doc(db, `leaderboard/${level_name}`)
    await updateDoc(levelDoc,{ games: arrayUnion({time: time/1000, name: name})});
  }
}

export async function getLeaderboardInfo(level_name){
  const leaderboardDocRef = doc(db, "leaderboard", level_name)
  const leaderboardDoc = await getDoc(leaderboardDocRef);
  return leaderboardDoc.data()
}

