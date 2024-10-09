import { Button, StyleSheet, View, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';

import Avatar from './Avatar';
import CardContainer from './CardContainer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { mock } from '../mock/mock';
import { styled } from 'styled-components/native';

const StyledView = styled.View<{ colors: ReturnType<typeof useTheme>['colors']}>`
      backgroundColor: ${ props => props.colors.background };
      color: ${ props => props.colors.text };
`;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
      flexDirection: 'column',
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homescreen: React.FunctionComponent<Props> = ({ navigation, route }) => {
    const { colors }: ReturnType<typeof useTheme> = useTheme();
    return(
        <StyledView style={ styles.container } colors={colors} >
            <Avatar navigation={navigation} route={route}/>
        <CardContainer cards={mock.cards} />
    
      </StyledView>
    );
}



export default Homescreen;
