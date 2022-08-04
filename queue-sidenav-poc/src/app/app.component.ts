import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stages: MenuItem[] = [];
  display: any;

  visibleSidebar1: any;

  ngOnInit() {

    this.stages = [
      {label: 'Patient & Visit Information', icon: 'pi pi-exclamation-triangle'},
      {label: 'Audit Information', icon: 'pi pi-exclamation-triangle'},
      {label: 'Auditor Decision', icon: ''},
      {label: 'Discussion', icon: ''},
      {label: 'Rebuttal', icon: ''},
      {label: 'Finance', icon: ''},
    ];

  }
}
