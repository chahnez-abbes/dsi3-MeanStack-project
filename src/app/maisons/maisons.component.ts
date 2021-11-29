import { Component, OnInit } from '@angular/core';
import { maisons } from '../maison';

import { Maison } from '../maison.model';


@Component({
  selector: 'app-maisons',
  templateUrl: './maisons.component.html',
  styleUrls: ['./maisons.component.css']
})
export class MaisonsComponent implements OnInit {
  public maisonl: Maison[] = maisons;
  constructor() { }

  ngOnInit(): void {

  }

}
