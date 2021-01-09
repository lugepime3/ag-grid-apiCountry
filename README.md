# ApiRestCountries

Este proyecto fue generado con  [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.
Es el segundo acercamiento al ag-grid desde un servcio rest externo

## Pasos
--------------------------------------
1- Crear el proyecto angular 
--------------------------------------
C:\ ng new agGrid

Would you like to Add Angular routing?  Yes

Which stylesheet format would you like to use? CSS

--------------------------------------
2-Instalar ag-grid
--------------------------------------
C:\agGrid:>npm install --save ag-grid-community ag-grid-angular

--------------------------------------
3-Instalar bootstrap
--------------------------------------
npm install bootstrap jquery @popperjs/core

--------------------------------------
3.1-Agregar styles bootstrap  y ag-grid .(angular.json)
--------------------------------------

            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/@popperjs/core/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
--------------------------------------
3.2-Cambiar Idioma  .(assets -> crear locale.es.js y adicionar este contenido)
--------------------------------------

export const localeEs = {
    selectAll: 'Seleccionar todo',
    selectAllSearchResults: 'Seleccionar todos los resultados de búsqueda',
    searchOoo: 'Buscar...',
    blanks: 'Vacíos',
    noMatches: 'Sin coincidencias',

    filterOoo: 'Filtro...',
    equals: 'Igual',
    notEqual: 'Diferente',

    // Number Filter
    lessThan: 'Menor que',
    greaterThan: 'Mayor que',
    lessThanOrEqual: 'Menor o igual que',
    greaterThanOrEqual: 'Mayor o igual que',
    inRange: 'En el rango',
    inRangeStart: 'Desde',
    inRangeEnd: 'Hasta',

    // Text Filter
    contains: 'Contiene',
    notContains: 'No contiene',
    startsWith: 'Empieza con',
    endsWith: 'Termina con',

    // Date Filter
    dateFormatOoo: 'dd-mm-Yyyy',

    // Filter Conditions
    andCondition: 'Y',
    orCondition: 'O',

    // Filter Buttons
    applyFilter: 'Aplicar',
    resetFilter: 'Reiniciar',
    clearFilter: 'Borrar',
    cancelFilter: 'Cancelar',

    // Side Bar
    columns: 'Columnas',
    filters: 'Filtros',

    // columns tool panel
    pivotMode: 'Modo Pivote',
    groups: 'Grupos de columnas',
    rowGroupColumnsEmptyMessage: 'Soltar aquí para crear un grupo de columnas',
    values: 'Valores',
    valueColumnsEmptyMessage: 'Soltar aquí para agregar',
    pivots: 'Column Labels',
    pivotColumnsEmptyMessage: 'Soltar aquí para indicar etiquetas de columna',

    // Header of the Default Group Column
    group: 'Grupo',

    // Other
    loadingOoo: 'Cargando...',
    noRowsToShow: 'No hay filas para mostrar',
    enabled: 'Activado',

    // Menu
    pinColumn: 'Fijar Columna',
    pinLeft: 'Fijar a Izquierda',
    pinRight: 'Fijar a Derecha',
    noPin: 'Soltar',
    valueAggregation: 'Agregación por valor',
    autosizeThiscolumn: 'Tamaño automático para esta Columna',
    autosizeAllColumns: 'Tamaño automático para todas las Columnas',
    groupBy: 'Agrupar por',
    ungroupBy: 'Desagrupar por',
    resetColumns: 'Reiniciar Columnas',
    expandAll: 'Expandir Todo',
    collapseAll: 'Cerrar Todo',
    copy: 'Copiar',
    ctrlC: 'Ctrl+C',
    copyWithHeaders: 'Copiar con Cabeceras',
    paste: 'Pegar',
    ctrlV: 'Ctrl+V',
    export: 'Exportar',
    csvExport: 'Exportar a CSV',
    excelExport: 'Exportar a Excel (.xlsx)',
    excelXmlExport: 'Exportar a Excel antiguo (.xml)',

    // Enterprise Menu Aggregation and Status Bar
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    none: 'Nada',
    count: 'Cuenta',
    avg: 'Media',
    filteredRows: 'Filtrado',
    selectedRows: 'Seleccionado',
    totalRows: 'Total Filas',
    totalAndFilteredRows: 'Filas',
    page: 'Página',
    more: 'Más',
    to: 'A',
    of: 'De',
    next: 'Siguiente',
    last: 'Último',
    first: 'Primero',
    previous: 'Anterior',

    // Enterprise Menu (Charts)
    pivotChartAndPivotMode: 'Gráfico de Pivote y Modo Pivote',
    pivotChart: 'Gráfico de Pivote',
    chartRange: 'Gráfico de Intervalo',

    columnChart: 'Columna',
    groupedColumn: 'Agrupado',
    stackedColumn: 'Apilado',
    normalizedColumn: '100% Apilado',

    barChart: 'Barra',
    groupedBar: 'Agrupado',
    stackedBar: 'Apilado',
    normalizedBar: '100% Apilado',

    pieChart: 'Tarta',
    pie: 'Tarta',
    doughnut: 'Donut',

    line: 'Línea',

    xyChart: 'X Y (Dispersión)',
    scatter: 'Dispersión',
    bubble: 'Burbuja',

    areaChart: 'Area',
    area: 'Area',
    stackedArea: 'Apilado',
    normalizedArea: '100% Apilado',

    histogramChart: 'Histograma',

    // Charts
    pivotChartTitle: 'Gráfico de Pivote',
    rangeChartTitle: 'Gráfico de Intervalo',
    settings: 'Configuración',
    data: 'Datos',
    format: 'Formato',
    categories: 'Categorías',
    defaultCategory: '(Ninguna)',
    series: 'Series',
    xyValues: 'Valores X Y',
    paired: 'Mode pareado',
    axis: 'Eje',
    navigator: 'Navegador',
    color: 'Color',
    thickness: 'Grosor',
    xType: 'Tipo X',
    automatic: 'Automático',
    category: 'Categoría',
    number: 'Número',
    time: 'Tiempo',
    xRotation: 'Rotación X',
    yRotation: 'Rotación Y',
    ticks: 'Ticks',
    width: 'Ancho',
    height: 'Alto',
    length: 'Longitud',
    padding: 'Relleno',
    spacing: 'Espaciado',
    chart: 'Gráfico',
    title: 'Título',
    titlePlaceholder: 'Título del Gráfico - doble clic para editar',
    background: 'Fondo',
    font: 'Fuente',
    top: 'Arriba',
    right: 'Derecha',
    bottom: 'Abajo',
    left: 'Izquierda',
    labels: 'Etiquetas',
    size: 'Tamaño',
    minSize: 'Tamaño mínimo',
    maxSize: 'Tamaño máximo',
    legend: 'Leyenda',
    position: 'Posición',
    markerSize: 'Ancho pincel',
    markerStroke: 'Trazo pincel',
    markerPadding: 'Relleno pincel',
    itemSpacing: 'Espaciado del ítem',
    itemPaddingX: 'Relleno X del ítem',
    itemPaddingY: 'Relleno Y del ítem',
    layoutHorizontalSpacing: 'Espaciado horizontal',
    layoutVerticalSpacing: 'Espaciado vertical',
    strokeWidth: 'Ancho del trazo',
    offset: 'Desplazamiento',
    offsets: 'Desplazamiento',
    tooltips: 'Tooltips',
    callout: 'Rótulo',
    markers: 'Pinceles',
    shadow: 'Sombra',
    blur: 'Difuminado',
    xOffset: 'Desplazamiento X',
    yOffset: 'Desplazamiento Y',
    lineWidth: 'Ancho de línea',
    normal: 'Normal',
    bold: 'Negrita',
    italic: 'Itálica',
    boldItalic: 'Negrita Itálica',
    predefined: 'Predefinido',
    fillOpacity: 'Opacidad de relleno',
    strokeOpacity: 'Opacidad de línea',
    histogramBinCount: 'Total papelera',
    columnGroup: 'Columna',
    barGroup: 'Barra',
    pieGroup: 'Tarta',
    lineGroup: 'Línea',
    scatterGroup: 'X Y (Dispersión)',
    areaGroup: 'Area',
    histogramGroup: 'Histograma',
    groupedColumnTooltip: 'Agrupado',
    stackedColumnTooltip: 'Apilado',
    normalizedColumnTooltip: '100% Apilado',
    groupedBarTooltip: 'Agrupado',
    stackedBarTooltip: 'Apilado',
    normalizedBarTooltip: '100% Apilado',
    pieTooltip: 'Tsrta',
    doughnutTooltip: 'Donut',
    lineTooltip: 'Línea',
    groupedAreaTooltip: 'Area',
    stackedAreaTooltip: 'Apilado',
    normalizedAreaTooltip: '100% Apilado',
    scatterTooltip: 'Dispersión',
    bubbleTooltip: 'Burbuja',
    histogramTooltip: 'Histograma',
    noDataToChart: 'No hay datos disponibles para hacer el gráfico.',
    pivotChartRequiresPivotMode: 'Gráfico de Pivote requiere activar el modo Pivote.',
}
            
--------------------------------------
HITO Eliminar el contenido de app.component.html y crear un menu con bootstrap
--------------------------------------
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" routerLink="/country">Country</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>

<router-outlet></router-outlet>
--------------------------------------
4-Crear Componentes 
--------------------------------------
C:\apiRestCountries>ng g c country/countryBoard

--------------------------------------
4.1 -Crear Componentes 
--------------------------------------
C:\apiRestCountries>ng g c country/countryForm --flat

--------------------------------------
5-Agregar rutas de componentes (app-routing.module) 
--------------------------------------
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

//Componentes

import { CountryBoardComponent } from './country/country-board/country-board.component';

import { CountryFormComponent } from './country/countryForm/country-form.component';

const routes: Routes = [

  {
  
    path:'country',
    
    component:CountryBoardComponent
    
  },
  
  {
    
    path:'country/detail/:id',
    
    component:CountryFormComponent
    
  },

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
  
})

