import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-binding',
  template: `<div class="container">
    <div class="card w-50">
      <div class="card-header bg-dark text-white">Register Form</div>
      <div class="card-body">
        <div class="form-group">
          <p>Email</p>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder=""
            #txtEmail
            [(ngModel)]="email"
          />
        </div>
        <div class="form-group">
          <p>Full name</p>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder=""
            #txtFullname
            
          />
        </div>
        <button class="btn btn-success" (click)="changeFullname(txtFullname.value)">
          Submit
        </button>
        <br>
        <p class="mt-3">Email: {{ email }}</p>

        <!-- Dùng event binding (handle state react) -->
        <p>Fullname: {{ fullname }}</p>
      </div>
    </div>
  </div>`,
})
export class BTBindingComponent implements OnInit {
  fullname: string = 'Khoa Nguyên';
  email: string = 'John123@gmail.com';
  constructor() {}
  changeFullname(newName: string): void {
    this.fullname = newName;
  }
  changeEmail(newEmail: string): void {
    this.email = newEmail;
  }
  ngOnInit() {}
}
