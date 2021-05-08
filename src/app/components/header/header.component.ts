import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { en } from '../../constants/en';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  locations: any;
  CONSTANTS = this.en.CONSTANTS;
  branch: any;
  location: any;

  constructor(private cat: CategoryService, private route: Router, private en: en) { }

  ngOnInit(): void {
    this.cat.getLocations().subscribe(res => {
      this.locations = res;
    })
  }

  optionSelected(type: string, location: any, branch?: any) {
    this.resetPrevValues()
    this.location = location.name;
    var id = location.dealers_id;
    if (branch) {
      var brId = branch.branch_id;
      this.branch = branch.name;
      this.route.navigate(['cat', type, id, brId]);
    }
    else
      this.route.navigate(['cat', type, id]);
  }

  resetPrevValues() {
    this.location = null;
    this.branch = null;
  }

}
