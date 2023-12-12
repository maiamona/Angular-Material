import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MaterialComponent } from './material/material.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
// import { MatBottomSheetModule, MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Chips1Component } from './chips1/chips1.component';
import { Chips2Component } from './chips2/chips2.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatExpansionModule } from '@angular/material/expansion';
import { FormFieldComponent } from './form-field/form-field.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    CheckboxComponent,
    Chips1Component,
    Chips2Component,
    FormFieldComponent,
    SnackbarComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatListModule,
    MatBottomSheetModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatStepperModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSidenavModule
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    {provide:MatDialogRef , useValue:{} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
