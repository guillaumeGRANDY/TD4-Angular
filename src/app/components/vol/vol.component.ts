import { Component, Input } from '@angular/core';
import {Vol} from "../../models/vol.model";

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
})
export class VolComponent {
  @Input() vol!: Vol;
  @Input() isTakeOff!: boolean;
}
