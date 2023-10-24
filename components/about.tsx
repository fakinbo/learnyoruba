import { Button, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { styled } from 'styled-components/native';

const StyledText: typeof Text = styled.Text`
    color: black;
    font-size: 50px;
`;

const About = ({ navigation, route }) => {
    console.log('Navigation route ', route, "  object ", navigation)
    return(
        <View style={styles.container}>
             <Button
      title="Go to Home Page"
      onPress={() =>
        navigation.navigate('Home', {name: 'Jane'})
      }
    />
        <StyledText allowFontScaling>About Page</StyledText>
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

export default About;
