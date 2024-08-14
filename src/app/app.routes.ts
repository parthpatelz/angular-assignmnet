import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ExploreComponent } from './explore/explore.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { CommentsComponent } from './comments/comments.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'contact-us', component:FormComponent},
    {path: 'home', component:HomeComponent},
    {path: 'explore', component:ExploreComponent},
    {path: 'trip-planner', component: TripPlannerComponent},
    {path:'',component:HomeComponent},
    {path:'data',component:DataDisplayComponent},
    {path:'comments',component:CommentsComponent}
]
