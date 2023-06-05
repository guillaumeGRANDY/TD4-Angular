import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private _router: Router) { }

  toDecollages(): void {
    this._router.navigateByUrl(`/decollages`);
  }

  toAtterrisages(): void {
    this._router.navigateByUrl(`/atterrissages`);
  }

}
