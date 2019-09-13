import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SearchResultPageComponent } from 'src/app/search-result-page/search-result-page.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { ConsultantProfileComponent } from 'src/app/consultant-profile/consultant-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'search-result',component:SearchResultPageComponent},
  {path:'register',component:RegisterComponent},
  {path:'consultant/:id',component:ConsultantProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
