import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';

// Configure host for detecting emulator (usually for iOS)
const {scriptURL} = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  Reactotron.configure({
    host: scriptHostname,
  })
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  // monkey patch old console, log all old console to reactotron
  const oldConsoleLog = console.log;
  console.log = (...args) => {
    oldConsoleLog(...args);
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };
}
