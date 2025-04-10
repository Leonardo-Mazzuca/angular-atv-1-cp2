import { Component } from '@angular/core';
import { CalcType } from '../../../../@types/types';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  value1 = 0;
  value2 = 0;
  currentType:CalcType = "adicao"
  calcTypes:CalcType[] = ["adicao", "divisao", "multiplicacao", "subtracao"]
  result = 0;

  setValue1 (event:Event) {
    this.value1 = Number((event.target as HTMLInputElement).value)
  }

  setValue2 (event:Event) {
    this.value2 = Number((event.target as HTMLInputElement).value)
  }

  setType (event:Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.currentType = value as CalcType
  }

 

}
