import { CommonModule } from '@angular/common';
import { Component, inject, Input, ViewEncapsulation} from '@angular/core';
import { ProductdataService } from '../shared/productdata.service';
import { ColordataService } from '../shared/colordata.service';
import { NB5251Component } from './nb5251/nb5251.component';
import { NB6187Component } from './nb6187/nb6187.component';
import { RouterOutlet } from '@angular/router';
import { DEFAULTComponent } from './default/default.component';
import { DetailsdataService } from '../shared/detailsdata.service';

@Component({
  selector: 'app-nbresult',
  standalone: true,
  imports: [CommonModule, NB5251Component, NB6187Component, RouterOutlet, DEFAULTComponent],
  templateUrl: './nbresult.component.html',
  styleUrl: './nbresult.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NbresultComponent {

  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);

  test() {
    console.log('checked = ', this.detailsdata.detailOptions.isChecked)
  }

}
