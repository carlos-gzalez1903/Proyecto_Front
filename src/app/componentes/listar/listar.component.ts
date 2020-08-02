import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/servicios/location.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  locations: any;

  constructor(private service: LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.service.getLocations().subscribe(res => {
      this.locations = res;
      console.log(res);
    });
  }

}
