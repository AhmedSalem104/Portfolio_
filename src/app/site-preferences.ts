import { Injectable, Pipe, PipeTransform, inject, signal } from '@angular/core';
import { ARABIC_COPY } from './arabic-copy';

export type SiteLanguage = 'en' | 'ar';
export type SiteTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class SitePreferences {
  readonly language = signal<SiteLanguage>(this.read('portfolio-language') === 'ar' ? 'ar' : 'en');
  readonly theme = signal<SiteTheme>(this.read('portfolio-theme') === 'dark' ? 'dark' : 'light');

  constructor() { this.apply(); }

  translate(value: string): string {
    return this.language() === 'ar' ? ARABIC_COPY[value] ?? value : value;
  }

  setLanguage(language: SiteLanguage): void {
    this.language.set(language);
    this.save('portfolio-language', language);
    this.apply();
  }

  toggleTheme(): void {
    const theme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(theme);
    this.save('portfolio-theme', theme);
    this.apply();
  }

  private apply(): void {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.lang = this.language();
    root.dir = this.language() === 'ar' ? 'rtl' : 'ltr';
    root.dataset['theme'] = this.theme();
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = this.theme() === 'dark' ? '#0b1220' : '#f3f7fb';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = this.language() === 'ar'
      ? 'أحمد عبد الحميد سالم، مهندس برمجيات Full-Stack أول بخبرة تزيد عن خمس سنوات في تطوير تطبيقات الويب المؤسسية باستخدام .NET وAngular.'
      : 'Ahmed Abd Elhamid Salem, Senior Full-Stack Software Engineer with 5+ years of experience building enterprise web applications with .NET and Angular.';
    document.title = this.language() === 'ar'
      ? 'أحمد سالم | مهندس برمجيات Full-Stack'
      : 'Ahmed Salem | Senior Full-Stack Software Engineer';
  }

  private read(key: string): string | null {
    try { return typeof localStorage === 'undefined' ? null : localStorage.getItem(key); }
    catch { return null; }
  }

  private save(key: string, value: string): void {
    try { localStorage.setItem(key, value); } catch { /* Storage can be unavailable. */ }
  }
}

@Pipe({ name: 'tr', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly preferences = inject(SitePreferences);
  transform(value: string | undefined | null): string {
    return value ? this.preferences.translate(value) : '';
  }
}
