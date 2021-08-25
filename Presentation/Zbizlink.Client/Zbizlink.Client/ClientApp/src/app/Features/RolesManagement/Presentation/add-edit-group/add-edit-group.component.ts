import { GroupviewComponent } from './../groupview/groupview.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



interface User {
  value: string;
  viewValue: string;
}
interface Role {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit {

  selectedValue: any;
  selectedRole: any;

  users: User[] = [
    {value: 'Imran Munir', viewValue: 'Imran Munir'},
    {value: 'Mahmood', viewValue: 'Mahmood'},
    {value: 'Tahir Aziz', viewValue: 'Tahir Aziz'},
    {value: 'Tahir Bashir', viewValue: 'Tahir Bashir'},
    {value: 'Ahmad', viewValue: 'Ahmad'},
    {value: 'Sajjad', viewValue: 'Sajjad'}
  ];
  roles: Role[] = [
    {value: 'Role 1', viewValue: 'Role 1'},
    {value: 'Role 2', viewValue: 'Role 2'},
    {value: 'Role 3', viewValue: 'Role 3'},
    {value: 'Role 4', viewValue: 'Role 4'},
    {value: 'Role 5', viewValue: 'Role 5'},
    {value: 'Role 6', viewValue: 'Role 6'}
  ];



  constructor(public ref: MatDialogRef<GroupviewComponent> ) { }




  // roles = new FormControl();
  // roleList: string[] = ['Role 1', 'Role 2', 'Role 3', 'Role 4', 'Role 5', 'Role 6'];
  // selectedRoles;
  ngOnInit(): void {
  }
}
