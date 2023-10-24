import { Button, StyleSheet, Text, View } from 'react-native';

import { Stack } from '../common/helper/stacks';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'styled-components/native';

const StyledText: typeof Text = styled.Text`
    color: black;
    font-size: 50px;
`;

const Homescreen: React.FunctionComponent = ({ navigation, route }) => {
    // navigation.setOptions({
    //     headerShown: false
    // })
    console.log('Navigation route ', route, "  object ", navigation)
    return(
        <View style={styles.container}>
        <StyledText allowFontScaling>Learn Yoruba!</StyledText>
        <Button
      title="Go to About Page"
      onPress={() =>
        navigation.navigate('About', {name: 'Jane'})
      }
    />
      </View>
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

export default Homescreen;
