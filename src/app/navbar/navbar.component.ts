import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  color=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Inicio(){
    this.router.navigate(["Inicio"])
  }

  Trabajos(){
    this.router.navigate(["Trabajos"])

  }

  Ofrezco(){
    this.router.navigate(["Ofrecer"])

  }
  Contactame(){
    this.router.navigate(["Contacto"])

  }
  Claro(){
    if(this.color==false){
      this.color=true;
    }

  }
  Oscuro(){
    if(this.color==true){
      this.color=false;
    }

  }

  

}
