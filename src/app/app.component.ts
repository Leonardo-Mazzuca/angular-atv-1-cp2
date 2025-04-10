import { AccessComponent } from './components/access/access.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonthSwitchComponent } from './components/month-switch/month-switch.component';
import { DynamicListComponent } from './components/dynamic-list/dynamic-list.component';
import { DynamicActionsComponent } from './components/dynamic-actions/dynamic-actions.component';
import { MultipleCasesComponent } from './components/multiple-cases/multiple-cases.component';
import { ClassmateListComponent } from './components/classmate-list/classmate-list.component';
import { NumberSwitchComponent } from './components/number-switch/number-switch.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MonthSwitchComponent,
    DynamicListComponent,
    AccessComponent,
    DynamicActionsComponent,
    MultipleCasesComponent,
    ClassmateListComponent,
    NumberSwitchComponent,
    LoginComponent,
    ProductListComponent,
    CalculatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
