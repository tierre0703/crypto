import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formData: user = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    watch_list: [],
  };

  registerForm!: FormGroup;
  nameForm!: FormGroup;
  emailForm!: FormGroup;
  userNPassForm!: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.nameForm = _formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });
    this.emailForm = _formBuilder.group({
      emailCtrl: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.email,
        ],
      ],
    });
    this.userNPassForm = _formBuilder.group({
      userNameCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('form built');
  }

  signUP() {
    const valid = false;
    if (valid) {
    }

    this.http.post('http://localhost:3000/posts', this.formData).subscribe(
      (res) => {
        alert('user was created');
        this.nameForm.reset();
        this.emailForm.reset();
        this.userNPassForm.reset();
        this.router.navigate(['login']);
      },
      (err) => {
        alert('there was an error');
      }
    );

    //implement server side validation and insert later, for routs back to home page
  }
}
