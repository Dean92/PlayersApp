import { Component, OnInit } from "@angular/core";

@Component({
  selector: "playerName",
  templateUrl: "./playerName.component.html",
  styleUrls: ["./playerName.component.css"]
})
export class PlayerNameComponent implements OnInit {
  hello = "test";
  constructor() {}

  ngOnInit() {}
}
