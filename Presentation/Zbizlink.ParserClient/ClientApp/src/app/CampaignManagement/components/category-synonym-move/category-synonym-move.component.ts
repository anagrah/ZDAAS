import { Component, OnInit } from '@angular/core';
import { WebResponse } from 'src/app/shared/models/WebResponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { CategorySynonym } from '../../models/Category/CategorySynonym';
import { CategoryAndSynonymRes } from '../../models/Category/CategoryAndSynonymRes';
import { SummarySynonym } from '../../models/summary-synonym';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { SummarySynonymMoveService } from '../../services/summary-synonym-move.service';

@Component({
  selector: 'app-category-synonym-move',
  templateUrl: './category-synonym-move.component.html',
  styleUrls: ['./category-synonym-move.component.css']
})
export class CategorySynonymMoveComponent implements OnInit {

  movedCategorySynonym: CategorySynonym[] = [];

  selectedOptionsLeft: string[] = [];
  selectedOptionsRight: string[] = [];

  selectedValueDropDownLeft: CategoryAndSynonymRes;
  selectedValueDropDownRight: CategoryAndSynonymRes;

  public categoryAndSynonymRes: Array<CategoryAndSynonymRes>;

  public categoryAndSynonymLeft: Array<CategoryAndSynonymRes> = [];
  public categorySynonymLeft: Array<CategorySynonym>;
  public categoryAndSynonymRight: Array<CategoryAndSynonymRes> = [];
  public categorySynonymRight: Array<CategorySynonym>;


  constructor(private summarySynonymMoveService: SummarySynonymMoveService,
    private campaignLookupDataService: CampaignLookupDataService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService) { }

  ngOnInit(): void {
    this.GetCategoryAndSynonym();
  }

  GetCategoryAndSynonym() {
    this.campaignLookupDataService.GetCategroyAndSynonym().subscribe(
      res => this.CategoryAndSynonymResponse(res),
      err => this.UploadError(err)
    );
  }

  CategoryAndSynonymResponse(webResponse: WebResponse<CategoryAndSynonymRes[]>) {
debugger;
    if (webResponse.code == '1') {

      this.categoryAndSynonymRes = webResponse.response;

      if (this.categoryAndSynonymRes !== undefined && this.categoryAndSynonymRes !== null && this.categoryAndSynonymRes.length > 0) {

        this.PopulateCategoryAndSynonymLeft();
        this.PopulateCategoryAndSynonymRight();
      }
    } else {

    }
  }

  onSelectionChangeCategoryLeft(selectedCategoryId: any) {

    if (selectedCategoryId !== undefined && selectedCategoryId !== null && selectedCategoryId > 0) {
      this.PopulateCategoryDropdownLeft(selectedCategoryId);

    }

  }

  onSelectionChangeCategoryRight(selectedCategoryId: any) {

    if (selectedCategoryId !== undefined && selectedCategoryId !== null && selectedCategoryId > 0) {
      this.PopulateCategoryDropdownRight(selectedCategoryId);
    }

  }

  PopulateCategoryDropdownLeft(selectedCategoryId: any) {
    debugger;
    let categoryAndSynonym: CategoryAndSynonymRes = this.categoryAndSynonymLeft.find(v => v.CategoryId == selectedCategoryId);
    this.selectedValueDropDownLeft = categoryAndSynonym;
    if (categoryAndSynonym !== undefined && categoryAndSynonym !== null) {
      this.categorySynonymLeft = categoryAndSynonym.CategorySynonym;

    }
  }

