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
  operation:CalcType = "adicao"
  operations:CalcType[] = ["adicao", "divisao", "multiplicacao", "subtracao"]

  setValue1 (event:Event) {
    this.value1 = Number((event.target as HTMLInputElement).value)
  }

  setValue2 (event:Event) {
    this.value2 = Number((event.target as HTMLInputElement).value)
  }

  setOperation (event:Event) {
    this.operation = (event.target as HTMLSelectElement).value as CalcType
  }


}
