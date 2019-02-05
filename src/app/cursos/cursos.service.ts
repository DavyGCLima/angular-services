import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: string[] = ['curso 1', 'curso 2', 'curso 3'];

  constructor() {
    console.log('cursosService');
   }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso);
  }

}
