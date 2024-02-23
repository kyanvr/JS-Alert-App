/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/**
 * Authenticator
 */

import {
 getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged,
 signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, deleteUser,
 updateEmail, updatePassword,
} from 'firebase/auth';
import { initFirebase } from './Config';
import Router from '../../Router';
import Storage from './Storage';
import Firestore from './Firestore';
import Component from '../Component';

export default class Authenticator {
    constructor() {
        initFirebase();
    }

    static async initRegister() {
        // get formdata
        const form = document.getElementById('registerForm');
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        // this.auth doesn't work, so this is the only thing that fixes it
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { user } = userCredential;
                updateProfile(auth.currentUser, {
                }).then(() => {
                    // Profile updated!
                    user.email = email;
                    user.password = password;
                    localStorage.setItem('uid', user.uid);
                    Router.navigate('/ai');
                }).catch((error) => {
                    // An error occurred
                    console.log(error);
                });
            });
        } catch (error) {
            Component.showError(error.message);
        }
    }

    static async initLogin() {
        // get formdata
        const form = document.getElementById('loginForm');
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        // this.auth doesn't work, so this is the only thing that fixes it
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed in
                const { user } = userCredential;
                user.email = email;
                user.password = password;
                localStorage.setItem('uid', user.uid);
                Router.navigate('/dashboard');
            });
        } catch (error) {
            Component.showError(error.message);
        }
    }

    static async googleLogin() {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(() => {
            // login successful
            Router.navigate('/ai_google');
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            const container = document.getElementById('registerContainer');
            const errorDiv = document.createElement('div');
            errorDiv.textContent = errorMessage;

            container.appendChild(errorDiv);
        });
    }

    static addAdditionalInfo() {
        // get formdata
        const form = document.getElementById('AIForm');
        const formData = new FormData(form);
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
        const username = formData.get('username');
        const phone = formData.get('phone');
        const avatar = formData.get('avatar');
        console.log('added');

        // this.auth doesn't work, so this is the only thing that fixes it
        const auth = getAuth();
        const user = auth.currentUser;
        if (user.displayName === null) user.displayName = `${firstname} ${lastname}`;

        Firestore.addUserToFirestore(
            firstname,
            lastname,
            username,
            phone,
            user.email,
            user.password,
            user.uid,
        );
        if (!user.photoURL) Storage.createRef(avatar);
    }

    static signOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            // Clear localstorage and reroute to register page
            localStorage.clear();
            Router.navigate('/');
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            const container = document.getElementById('dashboardContainer');
            const errorDiv = document.createElement('div');
            errorDiv.textContent = errorMessage;

            container.appendChild(errorDiv);
        });
    }

    static getUserProfile() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            return user;
        }
    }

    static updateEmail(email) {
        const auth = getAuth();
        updateEmail(auth.currentUser, email).then(() => {
            // Email updated!
            console.log('Email updated');
        }).catch((error) => {
            // An error occurred
            const errorMessage = error.message;
            const container = document.getElementById('settingsContainer');
            const errorDiv = document.createElement('div');
            errorDiv.textContent = errorMessage;

            container.appendChild(errorDiv);
        });
    }

    static updatePassword(password) {
        const auth = getAuth();
        const user = auth.currentUser;
        updatePassword(user, password).then(() => {
            // Update successful.
            console.log('Password updated');
          }).catch((error) => {
            // An error ocurred
            const errorMessage = error.message;
            const container = document.getElementById('settingsContainer');
            const errorDiv = document.createElement('div');
            errorDiv.textContent = errorMessage;

            container.appendChild(errorDiv);
          });
    }

    static deleteUserProfile() {
        const auth = getAuth();
        const user = auth.currentUser;

        // ask if user is certain to delete his profile
        const finalCheck = prompt('Are you sure you want to delete your profile? Type yes or no', 'no');
        console.log(finalCheck);
        if (finalCheck === 'yes') {
            deleteUser(user).then(() => {
                // User deleted.
                // Delete user from firestore and reroute to register page
                Firestore.deleteProfile();
                Router.navigate('/');
            }).catch((error) => {
                // An error ocurred
                console.error(error);
            });
        } else Router.navigate('/settings');
    }
}
