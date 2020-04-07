import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1V7HS3a517YBGh9KcPoXzoVt664I3_5w",
  authDomain: "twitch-chat-506d8.firebaseapp.com",
  databaseURL: "https://twitch-chat-506d8.firebaseio.com"
});
const base = Rebase.createClass(app.database());

// @elie: Using re-base... interesting !

export default base;
