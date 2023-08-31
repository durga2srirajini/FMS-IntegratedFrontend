import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBookingComponent } from './components/Customer_components/booking/new-booking/new-booking.component';
import { MatCardModule} from '@angular/material/card';
import { NavBarComponent } from './components/Customer_components/nav_bar/nav-bar/nav-bar.component';
import { UpdateBookingComponent } from './components/Customer_components/booking/update_booking/update-booking/update-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponentComponent } from './components/Customer_components/user_component/user-component/user-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { GetBookingComponentComponent } from './components/Customer_components/booking/get_bookings/get-booking-component/get-booking-component.component';
import { AdminHomeComponent } from './components/admin_components/admin-home/admin-home.component';
import { CustomerHomeComponent } from './components/Customer_components/customerHome/customer-home/customer-home.component';
import { PageNotFoundComponent } from './components/Customer_components/pageNotFound/page-not-found/page-not-found.component'
import { SearchPipe } from './pipes/search.pipe';
import { MyBookingsComponent } from './components/Customer_components/booking/get_myBookings/my-bookings/my-bookings.component';
import { LoginComponent } from './components/Customer_components/login/login.component';
import { UpdateCustomerComponent } from './components/Customer_components/update-customer/update-customer.component';
import { ViewAirportsComponent } from './components/admin_components/view-airports/view-airports.component';
import { ForgotPasswordComponent } from './components/Customer_components/forgot-password/forgot-password.component';
import { MakePaymentComponent } from './components/Customer_components/Payment copy/make-payment/make-payment.component';
import { AdminGetAllPaymentsComponent } from './components/Customer_components/Payment copy/admin-get-all-payments/admin-get-all-payments.component';
import { GetPaymentComponent } from './components/Customer_components/Payment copy/get-payment/get-payment.component';
import { FlightSchedulesComponent } from './components/Customer_components/flight-schedules/flight-schedules.component';
import { AddScheduleComponent } from './components/admin_components/add-schedule/add-schedule.component';
import { GetSchedulesComponent } from './components/admin_components/get-schedules/get-schedules.component';
import { UpdateScheduleComponent } from './components/admin_components/update-schedule/update-schedule.component';
import { AddAdminComponent } from './components/admin_components/add-admin/add-admin.component';
import { ScheduledFlightsComponent } from './components/Customer_components/scheduledFlights/scheduled-flights/scheduled-flights.component';
import { ViewFlightsComponent } from './components/admin_components/view-flights/view-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    MakePaymentComponent,
    AdminGetAllPaymentsComponent,
    GetPaymentComponent,
    AddScheduleComponent,
    GetSchedulesComponent,
    UpdateScheduleComponent ,
    NewBookingComponent,
    NavBarComponent,
    UpdateBookingComponent,
    UserComponentComponent,
    GetBookingComponentComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    PageNotFoundComponent,
    SearchPipe,
    MyBookingsComponent,
    LoginComponent,
    UpdateCustomerComponent,
    ViewAirportsComponent,
    ForgotPasswordComponent,
    FlightSchedulesComponent,
    AddAdminComponent,
    ScheduledFlightsComponent,
    ViewFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
