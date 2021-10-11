import { FourthComponent } from './components/fourth/fourth.component';
import { ThirdComponent } from './components/third/third.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'first',component: FirstComponent},
  {path: 'second',component: SecondComponent},
  {path: 'third',component: ThirdComponent},
  {path: 'fourth',component: FourthComponent},
  {path: '',redirectTo: '/first' , pathMatch: 'full'}, // willl redirect to first if no url is provided
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }, 
  {path: '**',component: FirstComponent} // wildcard  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