  PopulateCategoryAndSynonymLeft() {
    this.categoryAndSynonymRes.forEach((element) => {

      let categoryAndSynonym: CategoryAndSynonymRes = new CategoryAndSynonymRes();
      categoryAndSynonym.CategoryId = element.CategoryId;
      categoryAndSynonym.Name = element.Name;
      categoryAndSynonym.CategorySynonym = [];


      element.CategorySynonym.forEach((element) => {
        let categorySynonym: CategorySynonym = new CategorySynonym();
        categorySynonym.SynonymId = element.SynonymId;
        categorySynonym.Synonym = element.Synonym;
        categorySynonym.CategoryId = element.CategoryId;
        categoryAndSynonym.CategorySynonym.push(categorySynonym);
      });

      this.categoryAndSynonymLeft.push(categoryAndSynonym);
      this.categoryAndSynonymLeft = this.categoryAndSynonymLeft.sort((a, b) => (a.Name < b.Name ? -1 : 1));
    });

    if (this.categoryAndSynonymLeft !== undefined && this.categoryAndSynonymLeft !== null && this.categoryAndSynonymLeft.length > 0) {
      let categoryAndSynonym: CategoryAndSynonymRes = this.categoryAndSynonymLeft[0];
      if (categoryAndSynonym !== undefined && categoryAndSynonym !== null)

        this.PopulateCategoryDropdownLeft(categoryAndSynonym.CategoryId);

    }


  }

  PopulateCategoryAndSynonymRight() {

    this.categoryAndSynonymRes.forEach((element) => {

      let categoryAndSynonym: CategoryAndSynonymRes = new CategoryAndSynonymRes();
      categoryAndSynonym.CategoryId = element.CategoryId;
      categoryAndSynonym.Name = element.Name;
      categoryAndSynonym.CategorySynonym = [];


      element.CategorySynonym.forEach((element) => {
        let categorySynonym: CategorySynonym = new CategorySynonym();
        categorySynonym.SynonymId = element.SynonymId;
        categorySynonym.Synonym = element.Synonym;
        categoryAndSynonym.CategorySynonym.push(categorySynonym);
      });

      this.categoryAndSynonymRight.push(categoryAndSynonym);
      this.categoryAndSynonymRight = this.categoryAndSynonymRight.sort((a, b) => (a.Name < b.Name ? -1 : 1));
    });

    if (this.categoryAndSynonymLeft.length > 0) {
      let categoryAndSynonym: CategoryAndSynonymRes = this.categoryAndSynonymLeft[0];
      if (categoryAndSynonym !== undefined && categoryAndSynonym !== null)

        this.PopulateCategoryDropdownRight(categoryAndSynonym.CategoryId);
    }
  }

  PopulateCategoryDropdownRight(selectedCategoryId: any) {
    let categoryAndSynonym: CategoryAndSynonymRes = this.categoryAndSynonymRight.find(v => v.CategoryId == selectedCategoryId);
    this.selectedValueDropDownRight = categoryAndSynonym;
    debugger;
    if (categoryAndSynonym !== undefined && categoryAndSynonym !== null) {
      this.categorySynonymRight = categoryAndSynonym.CategorySynonym;

    }
  }



  UploadError(parm: any): void {

    this.progressSpinnerService.isLoading = false;
    this.notification.error(parm);
  }

  onMoveLeftToRight() {

    if (this.selectedOptionsLeft !== undefined && this.selectedOptionsLeft !== null && this.selectedOptionsLeft.length == 0) {
      this.notification.warning('No item selected');
    }
    else if (this.selectedValueDropDownLeft.CategoryId === this.selectedValueDropDownRight.CategoryId) {
      this.notification.warning('Both categories are same, categories must not be same');
    } else {
      this.SelectedSynonymMoveLeftToRight();
    }
  }

  onMoveRightToLeft() {

    if (this.selectedOptionsRight !== undefined && this.selectedOptionsRight !== null && this.selectedOptionsRight.length == 0) {
      this.notification.warning('No item selected');
    } else if (this.selectedValueDropDownLeft.CategoryId === this.selectedValueDropDownRight.CategoryId) {
      this.notification.warning('Both categories are same, categories must not be same');
    }
    else {
      this.SelectedSynonymMoveRightToLeft();
    }
  }

