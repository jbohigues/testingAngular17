import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter: number = 10;
  increaseBy(value: number) {
    this.counter += value;
    // console.log({ newValue: this.counter });
  }
}
