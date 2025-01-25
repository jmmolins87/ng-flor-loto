import { 
  Component, 
  ElementRef, 
  Input, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-typewriter-animation',
  templateUrl: './typewriter-animation.component.html',
  styleUrls: ['./typewriter-animation.component.scss']
})
export class TypewriterAnimationComponent {

  // Add text, height, and typing speed as input properties
  @Input()
  public text: string = '';
  @Input()
  public height: number = 200; // Default height
  @Input()
  public typingSpeed: number = 200; // Default speed

  // Get the text container element
  @ViewChild('textContainer')
  public textContainer!: ElementRef;

  // Initialize variables
  public displayedText: string = '';
  public currentIndex: number = 0;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.typeWriterEffect();
  }

  // Listen for window resize events and adjust the height of the text container accordingly
  typeWriterEffect(): void {
    if (this.currentIndex < this.text.length) {
      this.displayedText += this.text.charAt(this.currentIndex);
      this.currentIndex++;
      this.scrollTextContainer();
      setTimeout(() => this.typeWriterEffect(), this.typingSpeed); // Adjust the speed as needed
    }
  }

  // Scroll the text container to the bottom when the text overflows the container
  scrollTextContainer(): void {
    const container = this.textContainer.nativeElement;
    if (container.scrollHeight > container.clientHeight) {
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  }

}
