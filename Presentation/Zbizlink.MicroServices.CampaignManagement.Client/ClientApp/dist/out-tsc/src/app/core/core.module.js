import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MenuComponent } from '../core/components/menu/menu.component';
import { CreateAccountComponent } from '../core/components/create-account/create-account.component';
import { LoginComponent } from '../core/components/login/login.component';
import { UserListComponent } from '../core/components/user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketingCampaignComponent } from './components/marketing-campaign/marketing-campaign.component';
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        declarations: [
            MenuComponent,
            CreateAccountComponent,
            LoginComponent,
            UserListComponent,
            DashboardComponent,
            MarketingCampaignComponent
        ],
        imports: [
            // SharedModule
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatButtonModule,
            FormsModule,
            CommonModule,
            MatSelectModule,
            ReactiveFormsModule,
            RouterModule,
            MatDividerModule,
            MatTableModule,
            MatPaginatorModule,
            MatMenuModule
        ],
        exports: [
            MenuComponent
        ]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map