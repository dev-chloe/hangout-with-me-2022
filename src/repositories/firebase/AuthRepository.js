import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./index.js";

const createNewAccount = async ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password);
};

const signIn = async ({ email, password}) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const signOut = async () => {
  auth.signOut();
};


const checkAuthState = async (callback) => {
  auth.onAuthStateChanged(callback);
};

const saveProfile = async (profile) => {
  updateProfile(auth.currentUser, profile);
}; 


const AuthRepository = {
  createNewAccount,
  signIn,
  signOut,
  checkAuthState,
  saveProfile
};

export default AuthRepository;
