import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ EscapeHtmlPipe } from '../shared/pipes/EscapeHtmlPipe'

@NgModule({
  imports: [CommonModule],
  declarations: [EscapeHtmlPipe],
  exports: [EscapeHtmlPipe]
})
export class EscapeHtmlModule { }
