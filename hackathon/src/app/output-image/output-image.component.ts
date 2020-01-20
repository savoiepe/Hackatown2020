import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DrawService } from '../draw.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-output-image',
  templateUrl: './output-image.component.html',
  styleUrls: ['./output-image.component.css']
})

export class OutputImageComponent implements OnInit {

  constructor(private drawService: DrawService) {
    this.drawService = drawService;
   }

  ngOnInit() {
    this.drawService.draw(null);
  }

  onImageReception(){
    let recyclingClassification = "PE part";
    this.drawService.draw(null);
  }
  
}
