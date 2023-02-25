import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Countries } from "../../models/countries.models"

@Injectable({
  providedIn: 'root'
})
export class CountryCodesService {
  api_url = environment.url;

  constructor(private http: HttpClient) { }

  getCountryCodes() {        
    return this.http.get<Countries>(this.api_url + "countries?count=255");
  }
}
