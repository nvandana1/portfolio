import { Component } from '@angular/core';
import {FrameComponent} from "../frame/frame.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FrameComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
