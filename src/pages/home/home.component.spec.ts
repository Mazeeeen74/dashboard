import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent], 
      providers: [provideHttpClient()], 
      imports: [NgApexchartsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /* Analytics appears test case */
  it('should get analytics', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h4');
    expect(title.textContent).toContain('Analytics');

  })

it('should found chart for total revenue', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const chart = compiled.querySelector('apx-chart');
  expect(chart).toBeTruthy();
})
});
