import { RNAndroidNotificationListenerHeadlessJsName } from 'react-native-android-notification-listener'

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
        const json = JSON.parse(notification);

        const data = {
            name: json.title,
            contents: json.text,
            cash: 0,
            billType: 'deposit',
            createdAt: "2024-06-27T15:03:45",
            bankNumber: '1234',
            bankCode: '1234',
        };

        try {
            const response = await fetch('https://alert.klr.kr/api/v1/alerts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            console.log('Notification successfully sent to server');

        } catch (error) {
            console.error('Failed to send notification to server:', error);
        }
    }
}

export {RNAndroidNotificationListenerHeadlessJsName, headlessNotificationListener};

