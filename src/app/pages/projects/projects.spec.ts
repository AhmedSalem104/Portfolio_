import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectsComponent] }).compileComponents();
  });

  it('should start with the lightweight flagship selection', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;

    expect(component.activeFilter).toBe('flagship');
    expect(component.filteredProjects.length).toBe(4);
    expect(component.filteredProjects.every((project) => project.category === 'flagship')).toBeTrue();
  });

  it('should expose the complete project archive on demand', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;

    component.setFilter('all');

    expect(component.filteredProjects.length).toBe(component.projects.length);
    expect(component.filteredProjects.length).toBeGreaterThan(10);
  });
});
