import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CuentasService {
  url = "http://localhost:3000/cuentas";

  constructor(private http: HttpClient) {}
  //funcion para consultar todas las cuentas bancarias
  getCuentas(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  //funcion para consultar una cuenta bancaria pasando por parametro un ID
  getCuenta(id: any): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }
  //funcion para editar una cuenta bancaria pasando por parametro un ID y la data
  editCuenta(id: any, cuenta): Observable<any> {
    return this.http.put(this.url + "/" + id, cuenta);
  }
  //funcion para eliminar una cuenta bancaria
  deleteCuenta(id: any): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
  //funcion para agregar una cuenta bancaria
  addCuenta(cuenta): Observable<any> {
    return this.http.post(this.url, cuenta);
  }
}
