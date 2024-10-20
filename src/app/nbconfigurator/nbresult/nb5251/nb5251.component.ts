import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductdataService } from '../../shared/productdata.service';
import { ColordataService } from '../../shared/colordata.service';
import { DetailsdataService } from '../../shared/detailsdata.service';
import { PenloopComponent } from '../penloop/penloop.component';
import { PagemarkerComponent } from '../pagemarker/pagemarker.component';
import { EnclosureComponent } from '../enclosure/enclosure.component';

@Component({
  selector: 'app-nb5251',
  standalone: true,
  imports: [CommonModule, PenloopComponent, PagemarkerComponent, EnclosureComponent],
  templateUrl: './nb5251.component.html',
  styleUrl: './nb5251.component.scss'
})
export class NB5251Component {

  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);

}
