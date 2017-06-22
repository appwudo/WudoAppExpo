import Expo from 'expo';
import I18n from 'i18n-js';

import en from './locale_en';
import de from './locale_de';

I18n.defaultLocale = 'en-GB';
I18n.fallbacks = true;

function setLocale() {
    Expo.Util
    .getCurrentLocaleAsync()
    .then((result) => {
        // console.log('Result: ' + result);
        I18n.locale = result;
    })
    .catch(console.log('Locale error'));
    // console.log('locale now?: ' + I18n.currentLocale());
}

setLocale();

I18n.translations = {
    en,
    de,
};

export default I18n;
