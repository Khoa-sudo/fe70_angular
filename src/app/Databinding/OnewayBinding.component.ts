import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  template: ` <div>
    <h3>Oneway binding</h3>
    <p class="text-success">Cách 1: Interpolation</p>
    <p>Hello: {{ title }}</p>
    <p>Title: {{ renderTitle() }}</p>
    <input value="{{ title }}" class="w-25 form-control" />
    <hr />
    <p class="text-danger">Cách 2: Properties binding</p>
    <section [innerHTML]="'Hello ' + title"></section>
    <input class="w-25 form-control" [value]="title" />
    <img src="{{ imgSrc }}" class="w-25 mt-2" alt="hot model" />
    <h3 class="text-danger">
      Event binding: Thay đổi dữ liệu giao diện thông qua sự kiện (handle state
      react)
    </h3>
    <div class="form-group">
      <p>New</p>
      <input #iTitle type="text" class="form-control w-25" />
      <button class="btn btn-success" (click)="changeTitle(iTitle.value)">
        <!-- (click) = onclick -->
        Change title
      </button>
    </div>
  </div>`,
})
export class OnewayComponent implements OnInit {
  //MVVM: model view view model
  //Tất cả dữ liệu trên giao diện phải là thuộc tính hoặc phương thức của model class
  title: string = 'Cybersoft';
  imgSrc: string = 'https://i.pravatar.cc?u=100';
  constructor() {}
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
  renderTitle = () => {
    return 'Frontend 70';
  };
  ngOnInit() {}
}
