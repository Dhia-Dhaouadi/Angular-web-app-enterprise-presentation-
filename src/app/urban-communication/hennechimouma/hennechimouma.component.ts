import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hennechimouma',
  templateUrl: './hennechimouma.component.html',
  styleUrls: ['./hennechimouma.component.css']
})
export class HennechimoumaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
