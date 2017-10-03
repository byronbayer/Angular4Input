import { Component, OnInit } from '@angular/core';
import { Company } from './company-details';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company;
  constructor() { }

  ngOnInit() {
  }

}
