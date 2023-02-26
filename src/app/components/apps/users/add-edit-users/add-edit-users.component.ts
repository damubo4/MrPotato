import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "@services/users/users.service";
import { CountryCodesService } from "@services/countryCodes/country-codes.service";
import { Countries } from "@models/countries.models";

@Component({
  selector: "app-add-edit-users",
  templateUrl: "./add-edit-users.component.html",
  styleUrls: ["./add-edit-users.component.css"],
})
export class AddEditUsersComponent implements OnInit {
  myForm: FormGroup;
  idUser: any;
  action: "Add" | "Edit" = "Add";
  countryCodes = [];

  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute,
    private countries: CountryCodesService
  ) {
    this.myForm = this.fb.group({
      Name: ["", Validators.required],
      Email: ["", [Validators.required, Validators.email]],
      CountryCode: ["", Validators.required],
      PhoneNumber: ["", Validators.required],
      JobTitle: [""],
      Area: [""],
    });

    this.idUser = this.aRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    if (this.idUser !== undefined) {
      this.action = "Edit";
      this.editUser();
    }

    this.countries.getCountryCodes().subscribe((data: Countries) => {
      this.countryCodes = data.Data;
    });
  }

  addUser() {
    const USER = {
      Id: this.idUser,
      Name: this.myForm.get("Name").value,
      Email: this.myForm.get("Email").value,
      CountryCode: this.myForm.get("CountryCode").value,
      PhoneNumber: Number(this.myForm.get("PhoneNumber").value),
      JobTitle: this.myForm.get("JobTitle").value,
      Area: this.myForm.get("Area").value,
      Topics: [],
    };

    if (this.idUser !== undefined) {
      this._usersService.editUser(this.idUser, USER).subscribe(() => {
        this.snackBar.openFromComponent(CustomSnackBarComponentEdited, {
          duration: 3000,
        });
        this.route.navigate(["/dashboard/users"]);
      }),
        () => {
          this.myForm.reset();
        };
    } else {
      delete USER.Id;
      this._usersService.addUser(USER).subscribe(() => {
        this.snackBar.openFromComponent(CustomSnackBarComponentRegistered, {
          duration: 3000,
        });
        this.route.navigate(["/dashboard/users"]);
      }),
        () => {
          this.myForm.reset();
        };
    }
  }

  editUser() {
    this._usersService.getUser(this.idUser).subscribe((data) => {
      this.myForm.patchValue({
        Name: data.Name,
        Email: data.Email,
        CountryCode: data.CountryCode,
        PhoneNumber: data.PhoneNumber,
        JobTitle: data.JobTitle,
        Area: data.Area,
      });
    });
  }
}

@Component({
  selector: "custom-snackbar-registered",
  template: "<span>{{ 'userRegistered' | translate }}</span>",
})
export class CustomSnackBarComponentRegistered {}

@Component({
  selector: "custom-snackbar-edited",
  template: "<span>{{ 'userEdited' | translate }}</span>",
})
export class CustomSnackBarComponentEdited {}

