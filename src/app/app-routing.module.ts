import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookingComponent } from './components/Customer_components/booking/new-booking/new-booking.component';
import { UpdateBookingComponent } from './components/Customer_components/booking/update_booking/update-booking/update-booking.component';
import { GetBookingComponentComponent } from './components/Customer_components/booking/get_bookings/get-booking-component/get-booking-component.component';
import { AdminHomeComponent } from './components/admin_components/admin-home/admin-home.component';
import { PageNotFoundComponent } from './components/Customer_components/pageNotFound/page-not-found/page-not-found.component';
import { CustomerHomeComponent } from './components/Customer_components/customerHome/customer-home/customer-home.component';
import { MyBookingsComponent } from './components/Customer_components/booking/get_myBookings/my-bookings/my-bookings.component';
import { LoginComponent } from './components/Customer_components/login/login.component';
import { ViewAirportsComponent } from './components/admin_components/view-airports/view-airports.component';
import { UpdateCustomerComponent } from './components/Customer_components/update-customer/update-customer.component';
import { ForgotPasswordComponent } from './components/Customer_components/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';
import { MakePaymentComponent } from './components/Customer_components/Payment copy/make-payment/make-payment.component';
import { AdminGetAllPaymentsComponent } from './components/Customer_components/Payment copy/admin-get-all-payments/admin-get-all-payments.component';
import { GetPaymentComponent } from './components/Customer_components/Payment copy/get-payment/get-payment.component';
import { AddAdminComponent } from './components/admin_components/add-admin/add-admin.component';
import { ViewFlightsComponent } from './components/admin_components/view-flights/view-flights.component';
import { AdminGuard } from './guards/admin.guard';
import { ScheduledFlightsComponent } from './components/Customer_components/scheduledFlights/scheduled-flights/scheduled-flights.component';
import { GetSchedulesComponent } from './components/admin_components/get-schedules/get-schedules.component';
import { AddScheduleComponent } from './components/admin_components/add-schedule/add-schedule.component';
import { UpdateScheduleComponent } from './components/admin_components/update-schedule/update-schedule.component';

const routes: Routes = [
  {path:'makePayment',component:MakePaymentComponent, canActivate:[AuthGuard]},
  {path:'getAllPayments', component:AdminGetAllPaymentsComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'get-payment',component:GetPaymentComponent, canActivate:[AuthGuard]},
  {path:'scheduledFlights', component: ScheduledFlightsComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'addAdmin',component:AddAdminComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'updateCustomer', component:UpdateCustomerComponent, canActivate:[AuthGuard]},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'getMyBookings',component:MyBookingsComponent, canActivate:[AuthGuard]},
  {path:'getBookings', component:GetBookingComponentComponent, canActivate:[AuthGuard]},
  {path:'updateBooking', component:UpdateBookingComponent, canActivate:[AuthGuard]},
  {path:'customerHome',component:CustomerHomeComponent}, 
  {path:'newBooking', component:NewBookingComponent, canActivate:[AuthGuard]},
  {path:'adminHome', component:AdminHomeComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'viewAirports', component:ViewAirportsComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'viewflights', component:ViewFlightsComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'getSchedule', component:GetSchedulesComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'addSchedule', component:AddScheduleComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'updateSchedule', component:UpdateScheduleComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'',redirectTo:'/customerHome',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
