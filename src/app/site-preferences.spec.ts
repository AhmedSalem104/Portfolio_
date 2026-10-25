import { SitePreferences } from './site-preferences';

describe('SitePreferences', () => {
  afterEach(() => {
    localStorage.removeItem('portfolio-language');
    localStorage.removeItem('portfolio-theme');
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    delete document.documentElement.dataset['theme'];
  });

  it('switches language, document direction and theme while saving preferences', () => {
    localStorage.removeItem('portfolio-language');
    localStorage.removeItem('portfolio-theme');
    const preferences = new SitePreferences();

    preferences.setLanguage('ar');
    preferences.toggleTheme();

    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem('portfolio-language')).toBe('ar');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
    expect(preferences.translate('View my projects')).toBe('تصفح مشاريعي');
  });

  it('restores saved language and theme on a new visit', () => {
    localStorage.setItem('portfolio-language', 'ar');
    localStorage.setItem('portfolio-theme', 'dark');

    const preferences = new SitePreferences();

    expect(preferences.language()).toBe('ar');
    expect(preferences.theme()).toBe('dark');
    expect(document.documentElement.dir).toBe('rtl');
  });
});
