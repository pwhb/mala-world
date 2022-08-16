import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  translations: {
    en: { lang },
    my: { lang },
  },
  loaders: [
    // {
    //   locale: 'en',
    //   key: 'menu',
    //   loader: async () => (await import('./en/menu.json')).default,
    // },
    // {
    //   locale: 'en',
    //   key: 'about',
    //   routes: ['/about'],
    //   loader: async () => (await import('./en/about.json')).default,
    // },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    // {
    //   locale: 'my',
    //   key: 'menu',
    //   loader: async () => (await import('./my/menu.json')).default,
    // },
    // {
    //   locale: 'my',
    //   key: 'about',
    //   routes: ['/about'],
    //   loader: async () => (await import('./my/about.json')).default,
    // },
    {
      locale: 'my',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./my/home.json')).default,
    },
  ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));