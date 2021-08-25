import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrmServices } from '../../services/crm.services';
import { LocalstoragemanagerService } from '../../shared/localstoragemanager.service';
import { NotificationService } from '../../shared/services/notification.service';
@Component({
    selector: 'app-crm-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class CRMTablesComponent implements OnInit {
    tables = [];
    message: string;
    constructor(private notifyService: NotificationService, private router: Router, private crmService: CrmServices, private localStorage: LocalstoragemanagerService) { }
    ngOnInit() {
        this.getTables();
    }
    onCheckboxChange(option, event) {
        if (event.target.checked) {
            this.tables[option].status = true;
        } else {
            this.tables[option].status = false;
        }
    }
    onSave(e) {
        const checkedList = this.tables.filter(x => x.status === true || x.id > 0);
        let companyId = this.localStorage.localStorageGetItem('companyId') as number;
        this.crmService.getAddCRMTables(companyId, checkedList).subscribe(response => this.saveSuccessHelper(response),
            error => this.saveFailedHelper(error));

    }
    private saveSuccessHelper(res) {
        if (res.code === 200) {
            this.notifyService.showSuccess('Saved Successfully','success')
            this.router.navigate(['crm/crmtables']);
        }
        else {
            this.notifyService.showError(res.message, 'error')            
        }
    }

    private saveFailedHelper(error: any) {
        this.notifyService.showError(JSON.stringify(error), 'error')
    }
    getTables() {
        this.crmService.getCRMTables(this.localStorage.localStorageGetItem('salesforce_accesstoken')).subscribe((data) => {
            if (data.code === 200) {
                this.tables = data.result;
            }
            else{
                this.notifyService.showError(data.message, 'error')
            }
           
        });
    }
    onCancel(e) { this.router.navigate(['crm/selection'], { queryParams: { 'companyId': this.localStorage.localStorageGetItem('companyId'), 'userId': this.localStorage.localStorageGetItem('userId') } }); }
    onNext(e) { this.router.navigate(['crm/crmtables']); }

}
