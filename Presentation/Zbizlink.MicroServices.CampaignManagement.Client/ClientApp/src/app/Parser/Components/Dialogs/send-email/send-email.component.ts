import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  fileToUpload: File = null;
  file: File;
  removable = true;
  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }
// For drop zone  uncomment below lines
//files: File[] = []; 

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
  onAttachedFile(event: any) {
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



  ok(): void {
    debugger;

   }
  closeDialogOpp(): void {
    debugger;
    this.dialogRef.close();
  }
  onFileComplete($event) {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
}
