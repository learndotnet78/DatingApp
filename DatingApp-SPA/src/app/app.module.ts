import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/Http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { UserService } from './_services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolvers';
import { MemberListResolver } from './_resolvers/member-list.resolvers';
import { NgxGalleryModule } from 'ngx-gallery';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolvers';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export function tokenGetter(){
   return localStorage.getItem('token');
}

 export class CustomHammerConfig extends HammerGestureConfig{
    overrides = {
       pinch : { enable :false},
       rotate : { enable :false}
    };
 }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      MemberDetailComponent,
      MemberCardComponent,
      MemberEditComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
         config : {
            tokenGetter : tokenGetter,
            whitelistedDomains : ['localhost:5000'],
            blacklistedRoutes : ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      PreventUnsavedChanges,
      ErrorInterceptorProvider,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      {provide : HAMMER_GESTURE_CONFIG, useClass : CustomHammerConfig}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
