import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  subCategories: any;

  constructor(private http : HttpClient) { 
  }

  public getLocations() : Observable<any> {
   return this.http.get("../assets/catalog.json").pipe(map((res:any) => {return res.data.locations;}))
  }

  public setSubCategoriesData(data:any) {
     this.subCategories = data;
   }

   public getSubCategoriesData() {
    return this.subCategories;
  }
}
