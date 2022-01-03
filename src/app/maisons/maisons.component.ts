import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


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
  
  constructor( private maisonService: MaisonService,public service: AuthService) { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    this.maisonService.all().subscribe(
      data =>{ this.maisonl = data ;
      
    }
    );
   
 
    
  }

}
