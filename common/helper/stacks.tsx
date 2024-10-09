import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';

import About from '../../components/About';
import Homescreen from '../../components/Homescreen';
import Profile from '../../components/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

export type RootStackParamList = {
    Home: { screen: keyof RootStackParamList, params?: { name: string} };
    About: { screen: keyof RootStackParamList, params?: { name: string} };
    Profile: { screen?: keyof RootStackParamList, params? : { userId: string } };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };

export const Stack = createNativeStackNavigator<RootStackParamList>();

const Stacks = () => {
    const scheme = useColorScheme();
    
    console.log("scheme: ", scheme);
    return ( <NavigationContainer independent={true} theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: true }}
    >
        <Stack.Group
        screenOptions={
            { headerShown: true,
            headerTitle: () => '',
        headerBlurEffect: 'light' }
        }>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false,
            headerTitle: () => '',
        headerBlurEffect: 'light' }}
        />
        <Stack.Screen
          name="About"
          component={About}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        </Stack.Group>
        </Stack.Navigator>
        </NavigationContainer>)
};

export default Stacks;