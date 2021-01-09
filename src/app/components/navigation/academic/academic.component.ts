import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss'],
})
export class AcademicComponent implements OnInit {

  itemns:string[];
  subitems:any[]
  constructor() {
    this.itemns = ['Matricula','Notas','Asignaturas','Estadisticas','Otros'];
    this.subitems = [
      ['proceso de amtricula','realizar matricula'],
      ['contancia de notas','promedios por semestre'],
      ['aprobadas','desaprobadas','no cursadas'],
      ['creditos','total'],
      ['otro1','otro2','otro3']
    ]
   }
  ngOnInit(): void {
  }

}
