import { Button, StyleSheet, View, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';

import Avatar from './Avatar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { styled } from 'styled-components/native';

const StyledText: ReturnType<typeof styled.Text> = styled.Text`
    color: green;
    font-size: 50px;
`;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#fff",
      padding: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homescreen: React.FunctionComponent<Props> = ({ navigation, route }) => {
    console.log('Navigation route ', route, "  object ", navigation)
    const scheme = useColorScheme();
    const theme: ReturnType<typeof useTheme> = useTheme();
    const {colors} = theme;
    console.log('theme ', theme, colors)

    return(
        <View style={ { ...styles.container, 'backgroundColor': colors.background }}>
            <Avatar navigation={navigation} route={route}/>
        <StyledText>Learn Yoruba</StyledText>
        <Button
      title="Go to About Page"
      onPress={() =>
        navigation.navigate('About',{ screen: 'Home' })
      }
    />
      </View>
    );
}



export default Homescreen;