  SelectedSynonymMoveLeftToRight() {

    let deleteCategorySynonymList: Array<CategorySynonym> = [];

    this.selectedOptionsLeft.forEach((element) => {

      let categorySynonym: CategorySynonym = this.categorySynonymLeft.find(s => s.SynonymId === parseInt(element));

      deleteCategorySynonymList.push(categorySynonym);
    });

debugger;
    deleteCategorySynonymList.forEach((element) => {
      let index = this.categorySynonymLeft.findIndex(s => s.SynonymId == element.SynonymId);

      this.categorySynonymLeft.splice(index, 1);

      let categoryAndSynonymRight =  this.categoryAndSynonymRight.find(s => s.CategoryId === this.selectedValueDropDownLeft.CategoryId);
      let leftListIndex = categoryAndSynonymRight.CategorySynonym.findIndex(s => s.SynonymId== element.SynonymId);
      categoryAndSynonymRight.CategorySynonym.splice(leftListIndex, 1);

      let categoryAndSynonymLeft =  this.categoryAndSynonymLeft.find(s => s.CategoryId === this.selectedValueDropDownRight.CategoryId);
      categoryAndSynonymLeft.CategorySynonym.push(element);

      element.CategoryId = this.selectedValueDropDownRight.CategoryId;
      this.movedCategorySynonym.push(element);
      this.categorySynonymRight.push(element);

      this.movedCategorySynonym
      this.categorySynonymRight = this.categorySynonymRight.sort((a, b) => (a.Synonym < b.Synonym ? -1 : 1));
    });


  }



  SelectedSynonymMoveRightToLeft() {


    let DeleteCategorySynonymList: Array<CategorySynonym> = [];
debugger;
    this.selectedOptionsRight.forEach((element) => {

      let categorySynonym: CategorySynonym = this.categorySynonymRight.find(s => s.SynonymId == parseInt(element));

      DeleteCategorySynonymList.push(categorySynonym);
    });


    DeleteCategorySynonymList.forEach((element) => {
      let index = this.categorySynonymRight.findIndex(s => s.SynonymId == element.SynonymId);

      this.categorySynonymRight.splice(index, 1);

      let categoryAndSynonymLeft =  this.categoryAndSynonymLeft.find(s => s.CategoryId === this.selectedValueDropDownRight.CategoryId);
      let leftListIndex = categoryAndSynonymLeft.CategorySynonym.findIndex(s => s.SynonymId== element.SynonymId);
      categoryAndSynonymLeft.CategorySynonym.splice(leftListIndex, 1);

      let categoryAndSynonymRight =  this.categoryAndSynonymRight.find(s => s.CategoryId === this.selectedValueDropDownLeft.CategoryId);
      categoryAndSynonymRight.CategorySynonym.push(element);

      element.CategoryId = this.selectedValueDropDownLeft.CategoryId;
      this.movedCategorySynonym.push(element);
      this.categorySynonymLeft.push(element);
      this.categorySynonymLeft = this.categorySynonymLeft.sort((a, b) => (a.Synonym < b.Synonym ? -1 : 1));
    });
  }

  save() {
    debugger;
    if (this.movedCategorySynonym !== undefined && this.movedCategorySynonym !== null && this.movedCategorySynonym.length > 0) {

      this.campaignLookupDataService.movedCatorySynonymEdit(this.movedCategorySynonym).subscribe(
        res => this.movedCategorySynonymEditResponse(res),
        err => this.UploadError(err)
      );
    }


  }

  movedCategorySynonymEditResponse(webResponse: WebResponse<string>){
    debugger;
if(webResponse.code.toString() === '1'){
  this.progressSpinnerService.isLoading = false;
  this.notification.success('Record successfully saved');
  let test = webResponse.code;
}
else{
  this.progressSpinnerService.isLoading = false;
  this.notification.error('Record could not be saved');
}
  }
  // onNgModelChange(event){
  //   console.log('on ng model change', event);
  //   let test = this.selectedOptions;
  // }


  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
