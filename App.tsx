import {SafeAreaView} from 'react-native';
import CustomersList from './src/screens/CustomersList.tsx';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomersList name="Miguel" />
    </SafeAreaView>
  );
};
