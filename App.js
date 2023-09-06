import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainWindow.js'; // Importowanie drugiego widoku
import Settings from './screens/Settings.js';
import Mapa from './screens/Map.js';
import About from './screens/About.js';
import QRScan from './screens/QRScan.js';
import { useLoadingScreenLogic } from './components/LoadingScreen.js';
import LoadImg from './components/Load.js';
import { NavButtonsContext } from './components/NavButtonsContext.js';
// Ekran ładowania
const LoadingScreen = () => {
  const { loadFonts } = useLoadingScreenLogic();

  if (!loadFonts) {
    return null;
  }

  return (
    <LoadImg/>
  );
};

// Koniec - Ekran ładowania 




const Stack = createStackNavigator();

//Main screen to okno glowne
export default App = () => {
  const [activeButton, setActiveButton] = useState('Main');
  return (
    <NavButtonsContext.Provider value={{ activeButton, setActiveButton }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }}  /> 
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Mapa" component={Mapa} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="QRScan" component={QRScan} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavButtonsContext.Provider>
  );
};

