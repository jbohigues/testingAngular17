import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('increaseBy must increment according to the argument', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  it('click buttons should increment or decrement in 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(9);
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(11);
  });

  it('function increaseBy should change text in html', () => {
    component.increaseBy(10);

    // sin esto no funciona, debemos detectar cambios
    fixture.detectChanges();

    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('20');
  });
});
