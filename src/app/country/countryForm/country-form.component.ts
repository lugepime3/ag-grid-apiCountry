import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from 'src/app/country/Country';
import  { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
//-----------------------------
export class CountryFormComponent implements OnInit {
title:string;  
country:Country;
callingcode:string;

  constructor(private countryService: CountryService,private http: HttpClient,private activatedRoute: ActivatedRoute) { }
//-------------------------------------------------------------
ngOnInit() {
  this.title="Countries";
  this.callingcode = this.activatedRoute.snapshot.params.id;
  this.countryService.findOne(this.callingcode).subscribe(
    function (response) {
       this.country = response[0];
    }.bind(this)
  );
}


//--------------------------------------------------------------
}//fc 
