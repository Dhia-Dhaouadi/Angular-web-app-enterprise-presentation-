import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laromate',
  templateUrl: './laromate.component.html',
  styleUrls: ['./laromate.component.css']
})
export class LaromateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
