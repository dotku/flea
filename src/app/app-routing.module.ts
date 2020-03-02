import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { SignoutComponent } from "./signout/signout.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signout",
    component: SignoutComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule]
})
export class AppRoutingModule {}
