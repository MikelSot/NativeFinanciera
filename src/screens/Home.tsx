import {SafeAreaView, StyleSheet, View} from 'react-native';
import CustomerList from '../modules/Home/CustomerList.tsx';
import {FAB} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Params} from '../../App.tsx';

const Home = () => {
  const navigation = useNavigation<NavigationProp<Params>>();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomerList />
      </SafeAreaView>
      <FAB
        icon=""
        label="+"
        style={styles.fab}
        onPress={() => navigation.navigate('Crear')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9Ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
