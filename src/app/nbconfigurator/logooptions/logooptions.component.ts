import { Component, inject} from '@angular/core';
import { ProductdataService } from '../shared/productdata.service';
import { ColordataService } from '../shared/colordata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logooptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logooptions.component.html',
  styleUrl: './logooptions.component.scss'
})
export class LogooptionsComponent {

  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);

}
