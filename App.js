import { StatusBar } from 'expo-status-bar';
import {Home} from './src/screens';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <>
        <Home/>
        <StatusBar style="light" />
      </>
  );
}

