import {IMessage, NONE_WORD_RE} from './dmessage';

export default {
  get dictionary() {
    return localStorage.dictionary || '';
  },
  set dictionary(v: string) {
    localStorage.dictionary = v;
    localStorage.dictionaryRe = v.toLowerCase().split(/\r?\n+/).map(s => `${s.replace(NONE_WORD_RE, NONE_WORD_RE.source)}`).join('|');
  },
  get linksList() {
    return localStorage.linksList || '';
  },
  set linksList(v: string) {
    localStorage.linksList = v;
  },
  get dictionaryRe() {
    return localStorage.dictionaryRe || '';
  },
  get words() {
    return !!localStorage.words;
  },
  set words(v) {
    if (v) {
      localStorage.words = 1;
    } else {
      localStorage.removeItem('words');
    }
  },
  get equalColor() {
    return localStorage.equalColor || '#ff0';
  },
  set equalColor(v: string) {
    localStorage.equalColor = v;
  },
  get mainColor() {
    return localStorage['main-color'] || '#10EA1D73';
  },
  set mainColor(v: string) {
    localStorage['main-color'] = v;
  },
  get color() {
    return localStorage.color || '#461BE28C';
  },
  set color(v: string) {
    localStorage.color = v;
  },
  get messages(): IMessage[] {
    try {
      return JSON.parse(localStorage.messages) || [];
    } catch (_) { }
    return [];
  },
  set messages(v: IMessage[]) {
    localStorage.messages = JSON.stringify(v);
  },
  get messagesEqual(): IMessage[] {
    try {
      return JSON.parse(localStorage.messagesEqual) || [];
    } catch (_) { }
    return [];
  },
  set messagesEqual(v: IMessage[]) {
    localStorage.messagesEqual = JSON.stringify(v);
  },
  get links(): Array<string> {
    try {
      return JSON.parse(localStorage.links) || [];
    } catch (_) { }
    return [];
  },
  set links(v: Array<string>) {
    localStorage.links = JSON.stringify(v);
  }
};
