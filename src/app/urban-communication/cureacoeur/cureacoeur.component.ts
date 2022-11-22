import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cureacoeur',
  templateUrl: './cureacoeur.component.html',
  styleUrls: ['./cureacoeur.component.css']
})
export class CureacoeurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
