import { Component, inject } from '@angular/core';
import { ProductdataService } from '../../shared/productdata.service';
import { ColordataService } from '../../shared/colordata.service';
import { DetailsdataService } from '../../shared/detailsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enclosure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enclosure.component.html',
  styleUrl: './enclosure.component.scss'
})
export class EnclosureComponent {
  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);
}
