import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { RNAndroidNotificationListenerHeadlessJsName, headlessNotificationListener } from './src/utils';
import App from './App'
import 'react-native-gesture-handler';


/**
 * AppRegistry should be required early in the require sequence
 * to make sure the JS execution environment is setup before other
 * modules are required.
 */
AppRegistry.registerHeadlessTask(
    RNAndroidNotificationListenerHeadlessJsName,
    () => headlessNotificationListener
)

AppRegistry.registerComponent(appName, () => App)