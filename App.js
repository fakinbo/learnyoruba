import { StyleSheet, View } from 'react-native';

import About from './components/about';
import Homescreen from './components/homescreen';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './common/helper';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { styled } from 'styled-components/native';

const StyledText = styled.Text`
    color: red;
    font-size: 50px;
`;
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stacks />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
