import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { componentFactoryName } from "@angular/compiler";
import { HomeComponent } from "./pages/home/home.component";
import { NurseComponent } from "./pages/nurse/nurse.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { PatientComponent } from "./pages/patient/patient.component";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Final Project" } },
  {
    path: "nurse",
    component: NurseComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "signup", component: SignupComponent, data: { title: "Sign Up" } },
  {
    path: "patient",
    component: PatientComponent,
    data: { title: "Patient", expectedRole: "patient" },
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
