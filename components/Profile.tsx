import { Button, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'styled-components/native';
import { useTheme } from '@react-navigation/native';

const StyledText = styled.Text<{ colors: ReturnType<typeof useTheme>['colors']}>`
      color: ${ props => props.colors.text };
    font-size: 50px;
`;

const StyledView = styled.View<{ colors: ReturnType<typeof useTheme>['colors']}>`
      backgroundColor: ${ props => props.colors.background };
      color: ${ props => props.colors.text };
`;

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile: React.FunctionComponent<Props> = ({ navigation, route }) => {
    const { colors }: ReturnType<typeof useTheme> = useTheme();

    return(
        <StyledView colors={colors} style={styles.container}>
             <Button
      title="Go to Home Page"
      onPress={() =>
        navigation.navigate('Home', { screen: 'Profile' })
      }
    />
        <StyledText colors={colors}>Profile Page</StyledText>
      </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Profile;
