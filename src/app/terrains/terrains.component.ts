import { Component, OnInit } from '@angular/core';
import { terrains } from '../terrain';
import { Terrain } from '../terrain.model';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.component.html',
  styleUrls: ['./terrains.component.css']
})
export class TerrainsComponent implements OnInit {
  public terainsl: Terrain[] = terrains;
  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

}
