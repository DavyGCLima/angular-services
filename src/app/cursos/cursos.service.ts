import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter();

  private cursos: string[] = ['curso 1', 'curso 2', 'curso 3'];

  constructor(private logService: LogService) {
    console.log('cursosService');
   }

  getCursos() {
    this.logService.log('Obtendo cursos');
    return this.cursos;
  }

  addCursos(curso: string) {
    this.logService.log(`Criando novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}
