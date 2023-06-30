import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  constructor(private formBuilder: FormBuilder){}


  formData! : FormGroup;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10), this.passwordComplexityValidator()]]
    });
  }

  passwordComplexityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && value.length >= 4 && value.length <= 10) {
        if (!/\W/.test(value)) {
          return { specialChars: true };
        }
        if (/(.)\1/.test(value)) {
          return { consecutiveChars: true };
        }
      }
      return null;
    };
  }

  onSubmit(){
    if(this.formData.valid){
      alert(" Form is Valid");
      this.formData.reset();
    }
    // console
  }

}
