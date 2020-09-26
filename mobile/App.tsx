import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { Dosis_400Regular, Dosis_700Bold, useFonts } from '@expo-google-fonts/dosis';
import { Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import AppStack from './src/routes/AppStack';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Dosis_400Regular, 
    Dosis_700Bold,
    Rubik_400Regular, 
    Rubik_500Medium,
    Rubik_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
      <AppStack/>
      <StatusBar style="light" />
      </> 
    );  
  }
}
