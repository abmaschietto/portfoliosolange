import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-video-header",
  templateUrl: "./video-header.component.html",
  styleUrls: ["./video-header.component.css"],
})
export class VideoHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        $('#myVideo').get(0).pause();
      } else {
        $('#myVideo').get(0).play();
      }
    });
  }
}
