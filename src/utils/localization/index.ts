import LocalizedStrings from 'react-native-localization';
import id from '@assets/lang/id.json';

/**
 * If you want to add language, please add on src/assets/lang
 *
 * Language constant must be in snake_case
 */
const Word = new LocalizedStrings({
  id,
});

export default Word;
