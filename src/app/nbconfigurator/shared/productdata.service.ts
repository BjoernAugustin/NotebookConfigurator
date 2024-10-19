import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor() { }

  productlist = [
    {
      name_ger: "Notizbuch Medium A5 Hardcover",
      name_eng: "Notebook Medium A5 Hardcover",
      format: "Medium A5",
      selektion: "NB5251",
      width: 145,
      height: 210
    },
    {
      name_ger: "Notizbuch Pocket A6 Hardcover",
      name_eng: "Notebook Pocket A6 Hardcover",
      format: "Pocket A6",
      selektion: "NB6187",
      width: 90,
      height: 150
    }
  ]
}
