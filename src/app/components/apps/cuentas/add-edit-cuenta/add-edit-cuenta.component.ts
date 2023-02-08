import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentasService } from 'src/app/services/cuentas/cuentas.service';


@Component({
  selector: 'app-add-edit-cuenta',
  templateUrl: './add-edit-cuenta.component.html',
  styleUrls: ['./add-edit-cuenta.component.css']
})
export class AddEditCuentaComponent implements OnInit {

  myForm: FormGroup
  idCuenta: any;
  accion = 'Agregar';

  constructor(private fb: FormBuilder,              
              private _cuentasService: CuentasService,
              private route: Router,
              private snackBar: MatSnackBar,
              private aRoute: ActivatedRoute ) {

    this.myForm = this.fb.group({
      cuenta_banco: [''],
      cuenta_numero: [''],
      cuenta_titular: ['']
    });

    this.idCuenta = this.aRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    if (this.idCuenta !== undefined) {
      this.accion = 'Editar';
      this.editarCuenta();
    }
  }

  agregarCuenta() {

    const CUENTA = {      
      CTA_BANCO: this.myForm.get('cuenta_banco').value,
      CTA_NUMEROCUENTA: this.myForm.get('cuenta_numero').value,
      CTA_NOMBRE: this.myForm.get('cuenta_titular').value
    }

    if (this.idCuenta !== undefined){
      this._cuentasService.editCuenta(this.idCuenta, CUENTA).subscribe(datos =>{
        this.snackBar.open('La cuenta ha sido editada con éxito','', {
          duration: 3000
          });
          this.route.navigate(['/dashboard/cuentas'])
      }), error => {
        this.myForm.reset();
      }
    } else {
      this._cuentasService.addCuenta(CUENTA).subscribe(datos => {
        this.snackBar.open('La cuenta fue registrada con éxito','', {
          duration: 3000
          });
        this.route.navigate(['/dashboard/cuentas'])
      }), error => {
        this.myForm.reset();
      }
    }
  }

  editarCuenta() {
    this._cuentasService.getCuenta(this.idCuenta).subscribe(datos => {
      this.myForm.patchValue({
        cuenta_banco: datos.CTA_BANCO,
        cuenta_numero: datos.CTA_NUMEROCUENTA,
        cuenta_titular: datos.CTA_NOMBRE
      })
    });
  }

}

