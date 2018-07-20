/**
 * common-js-utils expects couple of apis and constants for its function
 * for e.g. http methods need end point prefix constant, default header, Loader and notification apis
 * 
 * Below are the list of Dependency that this package expects to receive at the time of initialization
 * 
 * GLOBAL  - Object containing constants 
 * 
 * Sample
 * module.exports = {
    API_HOST: 'https://api.justride.in/api/admin/',
    RECORD_URL: 'https://api.justride.in/api/record/',
    COLORS: {
        GREEN_COLOR: '#41b6ac',
        BACKGROUND_COLOR: 'white',
        TEXT_COLOR: '#333',
        PRIMARY_COLOR: '#31b6e7'
    },
    ORGANIZATION: {
        name: 'Drivezy',
        logo: '//s3.ap-south-1.amazonaws.com/drivezy.com-assets/drivezy-brand-logo.png',
        headerLogo: 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1524554137_logo-main.png',
        secure: true
    },
    DATE_TIME_FORMAT: 'YYYY-MM-DD HH:mm',
    API_DATE_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
    DISPLAY_DATE_TIME_FORMAT: 'DD MMM YYYY, HH:mm',
    DATE_FORMAT: 'YYYY-MM-DD'
}
 * 
 * ToastNotifications  - Class containing apis for showing notifications
 * { success, error, warning, info }
 * 
 * 
 * Loader - Class constaining apis for starting and ending loader
 * { startLoader, endLoader }
 * 
 * GetItem, SetItem - Method for proving support equivalent to the localstorage
 */

import { IsObjectHaveKeys } from './common.utils';
import { Setter } from './getter.utils';

export function InitializeCommonJs(payload) {
    if (!IsObjectHaveKeys(payload)) {
        return;
    }

    for (let key in payload) {
        Setter(key, payload[key]);
    }
}