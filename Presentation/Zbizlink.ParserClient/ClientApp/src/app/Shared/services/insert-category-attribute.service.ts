import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertCategoryAttributeService {

  opportunityCollection: Element[];

 
  currentNode: Element;
  
  categoryName: string;
  currentNodeIndex: number;

  constructor() { }

  resetOpportunityData(opportunityCollection: Element[], currentNodeIndex: number, categoryName: string): Element {
    
    this.opportunityCollection = opportunityCollection;
    this.currentNodeIndex = currentNodeIndex;
    this.categoryName = categoryName;
    this.SetCategoryName();
    return this.currentNode;
  }

  SetCategoryName(): void{

    this.currentNode = this.opportunityCollection[this.currentNodeIndex];
    if (this.currentNode === undefined) return;
    this.SetCategory();
  }

 

  SetCategory() {
  let isCategoryExist =  this.currentNode.hasAttribute("data-index");
  if (isCategoryExist === false){
    this.currentNode.removeAttribute("data-category");
  }
  this.currentNode.setAttribute("data-category",this.categoryName);

  }
}
