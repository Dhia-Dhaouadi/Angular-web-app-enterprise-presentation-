import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nour',
  templateUrl: './nour.component.html',
  styleUrls: ['./nour.component.css']
})
export class NourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
