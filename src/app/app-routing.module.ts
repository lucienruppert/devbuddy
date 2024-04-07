import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FbCoverComponent } from './fb-cover/fb-cover.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'fb-cover',
    component: FbCoverComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
