import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { localeEs } from 'src/assets/locale.es.js';
import {Router} from '@angular/router';


@Component({
  selector: 'app-country-board',
  templateUrl: './country-board.component.html',
  styleUrls: ['./country-board.component.css']
})
export class CountryBoardComponent implements OnInit {
  // Attributos del grid 
  title = 'agGrid - Country';
  private gridOptions = {};
  private columnDefs;
  private gridApi:any;
  private gridColumnApi:any;
  private rowData: any;
  //--------------------------------------
  constructor(private http: HttpClient,private router: Router) {}
 //--------------------------------------
 /**
  * Define las columnas  
  */
ngOnInit() {
  this.columnDefs = [
    { headerName: 'detail', field: 'callingCodes',width:150,
      cellRenderer: ($event) =>
            `<img src="assets/view.png" alt="View" width="50%" height="50%">`,
             },
    { headerName: 'Name',field: 'name', sortable: true, filter: true ,width:200, resizable: true },
    { headerName: 'Capital',field: 'capital', sortable: true, filter: true ,width:200, resizable: true },
    { headerName: 'Call Code',field: 'callingCodes', sortable: true, filter: true ,width:200, resizable: true },
    { headerName: 'Region',field: 'region', sortable: true, filter: true ,width:200, resizable: true },
];
    // Special properties here, like localization, 
    this.gridOptions = {
      localeTextFunc: (key: string, defaultValue: string) => localeEs[key] || defaultValue
   }
}
//-------------------------------
//load data from service
onGridReady(params){
  this.gridApi=params.api;
  this.gridColumnApi=params.columnApi;
  this.http
  .get('https://restcountries.eu/rest/v2/all')
  .subscribe(data=>{
    params.api.setRowData(data);
  })
}


//-------------------------------
//Manage the crud
onCellClicked(event: any) { 
  var navigate = 0;
  var urlRedirect='/country/';
  console.log('cell', event); 
  console.log('cell Operation: ', event.colDef.headerName); 
  console.log('cell Value: ', event.value); 

  if(event.colDef.headerName=='detail'){
    urlRedirect=urlRedirect +'detail/'+event.value;
    navigate =1;
  }
    
  if(event.colDef.headerName=='update'){
    urlRedirect=urlRedirect +'update/'+event.value;
    navigate =1;
  }
      
  if(event.colDef.headerName=='delete'){
    urlRedirect=urlRedirect +'delete/'+event.value;
    navigate =1;
  }
    
  if(navigate>0)
    this.router.navigate([urlRedirect]); 
   /* */
                          }
//-------------------------------

}//fc
