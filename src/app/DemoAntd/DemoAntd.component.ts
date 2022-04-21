import { Component, OnInit } from '@angular/core';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true,
          },
        ],
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true,
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];

const otherOptions = [
  {
    value: 'fujian',
    label: 'Fujian',
    children: [
      {
        value: 'xiamen',
        label: 'Xiamen',
        children: [
          {
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true,
          },
        ],
      },
    ],
  },
  {
    value: 'guangxi',
    label: 'Guangxi',
    children: [
      {
        value: 'guilin',
        label: 'Guilin',
        children: [
          {
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];
@Component({
  selector: 'app-demo-antd',
  template: `<div>
    <h3>Demo Antd</h3>
    <button nzSize="large" nz-button nzType="primary">Primary Button</button>
    <button nzSize="small" nz-button nzType="default">Default Button</button>
    <button nz-button nzType="dashed">Dashed Button</button>
    <button nz-button nzType="text">Text Button</button>
    <a nz-button nzType="link">Link Button</a>
    <nz-cascader
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    ></nz-cascader>
    &nbsp;
    <a href="javascript:;" (click)="changeNzOptions()" class="change-options"
      >Change Options
    </a>
    <hr/>
    <app-demo-table></app-demo-table>
  </div>`,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
      .change-options {
        display: inline-block;
        font-size: 12px;
        margin-top: 8px;
      }
    `,
  ],
})
export class DemoAntdComponent implements OnInit {
  nzOptions: any[] | null = null;
  values: any[] | null = null;
  onChanges(values: any): void {
    console.log(values, this.values);
  }
  changeNzOptions(): void {
    if (this.nzOptions === options) {
      this.nzOptions = otherOptions;
    } else {
      this.nzOptions = options;
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }
}
