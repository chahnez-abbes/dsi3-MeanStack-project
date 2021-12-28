import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { maisons } from 'src/app/maison';
import { Maison } from 'src/app/maison.model';
import { MaisonService } from 'src/app/maison.service';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {

  maison:any = [];
  constructor(private route: ActivatedRoute, private maisonService: MaisonService) { }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.maisonService.get(id).subscribe(   
        data=>{this.maison = data;
          console.log(data);
          
        }  
        );
       });
      
}
}