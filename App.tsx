import Home from './src/screens/Home.tsx';
import {createStackNavigator} from '@react-navigation/stack';
import Edit from './src/screens/Edit.tsx';
import Create from './src/screens/Create.tsx';

export type Params = {
  Home: undefined;
  Crear: undefined;
  Actualizar: {id: number};
};

const Stack = createStackNavigator<Params>();

export const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Crear" component={Create} />
      <Stack.Screen name="Actualizar" component={Edit} />
    </Stack.Navigator>
  );
};
