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
    RECORD_URL: 'https://api.justride.in/api/record/'
  }
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