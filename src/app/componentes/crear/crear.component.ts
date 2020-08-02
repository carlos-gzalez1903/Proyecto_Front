import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../servicios/location.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  nombreLocation = '';
  areaM2 = 0;

  constructor(private service: LocationService) { }

  ngOnInit(): void {
  }

  crear() {
    this.service.postLocation(this.nombreLocation, this.areaM2).subscribe(res => {
      if (res != null) {
        console.log(res);
        alert('Registro realizado correctamente');
      }
    });
  }

}
