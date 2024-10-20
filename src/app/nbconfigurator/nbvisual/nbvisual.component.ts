import { Component } from '@angular/core';
import { ProductdataService } from '../shared/productdata.service';
import { ColordataService } from '../shared/colordata.service';
import { DetailsdataService } from '../shared/detailsdata.service';
import { DEFAULTComponent } from '../nbresult/default/default.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nbvisual',
  standalone: true,
  imports: [CommonModule, DEFAULTComponent],
  templateUrl: './nbvisual.component.html',
  styleUrl: './nbvisual.component.scss'
})
export class NbvisualComponent {

  constructor(public productdata: ProductdataService, public colordata: ColordataService, public detailsdata: DetailsdataService){}

}
