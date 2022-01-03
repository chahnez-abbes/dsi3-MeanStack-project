import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { terrains } from '../terrain';
import { Terrain } from '../terrain.model';
import { TerrainService } from '../terrain.service';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.component.html',
  styleUrls: ['./terrains.component.css']
})
export class TerrainsComponent implements OnInit {
  public terains: Terrain[] = terrains;
  public terainsl: any = [];
  constructor( private TerrainService: TerrainService,public service: AuthService) { }

  ngOnInit(): void {
    this.TerrainService.all().subscribe(
      data =>{ this.terainsl = data ;
      
    }
    );
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

}
