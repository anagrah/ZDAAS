import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SalesforceCredential, ConnectionPropeties, SFConnectProperty, SFConnectPropertyEnum } from '../../models/model.credentials';
import { CrmServices } from '../../services/crm.services';
import { error } from 'protractor';

import { LocalstoragemanagerService } from '../../shared/localstoragemanager.service';
import { NotificationService } from '../../shared/services/notification.service';
@Component({
    selector: 'app-crm-salesforce',
    templateUrl: './salesforce.component.html',
    styleUrls: ['./salesforce.component.css']
})
export class SalesForceCRMComponent {
    @ViewChild('salesforceForm')
    private form: { valid: any; };
    model = new SalesforceCredential();
    public enumConnProperty = SFConnectPropertyEnum;
    public formArray: any = [];
    public connPropertiesArry = SFConnectProperty;
    public connectionProArray: any = [];
    constructor(private notifyService: NotificationService, private router: Router, public crmService: CrmServices,  private localStorage: LocalstoragemanagerService) {
    }
    submitted = false;
    onSubmit() {
        this.submitted = true;

        let _selectedCRMId = this.localStorage.localStorageGetItem('selectedCRMId') as unknown as number
        if (!this.form.valid) { return null; }
        for (let i = 0; i < this.connPropertiesArry.length; i++) {
            let obj = new ConnectionPropeties();
            obj.crmId = _selectedCRMId;
            obj.keyVar = this.connPropertiesArry[i].text;
            if (this.connPropertiesArry[i].value === this.enumConnProperty.userName) {
                obj.valueVar = this.model.userName;
            }
            else if (this.connPropertiesArry[i].value === this.enumConnProperty.password) {
                obj.valueVar = this.model.password;
            }
            else if (this.connPropertiesArry[i].value === this.enumConnProperty.securityToken) {
                obj.valueVar = this.model.securityToken;
            }

            this.formArray.push(obj)
        }

        let userId = this.localStorage.localStorageGetItem('userId') as unknown as number;
        let companyId = this.localStorage.localStorageGetItem('companyId') as unknown as number;
        this.crmService.getAddCRMConnectionProperties(companyId, userId, this.formArray).subscribe(data => {
            this.localStorage.localStorageSetItem('sFConnectionProperties', this.formArray)
            this.connectionProArray = this.localStorage.localStorageGetItem('sFConnectionProperties')
            this.LoginToSalesforceCRM(companyId, userId, _selectedCRMId);
        },
            error => {
                console.log(error);
            });
    }
    onCancel(e) { this.router.navigate(['crm/selection'], { queryParams: { 'companyId': this.localStorage.localStorageGetItem('companyId'), 'userId': this.localStorage.localStorageGetItem('userId') } }); }
    private LoginToSalesforceCRM(companyId: number, userId: number, _selectedCRMId: number) {

        this.MapConnProperties(this.connectionProArray);

        this.crmService.getConnectSalesForceCRMAccessToken(companyId, userId, _selectedCRMId, this.model).subscribe(data => {
            if (data.code === 1||data.code === 500) {
                this.notifyService.showError(data.message, 'error')
                return;
            }
            this.localStorage.localStorageSetItem('salesforce_accesstoken', data.result);
            this.router.navigate(['crm/tablesview']);
        }, error => {
            this.notifyService.showError(JSON.stringify(error), 'error')
            console.log(error)
        });
    }
    private MapConnProperties(data: ConnectionPropeties[]) {

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
