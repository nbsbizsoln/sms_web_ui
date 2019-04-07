import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
   MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
   MatProgressSpinnerModule,MatSelectModule, MatRadioModule, MatExpansionModule
} from '@angular/material';
import { SimpleDlgBoxComponent } from '../shared/simple-dlg-box/simple-dlg-box.component';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatCardModule, MatInputModule, MatTableModule,MatProgressSpinnerModule,MatSelectModule,
    MatRadioModule,MatExpansionModule,MatTableModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatCardModule, MatInputModule, MatTableModule,MatProgressSpinnerModule,MatSelectModule,
    MatRadioModule,MatExpansionModule,MatTableModule
  ]    
})

export class MaterialModule {}