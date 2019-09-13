import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { ErrorInterceptor } from 'src/app/_helpers/error.interceptor';
import { JWTInterceptor } from 'src/app/_helpers/jwt.interceptor';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { UnrealBackendProvider } from './_helpers/unreal-backend';
import { ConsultantProfileComponent } from './consultant-profile/consultant-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchFormComponent,
    SearchResultPageComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ConsultantProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    UnrealBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
