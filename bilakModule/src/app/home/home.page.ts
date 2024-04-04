import { Component } from '@angular/core';
import { Result } from '../results/Result';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  receivedFormData: Result | null = null;

  constructor() {}

  onReceiveFormData(data: any) {
    this.receivedFormData = data;
    console.log('Received data:', this.receivedFormData);
  }
}
