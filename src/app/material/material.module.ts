import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
   MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
   MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatCardModule, MatInputModule, MatTableModule,MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatCardModule, MatInputModule, MatTableModule,MatProgressSpinnerModule
  ]    
})

export class MaterialModule {}