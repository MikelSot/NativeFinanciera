import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';

const Main = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);

export default Main;
