import { Button, StyleSheet, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../common/helper/Stacks';
import { styled } from 'styled-components/native';

const StyledText: ReturnType<typeof styled.Text> = styled.Text`
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

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homescreen: React.FunctionComponent<Props> = ({ navigation, route }) => {
    console.log('Navigation route ', route, "  object ", navigation)
    return(
        <View style={styles.container}>
        <StyledText>Learn Yoruba</StyledText>
        <Button
      title="Go to About Page"
      onPress={() =>
        navigation.navigate('About',{screen: 'Home', params: {name: 'Jane'} })
      }
    />
      </View>
    );
}



export default Homescreen;
