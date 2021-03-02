//Defaults that were auto-generated
import { Component, OnInit } from "@angular/core";

//Import Input to receive data from parent Component
import { Input } from "@angular/core";

//Import Output to send data to parent Component
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify1 = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
