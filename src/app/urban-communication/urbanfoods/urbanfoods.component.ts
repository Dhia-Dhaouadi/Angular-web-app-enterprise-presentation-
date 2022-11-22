import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urbanfoods',
  templateUrl: './urbanfoods.component.html',
  styleUrls: ['./urbanfoods.component.css']
})
export class UrbanfoodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
