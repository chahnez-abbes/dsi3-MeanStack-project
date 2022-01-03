import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 x:string="";
 public registerForm2: FormGroup;
  public registerForm: FormGroup;
  constructor(public formBuilder: FormBuilder ,public formBuilder2: FormBuilder ,public authService: AuthService, public router: Router) { 
    this.registerForm = this.formBuilder.group({
      name: [''],
      password: [''],
        });
        this.registerForm2 = this.formBuilder2.group({
          name: ['rami'],
          password: ['rami'],
            });
  }

  ngOnInit(): void {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;

  }

 
  loginUser(){
  
  
   this.authService.signin(this.registerForm.value).subscribe(res => {
      if(res.status == 201) {
        alert('bienvenu ches 3a9ari!! :-)\n\n' + JSON.stringify(this.registerForm.value , null, 4) );

this.x=JSON.stringify(this.registerForm.value , null, 4) ;

if( JSON.stringify(this.registerForm.value , null, 4)== JSON.stringify(this.registerForm2.value , null, 4)){
  
  this.authService.Signadmin();
  console.log("visit  //"+this.authService.valide);
  console.log("client //"+this.authService.valide1);
  console.log("admin  //"+this.authService.valide2);
  this.router.navigate(['/home']);
}else{

        this.authService.Signclient();
console.log("visit  //"+this.authService.valide);
console.log("client //"+this.authService.valide1);
console.log("admin //"+this.authService.valide2);

        this.router.navigate(['/home']);
      }
    }
    },
    
    error=> {console.log("jknkllk")
    alert("les cordonner non valid");
});
  }
  
  }

