/**
 * @format
 * @flow strict-local
 */
import "./shim";
import React from 'react';
import {SafeAreaView} from 'react-native';
import nodejs from 'nodejs-mobile-react-native';

nodejs.start("main.js");
nodejs.channel.addListener(
    "message",
    (msg) => {
      alert(msg);
    }
);

const App: () => React$Node = () => {
  return (
      <SafeAreaView />
  );
};

export default App;
