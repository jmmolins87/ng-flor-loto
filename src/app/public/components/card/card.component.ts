import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public srcImg!: string[];
  @Input()
  public titleCard!: string;
  @Input()
  public descriptionCard!: string;

  public showSkeleton: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1500)
  }

  onLoad() {
    this.showSkeleton = false;
  }

}
