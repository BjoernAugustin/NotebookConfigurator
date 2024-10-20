import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { ProductdataService } from '../shared/productdata.service';
import { ColordataService } from '../shared/colordata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DetailsdataService } from '../shared/detailsdata.service';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-nboptions',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatChipsModule, MatInputModule, CommonModule, FormsModule, RouterOutlet, RouterModule, MatCheckboxModule],
  templateUrl: './nboptions.component.html',
  styleUrl: './nboptions.component.scss'
})
export class NboptionsComponent {

  constructor(public productdata: ProductdataService, public colordata: ColordataService, public detailsdata: DetailsdataService) { }



  getFormatOfCover(index: number) {
    this.detailsdata.detailOptions.selektion = this.productdata.productlist[index].selektion;
    this.productdata.indexFormat = index;
  }

  getColorOfCover(index: number) {
    this.detailsdata.detailOptions.coverColor = this.colordata.colorlist[index].hexcode;
    this.colordata.indexColor = index;
  }

  getColorOfPenloop(index: number) {
    this.detailsdata.detailOptions.penloopColor = this.colordata.colorlist[index].hexcode;
  }

  getColorOfEnclosure(index: number) {
    this.detailsdata.detailOptions.enclosureColor = this.colordata.colorlist[index].hexcode;
  }

  getColorOfPagemarkerOne(index: number) {
    this.detailsdata.detailOptions.pagemarker1Color = this.colordata.colorlist[index].hexcode;

    if (this.detailsdata.detailOptions.pagemarker1Color == this.detailsdata.detailOptions.coverColor) {
      this.detailsdata.detailOptions.pmStripes = true;
    } else {
      this.detailsdata.detailOptions.pmStripes = false;
    }
  }

  getColorOfPagemarkerTwo(index: number) {
    this.detailsdata.detailOptions.pagemarker2Color = this.colordata.colorlist[index].hexcode;
  }

}
