import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbconfiguratorComponent } from './nbconfigurator/nbconfigurator.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbconfiguratorComponent, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nbc';

}
