import { Component, inject} from '@angular/core';
import { ProductdataService } from '../../shared/productdata.service';
import { ColordataService } from '../../shared/colordata.service';
import { DetailsdataService } from '../../shared/detailsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagemarker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagemarker.component.html',
  styleUrl: './pagemarker.component.scss'
})
export class PagemarkerComponent {
  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);
}
