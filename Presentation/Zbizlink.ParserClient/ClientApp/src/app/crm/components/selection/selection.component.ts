import { Component, OnInit } from '@angular/core';
import { CRMCategoryEnum, CRMCategoryEnumMapping } from '../../models/enums/crm.selection';
import { Router, ActivatedRoute } from '@angular/router';
import { CrmServices } from '../../services/crm.services';
import { User } from '../../models/model.user';
import { error } from 'protractor';
import { SFConnectProperty, SalesforceCredential, SFConnectPropertyEnum, ConnectionPropeties } from '../../models/model.credentials';

import { LocalstoragemanagerService } from '../../shared/localstoragemanager.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
    selector: 'app-crm-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css']
})
export class CRMSelectionComponent implements OnInit {
    public selectedValue: any;
    public response: any = [];
    public categoryTypes;
    public enumConnProperty = SFConnectPropertyEnum;
    public connPropertiesArry = SFConnectProperty;
    private model: SalesforceCredential = new SalesforceCredential();
    public connectionProArray: any = [];

    user: User = new User();

    constructor(private notifyService: NotificationService, private activatedRoute: ActivatedRoute, private router: Router, private crmService: CrmServices, private localStorage: LocalstoragemanagerService) {
        this.categoryTypes = CRMCategoryEnumMapping;
    }
    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            debugger;
            params['companyId'] === undefined ? this.localStorage.localStorageSetItem('companyId', null) : this.localStorage.localStorageSetItem('companyId', params['companyId']);
            params['userId'] === undefined ? this.localStorage.localStorageSetItem('userId', null) : this.localStorage.localStorageSetItem('userId', params['userId']);
        });
    }
    OnChange(event) {
        //will revove this following 2 lines of code when integration implemented;
        debugger;
        if ((this.localStorage.localStorageGetItem('companyId') === null || this.localStorage.localStorageGetItem('companyId') === undefined) || (this.localStorage.localStorageGetItem('userId') === null || this.localStorage.localStorageGetItem('userId') === undefined)) {
            this.notifyService.showError('Invalid User Or Company', 'Invalid!')
            return;
        }
        this.user.companyId = this.localStorage.localStorageGetItem('companyId') as number;
        this.user.userId = this.localStorage.localStorageGetItem('userId') as number;


        this.selectedValue = event.target.value;
        this.selectedValue = this.selectedValue.replace(/\s/g, '').toLowerCase();

        this.localStorage.localStorageSetItem('selectedCRM', this.selectedValue)
        let selectedCRMId = CRMCategoryEnumMapping.find(x => x.type.replace(/\s/g, '').toLowerCase() === this.selectedValue).value;
        this.localStorage.localStorageSetItem('selectedCRMId', selectedCRMId);
        if (this.selectedValue === 'salesforcecrm') {
            debugger;
            this.crmService.getCRMConnectionProperties(this.user.companyId, this.user.userId, selectedCRMId).subscribe(data => {                
                debugger;
                if (data.code !== 200) {
                    this.notifyService.showError(data.message, 'error');
                    this.router.navigate(['crm/salesforce']);
                    return;
                }
                this.response = data.result;
                this.localStorage.localStorageSetItem('sFConnectionProperties', this.response)
                if (this.response.length === 0 || this.response === null) {
                    this.router.navigate(['crm/salesforce']);

                } else {
                    this.connectionProArray = this.localStorage.localStorageGetItem('sFConnectionProperties')
                    this.LoginToSalesforceCRM();
                }
            },
                error => {
                    console.log(error)
                    this.notifyService.showError(JSON.stringify(error), 'error');
                }
            );

        } else if (this.selectedValue === 'zohocrm') {

            this.notifyService.showError('Zoho Services are not implemented yet', '')
            //this.router.navigate(['crm/zoho']);
        }
    }
    private LoginToSalesforceCRM() {
        debugger;
        let crmId = this.localStorage.localStorageGetItem('selectedCRMId')
        this.MapConnProperties(this.connectionProArray);
        this.crmService.getConnectSalesForceCRMAccessToken(this.user.companyId, this.user.userId, crmId, this.model).subscribe(data => {
            if (data.code === 1||data.code === 500) {
                this.notifyService.showError("Unabled to connect with Salesforce CRM,please verify your connection properties!", '')
                this.router.navigate(['crm/salesforce']);
                return;
            }
            this.localStorage.localStorageSetItem('salesforce_accesstoken', data.result);
            this.router.navigate(['crm/tablesview']);
        }, error => {
            console.log("LoginToSalesforceCRM failed")
            console.log(error)
        });
    }
    private MapConnProperties(data: ConnectionPropeties[]) {
        debugger;
        for (let i = 0; i < this.connPropertiesArry.length; i++) {
            var result = data.find(x => x.keyVar === this.connPropertiesArry[i].text);
            if (result != null || result != undefined) {
                if (this.connPropertiesArry[i].value === this.enumConnProperty.userName) {
                    this.model.userName = result.valueVar;
                }
                else if (this.connPropertiesArry[i].value === this.enumConnProperty.password) {
                    this.model.password = result.valueVar;
                }
                else if (this.connPropertiesArry[i].value === this.enumConnProperty.securityToken) {
                    this.model.securityToken = result.valueVar;
                }
            }

        }
    }
}