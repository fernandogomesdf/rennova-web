import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventoModule, EventoComponent } from './evento/evento.component';
import { CriareventoComponent } from './evento/criarevento/criarevento.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule, DialogModule } from 'primeng/primeng';
import { CriarclienteComponent } from './cliente/criarcliente/criarcliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventoModule,
    CurrencyMaskModule,
    AutoCompleteModule,
    InputTextModule,
    EditorModule,
    MultiSelectModule,
    InputMaskModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule

  ],
  declarations: [ScheduleComponent, CriareventoComponent, CriarclienteComponent],
  exports: [ScheduleComponent, CriareventoComponent, CriarclienteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [EventoComponent]
})
export class ComponentesModule { }
