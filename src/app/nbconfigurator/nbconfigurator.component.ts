import { Component, inject } from '@angular/core';
import { LogooptionsComponent } from './logooptions/logooptions.component'
import { NboptionsComponent } from './nboptions/nboptions.component'
import { NbresultComponent } from './nbresult/nbresult.component';
import { ColordataService } from './shared/colordata.service';
import { ProductdataService } from './shared/productdata.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DetailsdataService } from './shared/detailsdata.service';

@Component({
  selector: 'app-nbconfigurator',
  standalone: true,
  imports: [LogooptionsComponent, NboptionsComponent, NbresultComponent, CommonModule, RouterOutlet],
  templateUrl: './nbconfigurator.component.html',
  styleUrl: './nbconfigurator.component.scss'
})
export class NbconfiguratorComponent {

  productdata = inject(ProductdataService);
  colordata = inject(ColordataService);
  detailsdata = inject(DetailsdataService);

}
