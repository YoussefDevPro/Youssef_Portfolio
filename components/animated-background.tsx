"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = 150 // Increased number of particles
    
    // Calculate grid dimensions for even distribution
    const gridCellsX = Math.ceil(Math.sqrt(numberOfParticles * (canvas.width / canvas.height)))
    const gridCellsY = Math.ceil(Math.sqrt(numberOfParticles * (canvas.height / canvas.width)))
    const cellWidth = canvas.width / gridCellsX
    const cellHeight = canvas.height / gridCellsY

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number

      constructor(gridX?: number, gridY?: number) {
        // If grid position is provided, use it for more homogeneous distribution
        if (gridX !== undefined && gridY !== undefined) {
          // Position within the cell with some randomness for natural look
          this.x = (gridX * cellWidth) + (Math.random() * cellWidth)
          this.y = (gridY * cellHeight) + (Math.random() * cellHeight)
        } else {
          // Fallback to random positioning
          this.x = Math.random() * (canvas?.width ?? window.innerWidth)
          this.y = Math.random() * (canvas?.height ?? window.innerHeight)
        }
        
        this.originalX = this.x // Store original position
        this.originalY = this.y
        this.size = Math.random() * 5 + 2 // Slightly reduced max size for consistency
        
        // Reduced speed variation for more consistent movement
        this.speedX = Math.random() * 0.8 - 0.15
        this.speedY = Math.random() * 0.8 - 0.15

        // Use Catppuccin Mocha colors
        const colors = [
          "#f5e0dc", // Rosewater
          "#f2cdcd", // Flamingo
          "#cba6f7", // Mauve
          "#f38ba8", // Red
          "#fab387", // Peach
          "#a6e3a1", // Green
          "#94e2d5", // Teal
          "#89dceb", // Sky
          "#74c7ec", // Sapphire
          "#b4befe", // Lavender
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Increase movement speed for more noticeable animation
        this.x += this.speedX * 1.5
        this.y += this.speedY * 1.5

        // Bounce off edges with slight attraction to original position
        if (canvas && (this.x > canvas.width || this.x < 0)) {
          this.speedX = -this.speedX
          // Slight attraction to original position
          this.speedX += (this.originalX - this.x) * 0.0005
        }
        if (canvas && (this.y > canvas.height || this.y < 0)) {
          this.speedY = -this.speedY
          // Slight attraction to original position
          this.speedY += (this.originalY - this.y) * 0.0005
        }
        
        // Very slight attraction to original position to maintain homogeneous distribution
        this.speedX += (this.originalX - this.x) * 0.0002
        this.speedY += (this.originalY - this.y) * 0.0002
        
        // Dampen speed to prevent excessive acceleration but not too much
        this.speedX *= 0.995
        this.speedY *= 0.995
        
        // Add slight random movement for more natural feel
        if (Math.random() < 0.05) {
          this.speedX += (Math.random() - 0.5) * 0.1
          this.speedY += (Math.random() - 0.5) * 0.1
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      // Create particles in a grid pattern for homogeneous distribution
      let particleCount = 0
      
      // First try to place particles in a grid
      for (let y = 0; y < gridCellsY && particleCount < numberOfParticles; y++) {
        for (let x = 0; x < gridCellsX && particleCount < numberOfParticles; x++) {
          particlesArray.push(new Particle(x, y))
          particleCount++
        }
      }
      
      // If we need more particles, add them randomly
      while (particleCount < numberOfParticles) {
        particlesArray.push(new Particle())
        particleCount++
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(30, 30, 46, 0.8)") // Base with some transparency
      gradient.addColorStop(1, "rgba(24, 24, 37, 0.8)") // Mantle with some transparency
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Draw connections between particles
      connectParticles()

      requestAnimationFrame(animate)
    }

    const connectParticles = () => {
      if (!ctx) return
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Increased connection distance
            ctx.strokeStyle = `rgba(180, 190, 254, ${0.15 - distance / 1500})` // Lavender with higher opacity
            ctx.lineWidth = 1 // Increased line width
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z--1" />
}

