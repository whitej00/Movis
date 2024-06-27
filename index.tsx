import { AppRegistry } from 'react-native'
import { RNAndroidNotificationListenerHeadlessJsName } from 'react-native-android-notification-listener'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { name as appName } from './app.json'
import App from './App'

/**
 * Note that this method MUST return a Promise.
 * Is that why I'm using a async function here.
 */
const headlessNotificationListener = async ({ notification }: any) => {
    /**
     * This notification is a JSON string in the follow format:
     *  {
     *      "app": string,
     *      "title": string,
     *      "titleBig": string,
     *      "text": string,
     *      "subText": string,
     *      "summaryText": string,
     *      "bigText": string,
     *      "audioContentsURI": string,
     *      "imageBackgroundURI": string,
     *      "extraInfoText": string,
     *      "groupedMessages": Array<Object> [
     *          {
     *              "title": string,
     *              "text": string
     *          }
     *      ]
     *  }
     */

    if (notification) {
        /**
         * Here you could store the notifications in a external API.
         * I'm using AsyncStorage here as an example.
         */
        await AsyncStorage.setItem('@lastNotification', notification)
    }
}

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