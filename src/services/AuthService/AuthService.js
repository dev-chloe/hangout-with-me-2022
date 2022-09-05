import AuthRepository from "repositories/firebase/AuthRepository";

// const signUp = async({ email, password }) => {
//   AuthRepository.createNewAccount({email, password});
// };

const signUp = async({ email, password }) => {
  AuthRepository.createNewAccount({email, password});
};

const login = ({ email, password }) => {
  AuthRepository.signIn({ email, password });
};

const logout = () => {
  AuthRepository.signOut();
};

const refresh = (callback) => {
  AuthRepository.checkAuthState(callback);
};

const saveProfile = (profile) => {
  AuthRepository.saveProfile(profile);
};

const AuthService = {
  signUp,
  login,
  logout,
  refresh,
  saveProfile
};

export default AuthService;