import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { styled } from 'styled-components/native';

const StyledImage: ReturnType<typeof styled.Image> = styled.Image`
    height: 100%;
        width: 100%;

`;

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 70,
        borderRadius: 50,
      position: 'absolute',
      overflow: 'hidden',
      left: 40,
      top: 60,
      marginRight: 'auto',
      marginLeft: 'auto'
    },
  });

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Avatar: React.FunctionComponent<Props> = ({ navigation, route }) => {
    return(
        <TouchableOpacity activeOpacity={1}  style={styles.container} onPress={() => navigation.navigate('Profile', { params: { userId: 'testUserId'}})}>
        <StyledImage source={{
            uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
        }}  />
      </TouchableOpacity>
    );
}



export default Avatar;