export class AppRoutingModule { }

--------------------------------------
6-Agregar en el modulo.(src/app/app.module.ts)
--------------------------------------
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//new components:

import { AgGridModule } from 'ag-grid-angular';


@NgModule({

  declarations: [
  
    AppComponent
    
  ],
  
  imports: [
  
    BrowserModule,
    
    AppRoutingModule,
    
    HttpClientModule,
    
    //new components:
    
    AgGridModule.withComponents([])
    
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]
  
})

export class AppModule { }


--------------------------------------
7.0 Crear Servicio 
--------------------------------------
C:\apiRestCountries>ng g s service/country

--------------------------------------
7.1 Desarrollar Servicio 
--------------------------------------
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Country } from 'src/app/country/Country';

import { Observable, throwError} from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
  
})

export class CountryService {

  constructor(private http: HttpClient) { }

  findOne(id:string):Observable< Country >{
  
    return  this.http.get<Country>(`https://restcountries.eu/rest/v2/callingcode/${id}`)
    
    .pipe(catchError(e=>{
    
      console.log(e.error.mensaje);
      
      return throwError(e)
      
    })
    
    );
    
  }


}//fc	

--------------------------------------
7-Editar Componente  .(country-board.component.ts)
--------------------------------------

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

--------------------------------------
8-Editar .(country-board.component.html)
--------------------------------------

