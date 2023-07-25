import * as React from 'react';
import { useState } from 'react';
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';
import Signin from './src/screens/Signin';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

WebBrowser.maybeCompleteAuthSession();
export default function App() {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const credential = GoogleAuthProvider.credential(
        response.params.id_token
      );
      signInWithCredential(auth, credential).then((user) => {
        console.log('###', user);
      });
    }
  }, [response]);

  return <Signin promptAsync={promptAsync} />;
}
