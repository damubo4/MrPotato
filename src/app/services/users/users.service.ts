import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { getUser } from "@models/getUser.models";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  api_url = environment.url;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.api_url + "subscribers");
  }

  getUser(id: number) {
    return this.http.get<getUser>(this.api_url + "subscribers/" + id);
  }

  deleteUser(id: number) {
    return this.http.delete(this.api_url + "subscribers/" + id);
  }

  addUser(user) {    
    return this.http.post(this.api_url + "subscribers", user);
  }

  editUser(Id: number, user) {
    return this.http.put(this.api_url + "subscribers/" + Id, user);
  }
}
