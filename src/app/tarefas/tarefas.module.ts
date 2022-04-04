import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService, TarefaConcluidaDirective} from './shared';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
  ],
  providers:[
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DragDropModule
  ]
})
export class TarefasModule { }
