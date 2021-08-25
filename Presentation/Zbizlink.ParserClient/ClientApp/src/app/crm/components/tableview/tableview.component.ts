import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CrmServices } from '../../services/crm.services';
import { LocalstoragemanagerService } from '../../shared/localstoragemanager.service';
import { NotificationService } from '../../shared/services/notification.service';
declare let $: any;

@Component({
    selector: 'app-crm-tablesdview',
    templateUrl: './tableview.component.html',
    styleUrls: ['./tableview.component.css']
})
export class CRMTablesViewComponent implements OnInit {

    public tableFields: any;
    public tableData: any;
    public masterSelected: boolean;
    public checklist: any;
    public checkedList = [];
    public searchFilterValue = "NonExpired";
    public filterOptions = ['NonExpired', 'Expired', 'All'];
    public isSettings: boolean;
    @ViewChild('DialogModal') ModalDialog: ElementRef;

    constructor(private notifyService: NotificationService, private router: Router, private crmService: CrmServices, private localStorage: LocalstoragemanagerService) { }
    ngOnInit() {
        this.loadData();

    }
    onCancel(e) {
        this.router.navigate(['crm/selection'], { queryParams: { 'companyId': this.localStorage.localStorageGetItem('companyId'), 'userId': this.localStorage.localStorageGetItem('userId') } });
    }
    goToSettings(e) { this.router.navigate(['crm/tables']); }
    loadData() {
        debugger;
        let token = this.localStorage.localStorageGetItem('salesforce_accesstoken')
        this.crmService.getCRMTablesData(token, this.searchFilterValue).subscribe((data) => {
            if (data.code !== 200) {
                this.notifyService.showError(data.message, 'error')
                this.router.navigate(['crm/salesforce']);
                return;
            }
            if (data.result == null) {
                this.isSettings = true;
            }
            else {
                debugger;
                this.isSettings = false;
                this.tableData = data.result;
                this.checklist = data.result.TableFieldsData;
                this.tableFields = data.result.TableFields;
            }

        });
    }
    SaveData() {
        if (this.checkedList.length <= 0) {
            this.notifyService.showWarning('You have no any record selected for save.', 'Warning');
            return;
        }
        let token = this.localStorage.localStorageGetItem('salesforce_accesstoken')
        this.tableData.TableFieldsData = this.checkedList;
        this.crmService.getSaveCRMData(token, this.tableData).subscribe((response) => {
            this.masterSelected = false;
            this.notifyService.showSuccess('Saved Successfully.', response.message)
            this.loadData();
        });
    }
    OnChange(e) {
        this.searchFilterValue = e.target.value;
        this.masterSelected = false;
        this.loadData();
    }

    checkUncheckAll() {
        for (var i = 0; i < this.checklist.length; i++) {
            this.checklist[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    }
    isAllSelected() {
        this.masterSelected = this.checklist.every(function (item: any) {
            return item.isSelected == true;
        })
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.checklist.length; i++) {
            if (this.checklist[i].isSelected)
                this.checkedList.push(this.checklist[i]);
        }

    }
    GoToBizlink() {
        window.parent.postMessage(1, "*");
        return false;
    }
    CloseCRMDialog() {
        $(this.ModalDialog.nativeElement).modal('hide');
        this.GoToBizlink();
    }
    onExit(e) {
        $(this.ModalDialog.nativeElement).modal('show');
    }
}
