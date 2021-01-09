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
//-----------------------------------------------------------------------
/**
 *Buscar un registro consultando el endpoint del Registro
 */
  findOne(id:string):Observable< Country >{
    return  this.http.get<Country>(`https://restcountries.eu/rest/v2/callingcode/${id}`)
    .pipe(catchError(e=>{
      console.log(e.error.mensaje);
      return throwError(e)
    })
    );
  }
//-----------------------------------------------------------------------

}//fc
