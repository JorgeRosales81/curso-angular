import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugueteService {

  constructor(private http: HttpClient) { }

  return this.http.get <[Juguete]>{"https://super-rest.herokuapp.com/test/JUGUETES"}


  savejuguete(item: Juguete): Observable<any>{
    if(item._id){
       return this.http.put("https://super-rest.herokuapp.com/test/JUGUETES",item);
    }

    return this.http.post("https://super-rest.herokuapp.com/test/JUGUETES",item);
  }

}
