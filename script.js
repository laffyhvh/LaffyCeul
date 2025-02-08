class Particle {
    constructor(container) {
      this.container = container;
      this.element = document.createElement('div');
      this.element.className = 'particle';
      this.reset();
      this.container.appendChild(this.element);
    }
  
    reset() {
      const size = Math.random() * 10 + 5;
      const startX = Math.random() * window.innerWidth;
      const rotation = Math.random() * 360;
      
      this.element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background-color: rgba(255, 222, 226, 0.6);
        border-radius: 50%;
        left: ${startX}px;
        top: -10vh;
        transform: rotate(${rotation}deg);
        animation: particle ${10 + Math.random() * 5}s linear infinite;
      `;
    }
  }
  
  class ParticleSystem {
    constructor() {
      this.container = document.getElementById('particles');
      this.particles = [];
      this.init();
    }
  
    init() {
      for (let i = 0; i < 20; i++) {
        this.particles.push(new Particle(this.container));
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
  });
