
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { en } from '../../constants/en';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  type: any;
  id: any;
  locations: any;
  categories: any;
  brId: any;
  CONSTANTS = this.en.CONSTANTS;

  constructor(private route : ActivatedRoute,private router : Router,private cat : CategoryService,private en : en) { 
  }

  

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
    this.type = params.type;
    this.id = params.id;
    if(params.brId)
    this.brId = params.brId
    this.categories= [];
    
    this.cat.getLocations().subscribe(res=>{
      this.locations = res;

    if(this.type == 'location'){
      this.locations.forEach((location:any) => {
        if(location.dealers_id == this.id){
          location.branches.forEach((branch:any) => {
            branch.categories.forEach((category:any) => {
              if(this.categories.some((value:any) => value.name === category.name)){
               // console.log("already pushed, removing duplicacy from array")
            } else{
              this.categories.push(category)
            }
            });
          });
        }
      });
    }
    if(this.type == 'branch'){
      this.locations.forEach((location:any) => {
        if(location.dealers_id == this.id){
          location.branches.forEach((branch:any) => {
            if(branch.branch_id == this.brId){
              this.categories = branch.categories;
            }
          });
        }
      });
     }
    })
    })
    

  }

  getSourceUrl(img:any) {
    return '../../../assets/category/' + img
  }

  showSubCategories(data:any){
    this.cat.setSubCategoriesData(data);
    this.router.navigate(['subcat']);
  }

 
}
