import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarteVisite } from './carte-visite.model'; 

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  myForm: FormGroup;
  carte: CarteVisite = new CarteVisite();

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.carte.nom = this.myForm.value.firstName;
      this.carte.prenom = this.myForm.value.lastName;
    }
  }
}
