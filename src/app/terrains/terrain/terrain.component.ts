import { ActivatedRoute } from '@angular/router';
import { Terrain } from './../../terrain.model';
import { Component, OnInit } from '@angular/core';
import { terrains } from 'src/app/terrain';
import { TerrainService } from 'src/app/terrain.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
    terrain: any = [];
  constructor(private route: ActivatedRoute, private TerrainService: TerrainService) { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;

     this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.TerrainService.get(id).subscribe(   
        data=>{this.terrain = data;
          console.log(data);
          
        }  
        );
       });

      
  }

}
