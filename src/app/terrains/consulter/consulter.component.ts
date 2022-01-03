import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { TerrainService } from 'src/app/terrain.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {
  public terainsl: any = [];
  constructor(private TerrainService: TerrainService,public service: AuthService) { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    this.TerrainService.all().subscribe(
      data =>{ this.terainsl = data ;
      
    }
    );
 

  }


  updatterin(id:any){

  }
  deleteterain(id:any){

  }
  terrainDetails(id:any){

  }


}
