import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent} from '../app.component';
import { GithubComponent} from '../github/github.component';

const appRoutes: Routes = [
  { path: 'user', component: GithubComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'user', pathMatch: 'full'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);