import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class LoginService {
    public form: FormGroup;
    constructor(private formBuilder: FormBuilder) { 
        this.form = this.formBuilder.group({
            'login': ['', [
              Validators.required,
              Validators.email
            ]],
            'password': ['', Validators.required]
          });
    }
}