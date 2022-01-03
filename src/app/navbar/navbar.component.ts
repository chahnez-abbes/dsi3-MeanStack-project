import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.service.valide=true;
    this.service.valide1=false;
    this.service.valide2=false;
    console.log( this.service.valide);
    console.log( this.service.valide1);
    console.log( this.service.valide2);
    

  }

}
