import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor() { }

  indexFormat = 0;

  penloopIsChecked = false;
  ebIsChecked = false;

  bbIsTopPosition = false;
  bbIsMidPosition = true;
  bbIsLowPosition = false;

  setBBPosition() {
    if(this.penloopIsChecked) {
      this.bbIsMidPosition = false;
      this.bbIsTopPosition = true;
    } else {
      this.bbIsMidPosition = true;
      this.bbIsTopPosition = false;
      this.bbIsLowPosition = false;
    }
  }

  productlist = [
    {
      name_ger: "Notizbuch Medium A5 Hardcover",
      name_eng: "Notebook Medium A5 Hardcover",
      format: "Medium A5",
      selektion: "NB5251",
      width: 145,
      height: 210,
      thickness: 18,
      ebmargin: 19,
      bbheight: 80
    },
    {
      name_ger: "Notizbuch Pocket A6 Hardcover",
      name_eng: "Notebook Pocket A6 Hardcover",
      format: "Pocket A6",
      selektion: "NB6187",
      width: 90,
      height: 150,
      thickness: 12,
      ebmargin: 14,
      bbheight: 80
    }
  ]
}
