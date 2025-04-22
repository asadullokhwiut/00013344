import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXv8_oQwxJZ7PpqWGmy30RsWMMey9b4l4',
  authDomain: 'edumatch.firebaseapp.com',
  projectId: 'edumatch-7426e',
  appId: '746518505754',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);