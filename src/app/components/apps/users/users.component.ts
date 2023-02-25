import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { MensajeConfirmacionComponent } from "../mensaje-confirmacion/mensaje-confirmacion.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UsersService } from "@services/users/users.service";
import { Users } from "@models/users.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    "No.",
    "Activity",
    "Area",
    "ConnectionState",
    "CountryCode",
    "CountryName",
    "Email",
    "EndpointsCount",
    "JobTitle",
    "LastActivity",
    "LastActivityString",
    "LastActivityUtc",
    "Name",
    "PhoneCode",
    "PhoneCodeAndNumber",
    "PhoneNumber",
    "PublicId",
    "SubscriptionDate",
    "SubscriptionMethod",
    "SubscriptionState",
    "SubscriptionStateDescription",
    "Acciones",
  ];
  dataSourceUsers = new MatTableDataSource();
  usersList: any = [];
  spinner: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _usersService: UsersService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.spinner = true;
    this._usersService.getUsers().subscribe({
      next: (data: Users) => {        
        this.spinner = false;
        this.usersList = data.Data;
        this.dataSourceUsers = new MatTableDataSource(this.usersList);
        this.dataSourceUsers.paginator = this.paginator;
      },
      error: (err) => {},
    });
  }

  deleteUser(id: any) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: "350px",
      data: { mensaje: "Estas seguro de eliminar el usuario?" },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "aceptar") {
        this._usersService.deleteUser(id).subscribe({
          next: () => {
            this.getUsers();
            this.snackBar.open("El usuario ha sido eliminado con éxito", "", {
              duration: 3000,
            });
          },
          error: (err) => {},
        });
      }
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
  }
}
