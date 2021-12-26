import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { maisons } from 'src/app/maison';
import { Maison } from 'src/app/maison.model';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {
 
  maison? :Maison;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    this.route.paramMap.subscribe(params => {
      const maisonId = params.get("id");
      this.maison = maisons.filter(maison => maison.id === maisonId)[0];
       });
      
}
}