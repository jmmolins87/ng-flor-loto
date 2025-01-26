import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-flower-background',
  templateUrl: './flower-background.component.html',
  styleUrls: ['./flower-background.component.scss']
})
export class FlowerBackgroundComponent implements OnInit, AfterViewInit {
  @ViewChild('flowerCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private flowers: any[] = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generar flores en una línea
    this.generateFlowersInLine();

    // Generar flores en una forma circular
    this.generateFlowersInCircle();

    this.animate();
  }

  private generateFlowersInLine(): void {
    const numberOfFlowers = 20;
    const spacing = this.ctx.canvas.width / numberOfFlowers;
    for (let i = 0; i < numberOfFlowers; i++) {
      const x = i * spacing;
      const y = this.ctx.canvas.height / 2;
      const size = Math.random() * 30 + 20;
      const petals = Math.floor(Math.random() * 5) + 5;
      const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      this.flowers.push({ x, y, size, petals, color, step: 0 });
    }
  }

  private generateFlowersInCircle(): void {
    const numberOfFlowers = 20;
    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;
    const radius = Math.min(this.ctx.canvas.width, this.ctx.canvas.height) / 4;
    for (let i = 0; i < numberOfFlowers; i++) {
      const angle = (i * Math.PI * 2) / numberOfFlowers;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const size = Math.random() * 30 + 20;
      const petals = Math.floor(Math.random() * 5) + 5;
      const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      this.flowers.push({ x, y, size, petals, color, step: 0 });
    }
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // Generate flowers if needed
    this.generateFlowers();
    this.drawFlowers();

    // Slowly morph flowers over time
    this.morphFlowers();

    // Request next animation frame
    requestAnimationFrame(() => this.animate());
  }

  private generateFlowers(): void {
    const numberOfFlowers = 20;
  const spacing = this.ctx.canvas.width / numberOfFlowers;
  for (let i = 0; i < numberOfFlowers; i++) {
    const x = i * spacing;
    const y = this.ctx.canvas.height / 2;
    const size = Math.random() * 30 + 20;
    const petals = Math.floor(Math.random() * 5) + 5;
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    this.flowers.push({ x, y, size, petals, color, step: 0 });
  }
  }

  private drawFlowers(): void {
    this.flowers.forEach((flower) => {
      this.drawFlower(flower.x, flower.y, flower.size, flower.petals, flower.color, flower.step);
    });
  }

  private drawFlower(
    x: number,
    y: number,
    size: number,
    petals: number,
    color: string,
    step: number
  ): void {
    this.ctx.save();
    this.ctx.translate(x, y);

    for (let i = 0; i < petals; i++) {
      const angle = (i * Math.PI * 2) / petals + Math.sin(step) * 0.2; // Slight rotation
      const petalLength = size + Math.sin(step + i) * 5; // Dynamic petal length

      this.ctx.save();
      this.ctx.rotate(angle);
      this.ctx.beginPath();

      // Draw petal as a rounded shape
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(petalLength / 2, -petalLength / 3, 0, -petalLength);
      this.ctx.quadraticCurveTo(-petalLength / 2, -petalLength / 3, 0, 0);

      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.restore();
    }

    this.ctx.restore();
  }

  private morphFlowers(): void {
    this.flowers.forEach((flower) => {
      flower.step += 0.02; // Slow animation for petals
      flower.size += Math.sin(flower.step) * 0.1; // Slight pulsation of flower size
      if (flower.size > 60) {
        flower.size = Math.random() * 30 + 20; // Reset flower size if it grows too large
      }
    });
  }
}