<!-- template: paginator and properties -->


<div align="center">
  
    <h3>{{title}}</h3>
    
</div>

<div class="container">
  
    <ag-grid-angular
    
        style="width: 1000px; height: 500px; padding-top:10px"
        class="ag-theme-alpine"
        [rowData]="rowData | async"
        [columnDefs]="columnDefs"
        [animateRows]="true"
        [pagination]="true"
        [rowDragManaged]="true"
        [rowSelection]= "single"
        [gridOptions]="gridOptions"
        (gridReady)="onGridReady($event)"   
        (cellClicked)='onCellClicked($event)'  
    >
    </ag-grid-angular>
    
</div>


--------------------------------------

9-Editar Componente  .(country-form.component.ts)

--------------------------------------


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

--------------------------------------
10-Editar Componente  .(country-form.component.html)
--------------------------------------

<!--Formulario de Detalle -->

<div align="center">
  
  <h3>{{title}}</h3>
  
</div>

<form>
  
<!--Esperar a que el recurso este cargado por completo para mostrar la pagina -->

<div *ngIf="country!=null; else espera">

      <ng-template #espera>Esperando datos...</ng-template>
      
</div>

<div class="container">

  <div class="form-group">
  
    <label for="name">Name</label>
    
    <input type="text" [(ngModel)]="country.name" name="name" class="form-control" readonly="readonly">
    
  </div>
  
  <div class="form-group">
  
    <label for="capital">Capital</label>
    
    <input type="text" [(ngModel)]="country.capital" name="capital" class="form-control" readonly="readonly">  
    
  </div>

  <div class="form-group">
  
    <label for="region">Region</label>
    
    <input type="text" [(ngModel)]="country.region" name="region" class="form-control" readonly="readonly">
    
  </div>

  <div class="form-group">
  
    <label for="subregion">Sub-Region</label>
    
    <input type="text" [(ngModel)]="country.subregion" name="region" class="form-control" readonly="readonly"> 
    
  </div>

</div>

</form>
--------------------------------------
11-verificar app.module
--------------------------------------

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


//new components:

import { AgGridModule } from 'ag-grid-angular';

import { CountryBoardComponent } from './country/country-board/country-board.component';

import { CountryFormComponent } from './country/countryForm/country-form.component';

import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
  
    AppComponent,
    CountryBoardComponent,
    CountryFormComponent,
   
  ],
  
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //new components:
    AgGridModule.withComponents([]),
    FormsModule
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
  
})

export class AppModule { }

--------------------------------------
HITO -Probar 
--------------------------------------

C:\agGrid:>ng serve -o







































