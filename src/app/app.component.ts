import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  grupoForm: FormGroup;
	submitted = false;

  	constructor(private _formBuilder: FormBuilder,
	) {
	}

  ngOnInit(){
this.grupoForm = this._formBuilder.group({
			a: ['', [Validators.required]],
			b: ['', [Validators.required]],

		})
  }
  onSave() {
		this.submitted = true;

		if (this.grupoForm.invalid) {
			return
		}
		else {
      console.log("PASO")
		}

	}
}

