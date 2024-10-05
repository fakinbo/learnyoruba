import About from '../../components/About';
import Homescreen from '../../components/Homescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: { screen: keyof RootStackParamList, params: { name: string} };
    About: { screen: keyof RootStackParamList, params: { name: string} };
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };

export const Stack = createNativeStackNavigator<RootStackParamList>();

type stackType = typeof Stack['Navigator'];
const Stacks = () => {
    return ( <Stack.Navigator
    id="Root"
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
        </Stack.Group>
        </Stack.Navigator>)
};

export default Stacks;