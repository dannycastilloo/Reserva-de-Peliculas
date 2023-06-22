import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-crear-reservas',
  templateUrl: './crear-reservas.component.html',
  styleUrls: ['./crear-reservas.component.css']
})
export class CrearReservaComponent {


  ReservaForm: FormGroup;


  constructor(private fb: FormBuilder,
              private router: Router,
              private _reservaService: ReservaService){
    this.ReservaForm = this.fb.group({
        Reserva:  ['', Validators.required],
        categoria: ['', Validators.required],
        ubicacion: ['', Validators.required],
        precio:    ['', Validators.required],
        fecha:    ['', Validators.required]
    })
  }


  agregarRerserva(){


    const RESERVA: Reserva = {
      titulo: this.ReservaForm.get('titulo')?.value,
      genero: this.ReservaForm.get('genero')?.value,
      director: this.ReservaForm.get('director')?.value,
      actor: this.ReservaForm.get('actor')?.value,
      fecha: this.ReservaForm.get('fecha')?.value,
    }


    console.log(RESERVA)


    Swal.fire({
      title: 'Creacion de la reserva',
      text: "¿Desea crear la reserva?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._reservaService.guardarReserva(RESERVA).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-reservas'])
        })
      }
    })


   
  }


    //console.log(this.productoForm)
 


}
