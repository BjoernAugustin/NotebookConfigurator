import { Component, inject } from '@angular/core';
import { LogooptionsComponent } from './logooptions/logooptions.component';
import { NboptionsComponent } from './nboptions/nboptions.component';
import { ColordataService } from './shared/colordata.service';
import { ProductdataService } from './shared/productdata.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DetailsdataService } from './shared/detailsdata.service';
import { NbvisualComponent } from './nbvisual/nbvisual.component';
import { DEFAULTComponent } from './nbresult/default/default.component';

@Component({
  selector: 'app-nbconfigurator',
  standalone: true,
  imports: [LogooptionsComponent, NboptionsComponent, DEFAULTComponent, NbvisualComponent, CommonModule, RouterOutlet],
  templateUrl: './nbconfigurator.component.html',
  styleUrl: './nbconfigurator.component.scss'
})
export class NbconfiguratorComponent {

constructor(public productdata: ProductdataService, public colordata: ColordataService, public detailsdata: DetailsdataService){}

}
