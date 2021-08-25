import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { User } from '../../models/User';
import { AdminUserWebapiService } from '../../services/admin-user-webapi.service';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {
  disabled = true;
  //checked = false;
  displayedColumns: string[] = ['FirstName','LastName','Email','Active','Action'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public adminUserWebapiService : AdminUserWebapiService,private dialogService: DialogService,public progressSpinnerService: ProgressSpinnerService,private router:Router,
    private notification: NotificationService
  ) {     
  }
   
  ngOnInit(): void {
    if(!sessionStorage.getItem('CampaignUser')) {
      this.router.navigateByUrl('/');
    }
    var response = this.GetAllUsers();
     console.log(response); 
  }
  updateUser(element): void { // open the dialogue 
    let data = {
      headerFlag: true
    }; 
    const dialogRef = this.dialogService.openDialog({
      width: '35%',
      data: element,
      dailogComponent: UpdateUserComponent,
    });

    dialogRef.afterClosed().subscribe(
      data => { 
        // your logic here...
      }
    );

  }
  // Get user list
  public GetAllUsers() { 
    if (this.progressSpinnerService.isLoading == false) 
        this.progressSpinnerService.isLoading = true;
    this.adminUserWebapiService.GetAllUsers().subscribe((res: WebApiResponse)=>{
      res.response.forEach(function (value) {
            if(value.IsActiveID == 1)
                 value.IsActiveID = true; 
            else
                value.IsActiveID = false; 
        console.log(value.IsActiveID);
      }); 
      console.log(res);   
      this.dataSource =   new MatTableDataSource<User>(res.response);
      this.dataSource.paginator = this.paginator;
      this.progressSpinnerService.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      }
    ) 
    }
}
