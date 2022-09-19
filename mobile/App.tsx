import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Background/Loading';
import { Routes } from './src/routes';
import './src/services/notificationConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'
import { Subscription } from 'expo-modules-core'




export default function App() {
 const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  })
  return (
    <Background >
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}