import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SendEmailComponent = class SendEmailComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.fileToUpload = null;
        this.removable = true;
    }
    ngOnInit() {
    }
    // For drop zone  uncomment below lines
    //   files: File[] = []; 
    //   onSelect(event) {
    //   console.log(event);
    //   this.files.push(...event.addedFiles);
    // }
    // onRemove(event) {
    //   console.log(event);
    //   this.files.splice(this.files.indexOf(event), 1);
    // }
    fileChange(file) {
        this.file = file.target.files[0];
        console.log(this.file.name);
    }
    onAttachedFile(event) {
        debugger;
        // this.progressSpinnerService.isLoading = true;
        // if (event.target.files.length > 0) {
        //   this.event = event;
        //   if (this.documentUploadService.CategoryNameList === undefined) {
        //   //  this.GetCategoryNameListFromDB("onAttachedFile");
        //   } else {
        //    // this.AttachedFile();
        //   }
        // } else {
        //  // this.progressSpinnerService.isLoading = false;
        //   event.target.value = null
        // }
    }
    ok() {
        debugger;
    }
    closeDialogOpp() {
        debugger;
        this.dialogRef.close();
    }
    onFileComplete($event) {
    }
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
    }
};
SendEmailComponent = __decorate([
    Component({
        selector: 'app-send-email',
        templateUrl: './send-email.component.html',
        styleUrls: ['./send-email.component.scss']
    })
], SendEmailComponent);
export { SendEmailComponent };
//# sourceMappingURL=send-email.component.js.map