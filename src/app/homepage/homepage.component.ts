import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandaloneComponent } from '../standalone/standalone.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [StandaloneComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
