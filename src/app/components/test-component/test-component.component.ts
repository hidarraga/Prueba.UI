import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  personas: Array<Persona> = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas(): void {
    this.personaService.ObtenerPersonas().subscribe(
      res => this.personas = res,
      error => console.log(error)
    );
  }
}
