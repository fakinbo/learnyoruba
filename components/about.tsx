import { Button, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'styled-components/native';

const StyledText: typeof Text = styled.Text`
    color: black;
    font-size: 50px;
`;

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

const About: React.FunctionComponent<Props> = ({ navigation, route }) => {
    return(
        <View style={styles.container}>
             <Button
      title="Go to Home Page"
      onPress={() =>
        navigation.navigate('Home', { screen: 'About' , params: {name: 'Jane'} })
      }
    />
        <StyledText>About Page</StyledText>
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
