import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DetailsdataService } from '../../shared/detailsdata.service';
import { ColordataService } from '../../shared/colordata.service';
import { ProductdataService } from '../../shared/productdata.service';
import { PenloopComponent } from '../penloop/penloop.component';
import { PagemarkerComponent } from '../pagemarker/pagemarker.component';
import { EnclosureComponent } from '../enclosure/enclosure.component';

@Component({
  selector: 'app-nb6187',
  standalone: true,
  imports: [CommonModule, PenloopComponent, PagemarkerComponent, EnclosureComponent],
  templateUrl: './nb6187.component.html',
  styleUrl: './nb6187.component.scss'
})
export class NB6187Component {

  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);

}
