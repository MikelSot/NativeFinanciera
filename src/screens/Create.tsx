import {View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Params} from '../../App.tsx';
import {useEffect} from 'react';

const Create = () => {
  const params = useRoute<RouteProp<Params, 'Crear'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: params.id});
  }, []);

  console.log(params);

  return <View></View>;
};

export default Create;
