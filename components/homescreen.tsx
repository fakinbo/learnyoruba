import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { NavigationProp, ParamListBase, RouteProp, TypedNavigator } from '@react-navigation/native';

import { Stack } from '../common/helper/stacks';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'styled-components/native';

const StyledText: typeof Text = styled.Text`
    color: green;
    font-size: 50px;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

type Props = {
route: RouteProp<{}>,
navigation: NavigationProp<{
    name: string,
    params: { name: string }
}>
};

const Homescreen = ({ navigation, route }) => {
// const Homescreen: ScreenComponentType<ParamListBase, "Home"> | undefined = ({ navigation, route }) => {
    // navigation.setOptions({
    //     headerShown: false
    // })
    console.log('Navigation route ', route, "  object ", navigation)
    return(
        <View style={styles.container}>
        <StyledText allowFontScaling>Learn Yoruba</StyledText>
        <Button
      title="Go to About Page"
      onPress={() =>
        // navigation.navigate('About', {name: 'Jane'})
        navigation.navigate('About', {name: 'Jane'})
      }
    />
      </View>
    );
}



export default Homescreen;
