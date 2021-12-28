import { Component, OnInit } from '@angular/core';


import { maisons } from '../maison';

import { Maison } from '../maison.model';
import { MaisonService } from '../maison.service';


@Component({
  selector: 'app-maisons',
  templateUrl: './maisons.component.html',
  styleUrls: ['./maisons.component.css']
})
export class MaisonsComponent implements OnInit {
  public maisonn: Maison[] = maisons;
  public maisonl: any = [];
  
  constructor( private maisonService: MaisonService) { }

  ngOnInit(): void {
    this.maisonService.all().subscribe(
      data =>{ this.maisonl = data ;
      
    }
    );
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
 
    
  }

}
