import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Location } from '@angular/common';
import { en } from '../../constants/en';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
  subcategories: any;
  categoryName: any;
  CONSTANTS = this.en.CONSTANTS;

  constructor(private cat : CategoryService,private _location:Location,private en : en) { }

  ngOnInit(): void {
    var data = this.cat.getSubCategoriesData();
    if(data) {
      this.subcategories = data.subcategories;
      this.categoryName = data.name;
    }
    else {
      this._location.back();
    }
  }

  getSourceUrl(img:any) {
    return '../../../assets/category/subcategory/' + img
  }

  goBack(){
    this._location.back();
  }

 
}
