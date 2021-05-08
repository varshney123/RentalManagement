import { Component, OnInit } from '@angular/core';
import { en } from '../../constants/en';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CONSTANTS = this.en.CONSTANTS;
  constructor(private en : en) { }

  ngOnInit(): void {
  }

}
