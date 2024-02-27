// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form with the first section
    this.myForm = this.fb.group({
      sections: this.fb.array([this.createSection()])
    });
  }

  // Create a form group for each section
  createSection(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      // Add other controls for the first section
    });
  }

  // Add a new section to the form
  addSection(): void {
    const sections = this.myForm.get('sections') as FormArray;
    sections.push(this.createSection());
  }

  // Handle form submission
  onSubmit(): void {
    if (this.myForm.valid) {
      // Form is valid, process the data
      console.log('Form data:', this.myForm.value);
      // Add your logic for form submission
    } else {
      // Form is invalid, show error messages
      console.log('Form validation failed. Please check your inputs.');
    }
  }
}
