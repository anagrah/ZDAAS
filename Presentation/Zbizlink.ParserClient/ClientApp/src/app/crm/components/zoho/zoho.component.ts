import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZohoCredential } from '../../models/model.credentials';
@Component({
    selector: 'app-crm-zoho',
    templateUrl: './zoho.component.html',
    styleUrls: ['./zoho.component.css']
})
export class ZohoCRMComponent {
    @ViewChild('zohoForm')
    private form: { valid: any; };
    model = new ZohoCredential();
    constructor(private router: Router) { }
    submitted = false;
    onSubmit() {
        this.submitted = true;
        if (!this.form.valid) { return null; }        
    }
    onCancel(e) { this.router.navigate(['crm/selection']); }
}