import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benjdida',
  templateUrl: './benjdida.component.html',
  styleUrls: ['./benjdida.component.css']
})
export class BenjdidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
