import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-flower-background',
  templateUrl: './flower-background.component.html',
  styleUrls: ['./flower-background.component.scss']
})
export class FlowerBackgroundComponent implements AfterViewInit {

  @ViewChild('flowerCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private flowers: {
    x: number, y: number, size: number, petals: number,
    lines: { start: { x: number, y: number }, end: { x: number, y: number }, drawn: number }[],
    circles: { x: number, y: number, radius: number, drawn: number }[],
    progress: number
  }[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.drawBackground();
    this.createFlowers();
    this.animateFlowers();
  }

  private drawBackground(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fondo blanco
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  private createFlowers(): void {
    for (let i = 0; i < 10; i++) { // Número de flores
      const x = Math.random() * this.canvasRef.nativeElement.width;
      const y = Math.random() * this.canvasRef.nativeElement.height;
      const size = Math.random() * 40 + 30; // Tamaño de la flor
      const petals = Math.floor(Math.random() * 6) + 4; // Número de pétalos

      // Crear líneas y círculos para la flor
      const lines = this.createFlowerLines(x, y, size, petals);
      const circles = this.createFlowerCircles(x, y, size);

      this.flowers.push({ x, y, size, petals, lines, circles, progress: 0 });
    }
  }

  private createFlowerLines(x: number, y: number, size: number, petals: number): { start: { x: number, y: number }, end: { x: number, y: number }, drawn: number }[] {
    const lines = [];
    for (let i = 0; i < petals; i++) {
      const angle = (Math.PI * 2 / petals) * i;
      const startX = x + Math.cos(angle) * size * 0.2;
      const startY = y + Math.sin(angle) * size * 0.2;
      const endX = x + Math.cos(angle) * size;
      const endY = y + Math.sin(angle) * size;
      lines.push({ start: { x: startX, y: startY }, end: { x: endX, y: endY }, drawn: 0 });
    }
    return lines;
  }

  private createFlowerCircles(x: number, y: number, size: number): { x: number, y: number, radius: number, drawn: number }[] {
    const circles = [];
    // Círculo central
    circles.push({ x, y, radius: size * 0.1, drawn: 0 });
    return circles;
  }

  private animateFlowers(): void {
    const animate = () => {
      this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
      this.drawBackground();

      this.flowers.forEach(flower => {
        this.drawFlower(flower);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  private drawFlower(flower: typeof this.flowers[0]): void {
    // Dibuja las líneas gradualmente
    flower.lines.forEach(line => {
      if (line.drawn < 1) {
        line.drawn += 0.005; // Velocidad del trazado de las líneas
      }
      this.ctx.beginPath();
      this.ctx.moveTo(line.start.x, line.start.y);
      const endX = line.start.x + (line.end.x - line.start.x) * line.drawn;
      const endY = line.start.y + (line.end.y - line.start.y) * line.drawn;
      this.ctx.lineTo(endX, endY);
      this.ctx.strokeStyle = '#000000'; // Líneas en negro
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    });

    // Dibuja los círculos gradualmente
    flower.circles.forEach(circle => {
      if (circle.drawn < 1) {
        circle.drawn += 0.005; // Velocidad del trazado de los círculos
      }
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius * circle.drawn, 0, Math.PI * 2);
      this.ctx.strokeStyle = '#000000'; // Círculos en negro
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    });
  }
}