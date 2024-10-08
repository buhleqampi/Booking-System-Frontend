import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HaircutsComponent } from './components/haircuts/haircuts.component';
import { BookingComponent } from './components/booking/booking.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path : 'dashboard',component:BookingsComponent},
  {path: 'service', component:ServiceComponent},
  {path: 'service/:id', component: SingleServiceComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'receipts', component: HaircutsComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


