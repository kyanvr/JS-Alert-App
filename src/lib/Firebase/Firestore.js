/* eslint-disable no-console */
/**
 * Firestore
 */

import {
 collection, addDoc, getFirestore, query, onSnapshot, orderBy, Timestamp, setDoc,
 doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { initFirebase } from './Config';
import { Event } from '../../Components/Event';

class Firestore {
    constructor() {
        initFirebase();
    }

    static async addEventToFirestore(name, eventDate, startTime, endTime, location, about) {
        const db = getFirestore();

        // create a timestamp
        const timestamp = Timestamp.now().toDate();
        const date = new Date(timestamp);
        const convertDate = date.toLocaleString('nl-BE');

        // add event to firestore collection
        try {
            await addDoc(collection(db, 'events'), {
                name,
                eventDate,
                startTime,
                endTime,
                location,
                about,
                created_on: convertDate,
              });
        } catch (error) {
            const container = document.getElementById('createContainer');
            const errorP = document.createElement('div');
            errorP.textContent = error;

            container.appendChild(errorP);
        }
    }

    static async addUserToFirestore(firstname, lastname, username, phone, email, password, uid) {
        const db = getFirestore();

        // create a timestamp
        const timestamp = Timestamp.now().toDate();
        const date = new Date(timestamp);
        const convertDate = date.toLocaleString('nl-BE');

        // get uid from localstorage
        const id = localStorage.getItem('uid');

        // add the user to firestore collection
        try {
            await setDoc(doc(db, `users/${id}`), {
                firstname,
                lastname,
                username,
                phone,
                email,
                password,
                uid,
                created_on: convertDate,
              });
        } catch (error) {
            const container = document.getElementById('aiContainer');
            const errorP = document.createElement('div');
            errorP.textContent = error;

            container.appendChild(errorP);
        }
    }

    static getEvents() {
        const db = getFirestore();
        const q = query(collection(db, 'events'), orderBy('created_on', 'asc'));

        // get the events and listen for changes
        try {
            onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        Event(change.doc.data().name);
                    }

                    if (change.type === 'modified') {
                        console.log('event modified');
                    }

                    if (change.type === 'removed') {
                        console.log('event removed');
                    }
                });
            });
        } catch (error) {
            const container = document.getElementById('dashboardContainer');
            const errorP = document.createElement('div');
            errorP.textContent = error;

            container.appendChild(errorP);
        }
    }

    static async editProfile(fname, lname, uname, email, password, phone) {
        const db = getFirestore();

        // get uid from localstorage
        const id = localStorage.getItem('uid');

        const userDoc = doc(db, 'users', id);

        // update user profile in firestore
        await updateDoc(userDoc, {
            firstname: fname,
            lastname: lname,
            username: uname,
            email,
            password,
            phone,
        });
    }

    static async deleteProfile() {
        const db = getFirestore();

        // get uid from localstorage
        const id = localStorage.getItem('uid');

        // delete user from firestore
        await deleteDoc(doc(db, 'users', id));
    }
}

export default Firestore;
