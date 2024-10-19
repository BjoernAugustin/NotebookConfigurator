import { Component, inject } from '@angular/core';
import { ProductdataService } from '../../shared/productdata.service';
import { ColordataService } from '../../shared/colordata.service';
import { DetailsdataService } from '../../shared/detailsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-penloop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './penloop.component.html',
  styleUrl: './penloop.component.scss'
})
export class PenloopComponent {
  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);
}
