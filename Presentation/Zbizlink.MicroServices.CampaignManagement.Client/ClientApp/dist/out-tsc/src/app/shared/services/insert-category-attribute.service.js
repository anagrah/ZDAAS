import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let InsertCategoryAttributeService = class InsertCategoryAttributeService {
    constructor() { }
    resetOpportunityData(opportunityCollection, currentNodeIndex, categoryName) {
        this.opportunityCollection = opportunityCollection;
        this.currentNodeIndex = currentNodeIndex;
        this.categoryName = categoryName;
        this.SetCategoryName();
        return this.currentNode;
    }
    SetCategoryName() {
        this.currentNode = this.opportunityCollection[this.currentNodeIndex];
        if (this.currentNode === undefined)
            return;
        this.SetCategory();
    }
    SetCategory() {
        let isCategoryExist = this.currentNode.hasAttribute("data-index");
        if (isCategoryExist === false) {
            this.currentNode.removeAttribute("data-category");
        }
        this.currentNode.setAttribute("data-category", this.categoryName);
    }
};
InsertCategoryAttributeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InsertCategoryAttributeService);
export { InsertCategoryAttributeService };
//# sourceMappingURL=insert-category-attribute.service.js.map