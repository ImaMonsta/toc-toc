import firebase from "firebase";
import {
  toastr
} from "react-redux-toastr";
import {
  push
} from "react-router-redux";
import store from "../store";

export const CREATE_LOGIN_REQUEST = "CREATE_LOGIN_REQUEST";
export function createLoginRequest(user) {
  return {
    type: CREATE_LOGIN_REQUEST,
    user
  };
}

export const CREATE_LOGIN_RESPONSE = "CREATE_LOGIN_RESPONSE";
export function createLoginResponse(user) {
  return {
    type: CREATE_LOGIN_RESPONSE,
    user
  };
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export function loginResponse(user) {
  return {
    type: LOGIN_RESPONSE,
    user
  };
}

export const LOGOUT_RESPONSE = "LOGOUT_RESPONSE";
export function logoutResponse() {
  return {
    type: LOGOUT_RESPONSE
  };
}

export const CHECK_USER_STATE_RESPONSE = "CHECK_USER_STATE_RESPONSE";
export function checkUserStateResponse(user) {
  return {
    type: CHECK_USER_STATE_RESPONSE,
    user
  };
}

export const USER_REQUEST_FAILED = "USER_REQUEST_FAILED";
export function userRequestFailed(message, code) {
  return {
    type: USER_REQUEST_FAILED,
    message,
    code
  };
}

export const EMAIL_VERIFICATION_REQUEST = "EMAIL_VERIFICATION_REQUEST";
export function emailVerificationRequest(code) {
  return {
    type: EMAIL_VERIFICATION_REQUEST,
    code
  };
}

export const EMAIL_VERIFICATION_RESPONSE = "EMAIL_VERIFICATION_RESPONSE";
export function emailVerificationResponse(verified) {
  return {
    type: EMAIL_VERIFICATION_RESPONSE,
    verified
  };
}

////////////////////// 👾 \\\\\\\\\\\\\\\\\\\\\

export function checkUserState() {
  return dispatch => {
    return firebase.auth().onAuthStateChanged(user => {
      dispatch(checkUserStateResponse(user));
    });
  };
}

export function logout() {
  return dispatch => {
    return firebase
      .auth()
      .signOut()
      .then(response => {
        toastr.info(``, `Good Bye!`);
        dispatch(push("/"));
        dispatch(logoutResponse());
      })
      .catch(error => {
        const {
          code,
          message
        } = error;
        toastr.error(`Error: ${code}`, `${message}`);
      });
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        toastr.info(``, `Welcome!`);
        dispatch(push("/"));
        dispatch(loginResponse(user));
      })
      .catch(error => {
        const {
          code,
          message
        } = error;
        toastr.error(`Error: ${code}`, `${message}`);
      });
  };
}

export function createLogin(user) {
  return dispatch => {
    dispatch(createLoginRequest(user));
    if (user.password !== user.passwordConfirmation) {
      return toastr.error('Security Exception', 'Password does not match');
    }
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(response => {
        console.log(response);
        toastr.info(``, `Verification email sent to ${response.email}!`);
        dispatch(push("/"));
        dispatch(createLoginResponse(response));
        response.sendEmailVerification();
        console.log(response);
        store.firebase.set(`/candidates/-${response.uid}`, {
          fullName: user.fullName,
          email: response.email,
          lastUpdate: Date.now()
        });
      })
      .catch(error => {
        const {
          code,
          message
        } = error;
        toastr.error(`Error: ${code}`, `${message}`);
        console.error(code, message);
      });
  };
}

export function verifyEmail(actionCode) {
  return dispatch => {
    dispatch(emailVerificationRequest(actionCode));
    return firebase
      .auth()
      .applyActionCode(actionCode)
      .then(resp => {
        dispatch(emailVerificationResponse(true));
      })
      .catch(error => {
        const {
          code,
          message
        } = error;
        toastr.error(`Error: ${code}`, `${message}`);
      });
  };
}

export function setProfileInfo(userId, address, phone, title, fb, tw, g, lin) {
  return dispatch => {
    store.firebase.set(`/candidates/-${userId}/lastUpdate`, Date.now());
    const detail = {
      address: address || '',
      phone: phone || '',
      title: title || '',
      fb: fb || '',
      tw: tw || '',
      g: g || '',
      lin: lin || ''
    };
    //console.log(detail);
    return store.firebase.set(`/candidates/-${userId}/profile`, detail);
  };
}

export function pushProfileImage(userId, name, image) {
  return dispatch => {
    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child(`profile/${userId}`);
    imageRef.put(image).then(snapshot => {
      store.firebase.set(
        `/candidates/-${userId}/image`,
        snapshot.downloadURL
      );
      toastr.success(`Storage response: ${snapshot.state}`, `Image uploaded`);
    });
  };
}