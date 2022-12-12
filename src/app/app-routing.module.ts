import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavBarComponent } from './dashbord/side-nav-bar/side-nav-bar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: 'sidenavbar', component: SideNavBarComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
