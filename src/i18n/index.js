import I18n from 'react-native-i18n';

import de from './de';
import en from './en';

I18n.fallbacks = true;

I18n.translations = {
    en,
    de
};

export default I18n;
