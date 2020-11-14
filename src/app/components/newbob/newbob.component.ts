import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  templateUrl: './newbob.component.html',
  styleUrls: ['./newbob.component.scss']
})
export class NewbobComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.location.back()
  }

}
