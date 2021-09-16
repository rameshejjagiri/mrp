import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomIdGenService {

  fourDigitRandomId: string;
  tenDigitRandomId: string;

  constructor() { }

  getFourDigitRandomId(): string {

    return Math.floor(1000 + Math.random() * 9000).toString();

  }
  getTenDigitRandomId(): string {

    return Math.floor(1000000000 + Math.random() * 9000000000).toString();

  }




}
