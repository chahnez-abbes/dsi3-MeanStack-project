import { ActivatedRoute } from '@angular/router';
import { Terrain } from './../../terrain.model';
import { Component, OnInit } from '@angular/core';
import { terrains } from 'src/app/terrain';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  terrain? :Terrain;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
     this.route.paramMap.subscribe(params => {
      const terrainId = params.get("id");
      this.terrain = terrains.filter(terrain => terrain.id === terrainId)[0];
       });
  }

}
