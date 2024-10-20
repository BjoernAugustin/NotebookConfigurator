import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsdataService {

  constructor() { }

  detailOptions = {
    coverColor: "",
    penloopColor: "",
    enclosureColor: "",
    pagemarker1Color: "",
    pagemarker2Color: "",
    selektion: "",
    pmStripes: true, 
    isChecked: true
  }
  
}
