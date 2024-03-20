import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectComponent} from "./components/project/project.component";
import {ContactComponent} from "./components/contact/contact.component";

export const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'experience',component:ExperienceComponent},{path:'project',component:ProjectComponent},{path:'contact',component:ContactComponent},];
