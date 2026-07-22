import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { AboutComponent } from './pages/about/about';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, AboutComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio hero', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Building digital systems');
  });

  it('should expose the current CV download', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cvLink = compiled.querySelector<HTMLAnchorElement>('a[download]');

    expect(cvLink?.getAttribute('href')).toBe('assets/cv/Ahmed_Salem_CV.pdf');
  });

  it('should render real experience values before count-up animation starts', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const stats = Array.from(compiled.querySelectorAll('.stat-value')).map((item) =>
      item.textContent?.trim()
    );

    expect(stats).toContain('5+');
    expect(stats).toContain('579+');
  });

  it('should highlight the speaking engagement from the CV', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.speaker-highlight')?.textContent).toContain(
      'Guest Speaker — Career Bridge Workshop'
    );
    expect(compiled.querySelector('.speaker-highlight')?.textContent).toContain(
      'Arab Open University'
    );
  });
});
