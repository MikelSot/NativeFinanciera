import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Params} from '../../App.tsx';
import CustomerList from '../modules/Home/CustomerList.tsx';

const Home = () => {
  const navigation = useNavigation<NavigationProp<Params>>();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomerList />
        <Pressable onPress={() => navigation.navigate('Crear', {id: 1})}>
          <Text>Ir a editar</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9Ef',
  },
});

export default Home;
