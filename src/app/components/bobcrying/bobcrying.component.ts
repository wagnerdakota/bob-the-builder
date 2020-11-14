import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  templateUrl: './bobcrying.component.html',
  styleUrls: ['./bobcrying.component.scss']
})
export class BobcryingComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  cancel() {
    this.location.back()
  }

}
