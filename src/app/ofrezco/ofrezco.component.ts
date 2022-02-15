import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofrezco',
  templateUrl: './ofrezco.component.html',
  styleUrls: ['./ofrezco.component.css']
})
export class OfrezcoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Contactame(){
    this.router.navigate(["Contacto"])
  }

}
