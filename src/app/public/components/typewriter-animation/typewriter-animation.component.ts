// filepath: /C:/Users/juan.maria.molins/OneDrive - Accenture/Documents/GitHub/ng-f-loto-proj/src/app/public/components/typewriter-animation/typewriter-animation.component.ts
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-typewriter-animation',
  templateUrl: './typewriter-animation.component.html',
  styleUrls: ['./typewriter-animation.component.scss']
})
export class TypewriterAnimationComponent implements AfterViewInit {

  @Input()
  public text: string = '';
  @Input()
  public height: number = 200; // Default height
  @Input()
  public typingSpeed: number = 200; // Default speed

  @ViewChild('textContainer')
  public textContainer!: ElementRef;

  public displayedText: string = '';
  public currentIndex: number = 0;
  private isTyping: boolean = false;

  ngAfterViewInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkVisibility();
  }

  private checkVisibility(): void {
    const rect = this.textContainer.nativeElement.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if (!this.isTyping && rect.top >= 0 && rect.bottom <= viewHeight) {
      this.isTyping = true;
      this.typeWriterEffect();
    }
  }

  private typeWriterEffect(): void {
    if (this.currentIndex < this.text.length) {
      this.displayedText += this.text.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => {
        this.typeWriterEffect();
        this.scrollToBottom();
      }, this.typingSpeed);
    }
  }

  private scrollToBottom(): void {
    this.textContainer.nativeElement.scrollTop = this.textContainer.nativeElement.scrollHeight;
  }
}