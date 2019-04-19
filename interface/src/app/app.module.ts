//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

//Components
import { AppComponent } from "./app.component";
import { NurseComponent } from "./pages/nurse/nurse.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { PatientDetailsComponent } from './pages/patient/patient-details/patient-details.component';
import { PatientClinicUpdateComponent } from './pages/patient/patient-clinic-update/patient-clinic-update.component';


//Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { PatientClinicListComponent } from './pages/patient/patient-clinic-list/patient-clinic-list.component';
//Authorization
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { UserService } from "./services/user.service";
import { VideosComponent } from "./pages/videos/videos.component";

@NgModule({
  declarations: [
    AppComponent,
    NurseComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    VideosComponent,
    PatientDetailsComponent,
    PatientClinicUpdateComponent,
    PatientClinicListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    FlashMessagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}