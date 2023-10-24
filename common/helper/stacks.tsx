import About from "../../components/about";
import Homescreen from "../../components/homescreen";
// import { Stack } from "../../App";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export const Stack = createNativeStackNavigator();

type stackType = typeof Stack['Screen'];
const Stacks: React.FunctionComponent<typeof Stack.Navigator> = () => {
    return ( <Stack.Navigator
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
        />
        <Stack.Screen
          name="About"
          component={About}
        />
        </Stack.Group>
        </Stack.Navigator>)
};

export default Stacks;