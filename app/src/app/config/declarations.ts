import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { TestComponent } from '../test/test.component';
import { NotificationService } from '../service/notification.service';
import { LocalStorageService } from '../service/local-storage.service';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { BAuthGuard } from '../service/bAuthGuard.service';
import { BAppService } from '../service/bApp.service';
import { BLocalStorageService } from '../service/bLocalStorage.service';
import { BSessionStorage } from '../service/bSessionStorage.service';
import { BLoginService } from '../service/bLogin.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BHttp } from '../service/bHTTP';
import { BHTTPLoader } from '../service/bHTTPLoader';
import { PubSubService } from '../service/pubSub.service';
import { AlertComponent } from '../alertComponent/alert.component';
import { BDataSourceService } from '../service/bDataSource.service';
import { bhiveMapComponent } from '../mapComponent/map.component';
import { APP_INITIALIZER } from '@angular/core';
import { BLogoutService } from '../service/bLogout.service';

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-searchcardComponent
import { searchcardComponent } from '../searchcardComponent/searchcard.component';
//CORE_REFERENCE_IMPORT-searchfiltercardComponent
import { searchfiltercardComponent } from '../searchfiltercardComponent/searchfiltercard.component';
//CORE_REFERENCE_IMPORT-myteamtaskComponent
import { myteamtaskComponent } from '../myteamtaskComponent/myteamtask.component';
//CORE_REFERENCE_IMPORT-unassignedtaskComponent
import { unassignedtaskComponent } from '../unassignedtaskComponent/-unassignedtask.component';
//CORE_REFERENCE_IMPORT-activeacordComponent
import { activeacordComponent } from '../activeacordComponent/activeacord.component';
//CORE_REFERENCE_IMPORT-serviceselectionComponent
import { serviceselectionComponent } from '../serviceselectionComponent/serviceselection.component';
//CORE_REFERENCE_IMPORT-loginService
import { loginService } from '../services/Login/login.service';
//CORE_REFERENCE_IMPORT-infodisplayComponent
import { infodisplayComponent } from '../infodisplayComponent/infodisplay.component';
//CORE_REFERENCE_IMPORT-serviceinfodisplayComponent
import { serviceinfodisplayComponent } from '../serviceinfodisplayComponent/serviceinfodisplay.component';
//CORE_REFERENCE_IMPORT-caseinfodisplayComponent
import { caseinfodisplayComponent } from '../caseinfodisplayComponent/caseinfodisplay.component';
//CORE_REFERENCE_IMPORT-caseslistComponent
import { caseslistComponent } from '../caseslistComponent/caseslist.component';
//CORE_REFERENCE_IMPORT-casescardComponent
import { casescardComponent } from '../casescardComponent/casescard.component';
//CORE_REFERENCE_IMPORT-homeinboxComponent
import { homeinboxComponent } from '../homeinboxComponent/homeinbox.component';
//CORE_REFERENCE_IMPORT-activecComponent
import { activecComponent } from '../activecComponent/activec.component';
//CORE_REFERENCE_IMPORT-unattendedcComponent
import { unattendedcComponent } from '../unattendedcComponent/unattendedc.component';
//CORE_REFERENCE_IMPORT-monitorcComponent
import { monitorcComponent } from '../monitorcComponent/monitorc.component';
//CORE_REFERENCE_IMPORT-caseserviceService
import { caseserviceService } from '../services/CaseService/caseservice.service';
//CORE_REFERENCE_IMPORT-caseinfoService
import { caseinfoService } from '../services/CaseInfo/caseinfo.service';
//CORE_REFERENCE_IMPORT-roleService
import { roleService } from '../services/Role/role.service';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../loginComponent/login.component';


export function startupServiceFactory(startupService: BLocalStorageService): Function {
  return () => startupService.initStorage();
}


/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];

/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  AlertComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  TestComponent,
  AlertComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchcardComponent
searchcardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchfiltercardComponent
searchfiltercardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myteamtaskComponent
myteamtaskComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-unassignedtaskComponent
unassignedtaskComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activeacordComponent
activeacordComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-serviceselectionComponent
serviceselectionComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-infodisplayComponent
infodisplayComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-serviceinfodisplayComponent
serviceinfodisplayComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-caseinfodisplayComponent
caseinfodisplayComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-caseslistComponent
caseslistComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-casescardComponent
casescardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeinboxComponent
homeinboxComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activecComponent
activecComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-unattendedcComponent
unattendedcComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-monitorcComponent
monitorcComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,
  PageNotFoundComponent,
  bhiveMapComponent
];

/**
* provider for @NgModuke
*/
export const appProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BHttp,
    multi: true
  },
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [BLocalStorageService],
    multi: true
  },
  NotificationService,
  BAuthGuard,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-loginService
loginService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-caseserviceService
caseserviceService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-caseinfoService
caseinfoService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-roleService
roleService,
  LocalStorageService,
  PubSubService,
  BLoginService,
  BSessionStorage,
  BLocalStorageService,
  BAppService,
  BLogoutService,
  BHTTPLoader,
  BDataSourceService

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent},{path: 'login', component: loginComponent},{path: 'card', component: searchfiltercardComponent},{path: 'search', component: searchcardComponent},{path: '', redirectTo: 'login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
