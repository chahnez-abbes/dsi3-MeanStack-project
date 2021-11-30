import { Component, OnInit } from '@angular/core';
import { maisons } from '../maison';
import { Maison } from '../maison.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 maisonlist : Maison[] = maisons;
  constructor() { }

  ngOnInit(): void {
  }

}
