import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-background',
  templateUrl: './flower-background.component.html',
  styleUrls: ['./flower-background.component.scss']
})
export class FlowerBackgroundComponent implements OnInit {

  @ViewChild('flowerCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private flowers: { x: number; y: number; size: number; progress: number }[] = [];

  ngOnInit(): void {
    this.setupCanvas();
    this.generateFlowers();
    this.animateFlowers();
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.flowers = [];
      this.generateFlowers();
    });
  }

  private generateFlowers(): void {
    const { width, height } = this.canvasRef.nativeElement;
    const numFlowers = 30; // MÁS flores

    for (let i = 0; i < numFlowers; i++) {
      this.flowers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 80 + 40, // Tamaño variable
        progress: 0, // Comienza sin estar dibujada
      });
    }
  }

  private animateFlowers(): void {
    const drawFrame = () => {
      this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
      this.flowers.forEach((flower) => {
        if (flower.progress < 1) {
          flower.progress += 0.005; // MÁS LENTO
        }
        this.drawFlower(flower.x, flower.y, flower.size * flower.progress);
      });
      requestAnimationFrame(drawFrame);
    };
    drawFrame();
  }

  private drawFlower(x: number, y: number, size: number): void {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.strokeStyle = 'rgba(160, 199, 92, .5)';
    this.ctx.lineWidth = 2;

    const petals = 6;
    for (let i = 0; i < petals; i++) {
      this.ctx.beginPath();
      this.ctx.rotate((Math.PI * 2) / petals);
      this.ctx.moveTo(0, 0);
      this.ctx.bezierCurveTo(size * 0.5, -size * 0.5, size * 1.5, size * 0.5, 0, size);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
}