import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { styled } from 'styled-components/native';
import { useTheme } from '@react-navigation/native';

const StyledImage: ReturnType<typeof styled.Image> = styled.Image`
    height: 100%;
        width: 100%;

`;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '70%',
        // display: 'flex',
    //   flexDirection: 'column',
    //   backgroundColor: "grey",
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
  });

export type Card = {
    id: string,
    uri: string,
    firstName: string,
    lastName: string,
    username: string
};

type Props = {
    cards: Card[]
}

const CardContainer: React.FunctionComponent<Props> = ({ cards }) => {
    const { colors }: ReturnType<typeof useTheme> = useTheme();
    return(
        <View style={ { ...styles.container }}>
            
        </View>
    );
}



export default CardContainer;
