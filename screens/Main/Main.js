import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import firebaseService from '../../services/firebase';
import styles from './styles';


const Main = () => {

  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    (
      async () => {
        try {
          const userData = await firebaseService.getUser()
          setUserName(userData);
        } catch (e) {
          alert(e);
        }
      }
    )()
  },[])

    return (
      <View style={styles.container}>
        <Text>{`Bienvenido ${userName}!!`} </Text>
      </View>
    );
}

export default Main; 