import { TargetCountriesComponent } from './../target-countries/target-countries.component';
import { PurposeOfRegistrationComponent } from './../purpose-of-registration/purpose-of-registration.component';
import { MarketSegmentComponent } from './../market-segment/market-segment.component';
import { CompanyInformationComponent } from './../company-information/company-information.component';
import { BusinessLocationComponent } from './../business-location/business-location.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from "../../../../Helper/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from "../../../../Shared/Presentation/Modules/sharedModule/shared.module";
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxModule } from "src/app/Helper/ngx/ngx.module";
import { EffectsModule } from "@ngrx/effects";







const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'business-location',
        component: BusinessLocationComponent,
      },
      {
        path: 'company-information',
        component: CompanyInformationComponent,
      },
      {
        path: 'market-segment',
        component: MarketSegmentComponent,
      },
      {
        path: 'purpose-of-registration',
        component: PurposeOfRegistrationComponent,
      },
      {
        path: 'target-countries',
        component: TargetCountriesComponent,
      },
    ],
  },
];


@NgModule({
  declarations: [
    BusinessLocationComponent,
    CompanyInformationComponent,
    MarketSegmentComponent,
    PurposeOfRegistrationComponent,
    TargetCountriesComponent,
  ],
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      NgxModule,
      FlexLayoutModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes),
      EffectsModule.forRoot(),
    ],

    exports: [RouterModule],
    providers:[],
    bootstrap: [
      BusinessLocationComponent,
      CompanyInformationComponent,
      MarketSegmentComponent,
      PurposeOfRegistrationComponent,
      TargetCountriesComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: []
  })
export class CompanyModule{}
