import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrmServices } from '../../services/crm.services';
import { LocalstoragemanagerService } from '../../shared/localstoragemanager.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
    selector: 'app-crm-crmtables',
    templateUrl: './crmtables.component.html',
    styleUrls: ['./crmtables.component.css']
})
export class SFCRMTablesComponent implements OnInit {
    tables = [];
    tablefields = [];
    selectedTableId: number;


    constructor(private notifyService: NotificationService, private router: Router, public crmService: CrmServices, private localStorage: LocalstoragemanagerService) { }
    ngOnInit() {
        this.getTables();
    }
    getTables() {
        let companyId = this.localStorage.localStorageGetItem('companyId') as number;
        let crmId = this.localStorage.localStorageGetItem('selectedCRMId') as number;
        this.crmService.getCompanyCRMTables(companyId, crmId).subscribe((data) => {
            if (data.code !== 200) {
                this.notifyService.showError(data.message, 'error')
                return;
            }
            this.tables = data.result;
            this.tablefields = [];
        });
    }
    OnChange(event) {
        this.tablefields = [];
        if (event.target.value == 'Please Select Table Name')
            return;
        this.selectedTableId = event.target.value;
        this.getFields(this.selectedTableId);
    }
    getFields(tableName: number) {
        this.crmService.getCRMTableFields(tableName, this.localStorage.localStorageGetItem('salesforce_accesstoken')).subscribe(data => this.getFieldsSuccessHelper(data), error => this.getFieldsFailedHelper(error));
    }
    private getFieldsSuccessHelper(data) {
        if (data.code !== 200) {
            this.notifyService.showError(data.message, 'error')
            return;
        }
        this.tablefields = data.result;

    }

    private getFieldsFailedHelper(error: any) {
        this.notifyService.showError(error, 'Error')
    }
    onBack(e) { this.router.navigate(['crm/tables']); }
    onCheckboxChange(option, event) {
        if (event.target.checked) {
            this.tablefields[option].status = true;
        } else {
            this.tablefields[option].status = false;
        }
    }
    Save(e) {
        const checkedList = this.tablefields.filter(x => x.status === true || x.id > 0)
        if (checkedList.length == 0) {
            this.notifyService.showWarning('You do not have selected any table!', 'Warning!')
            return
        }
        this.crmService.getAddCRMTablesFields(checkedList, this.selectedTableId).subscribe(data => this.saveSuccessHelper(data),
            error => this.saveFailedHelper(error));

    }
    private saveSuccessHelper(data) {
        if (data.code !== 200) {
            this.notifyService.showError(data.message, 'error')
            return;
        }
        this.notifyService.showSuccess('Saved Successfully.', data.message)
        this.router.navigate(['crm/mapping']);
    }
    NextPage(e) {
        this.router.navigate(['crm/mapping']);
    }
    private saveFailedHelper(error: any) {

    }
}
