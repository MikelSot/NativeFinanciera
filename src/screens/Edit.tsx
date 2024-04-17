import {View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Params} from '../../App.tsx';
import {useEffect} from 'react';

const Edit = () => {
  const params = useRoute<RouteProp<Params, 'Actualizar'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: params.id});
  }, []);

  console.log(params);

  return <View></View>;
};

export default Edit;
