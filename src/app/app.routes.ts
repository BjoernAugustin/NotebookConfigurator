import { Routes, RouterModule } from '@angular/router';
import { NB5251Component } from './nbconfigurator/nbresult/nb5251/nb5251.component';
import { NB6187Component } from './nbconfigurator/nbresult/nb6187/nb6187.component';
import { DEFAULTComponent } from './nbconfigurator/nbresult/default/default.component';

export const routes: Routes = [
    { path: '', component: DEFAULTComponent },
    { path: 'Medium A5', component: NB5251Component },
    { path: 'Pocket A6', component: NB6187Component },
];
