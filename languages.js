const userLang = navigator.language || navigator.userLanguage;
const langCode = userLang.substring(0, 2);

// Translations
const translations = {
    en: {
    welcome: 'Welcome',
    },
    ru: {
        welcome: 'Добро пожаловать',
    },
    uk: {
        welcome: 'Ласкаво просимо',
    },
    pl: {
        welcome: 'Witamy',
    },
    cs: {
        welcome: 'Vítejte',
    },
};
function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
  const key = element.getAttribute('data-i18n');
  if (translations[key]) {
  if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
  element.setAttribute('placeholder', translations[key]);}
  else {element.innerHTML = translations[key];}}});}
  window.addEventListener('DOMContentLoaded', () => {
  applyTranslations(Object.values(translations).find((trans, i) => userLang.includes(Object.keys(translations)[i])));
  document.body.classList.remove('loading');}
);
