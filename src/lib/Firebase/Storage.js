/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/**
 * Firebase Storage
 */

import { getAuth } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Component from '../Component';
import Elements from '../Elements';
import { initFirebase, initStorage } from './Config';

export default class Storage extends Component {
    constructor() {
        super(
            initFirebase(),
            initStorage(),
        );
    }

    static createRef(avatar) {
        // Get the UID from local storage
        const uid = localStorage.getItem('uid');

        // Create a storage reference from our storage service
        const storageRef = ref(initStorage, `users/${uid}`);

        // upload image to storage
        uploadBytes(storageRef, avatar).then((snapshot) => console.log('Uploaded a file')).catch((e) => console.log(e));
    }

    static async downloadAvatar() {
        // Get the UID from local storage
        const uid = localStorage.getItem('uid');

        // download image from storage and return img element
        try {
            // if user has registered with email, find his avatar img
            const url = await getDownloadURL(ref(initStorage, `users/${uid}`));
            if (url) {
                const avatar = Elements.createImage({
                    src: url,
                    alt: 'userAvatar',
                    id: 'userAvatar',
                });
                return avatar;
            }
        } catch {
            // if user is logged in with Google, find his avatar
            try {
                const auth = getAuth();
                const user = auth.currentUser;

                const avatar = Elements.createImage({
                    src: user.photoURL,
                    alt: 'userAvatar',
                    id: 'userAvatar',
                });

                return avatar;
            } catch (error) {
                console.error(error);
            }
        }
    }
}
