import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrmServices } from '../../services/crm.services';
import { LocalstoragemanagerService } from '../../shared/localstoragemanager.service';
import { NotificationService } from '../../shared/services/notification.service';
@Component({
    selector: 'app-crm-fieldsmapping',
    templateUrl: './fieldsmapping.component.html',
    styleUrls: ['./fieldsmapping.component.css']
})
export class FieldsMappingComponent implements OnInit {
    bizlinkfields = [];
    crmfields = [];
    mappedfields = []
    constructor(private notifyService: NotificationService,private router: Router, private crmService: CrmServices, private localStorage: LocalstoragemanagerService) { }
    ngOnInit() {
        this.getFields();

    }
    OnChange(event, zbizFieldId) {

        let cTableFieldId = event.target.value;
        if (cTableFieldId === 'null') {
            cTableFieldId = null;
        }
        if (this.mappedfields.length === 0) {
            this.mappedfields.push({ id: 0, 'bizlinkTableFieldId': zbizFieldId, 'crmCompanyTableFieldId': cTableFieldId, 'createdDate': null, 'status': true })
            return;
        }
        const index = this.mappedfields.findIndex((x) => x.bizlinkTableFieldId == zbizFieldId)
        if (index === -1) {
            this.mappedfields.push({ id: 0, 'bizlinkTableFieldId': zbizFieldId, 'crmCompanyTableFieldId': cTableFieldId, 'createdDate': null, 'status': true })
        } else {
            this.mappedfields[index] = { id: this.mappedfields[index].id, 'bizlinkTableFieldId': this.mappedfields[index].bizlinkTableFieldId, 'crmCompanyTableFieldId': cTableFieldId, 'createdDate': this.mappedfields[index].createdDate, 'status': this.mappedfields[index].status }

        }

    }

    onNext(e) { this.router.navigate(['crm/tablesview']); }
    onBack(e) { this.router.navigate(['crm/crmtables']); }
    getFields() {
        let companyId = this.localStorage.localStorageGetItem('companyId') as number;
        let crmId = this.localStorage.localStorageGetItem('selectedCRMId') as number;
        this.crmService.getTablesFieldsForMapping(companyId,crmId).subscribe((data) => {
            if (data.code !== 200) {
                this.notifyService.showError(data.message, 'error')
                return;
            }
            this.bizlinkfields = data.result.BizlinkFieldsIdsWithNames;
            this.crmfields = data.result.CRMFieldsIdsWithNames;
            this.mappedfields = data.result.MappedFields;
        });
    }
    SaveMappedFields(e) {       
        this.crmService.getSaveMappedFields(this.mappedfields).subscribe((response) => {           
            this.notifyService.showSuccess('Saved Successfully.', response.message)
            this.router.navigate(['crm/tablesview']);
        });
    }
}

