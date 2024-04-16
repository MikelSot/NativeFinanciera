import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);

export default Main;
