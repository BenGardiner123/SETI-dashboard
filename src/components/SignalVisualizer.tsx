import React, { useEffect, useRef } from 'react';
import { SetiSignal } from '../types/seti';

interface SignalVisualizerProps {
  signals: SetiSignal[];
}

export const SignalVisualizer: React.FC<SignalVisualizerProps> = ({ signals }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawSignals = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw frequency spectrum
      const width = canvas.width;
      const height = canvas.height;
      
      // Background grid
      ctx.strokeStyle = '#1E3A8A';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 10; i++) {
        const x = (i / 10) * width;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
        
        const y = (i / 10) * height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw signals
      signals.forEach((signal, index) => {
        const x = ((signal.frequency - 1370) / 200) * width;
        const y = height - (signal.strength / 100) * height;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
        if (signal.anomaly) {
          gradient.addColorStop(0, '#FF6B6B');
          gradient.addColorStop(1, 'rgba(255, 107, 107, 0)');
        } else {
          gradient.addColorStop(0, '#00F5FF');
          gradient.addColorStop(1, 'rgba(0, 245, 255, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, signal.anomaly ? 8 : 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulsing effect for anomalies
        if (signal.anomaly) {
          const pulseRadius = 10 + Math.sin(Date.now() * 0.01 + index) * 5;
          ctx.strokeStyle = '#FF6B6B';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    };

    drawSignals();
    const interval = setInterval(drawSignals, 100);

    return () => clearInterval(interval);
  }, [signals]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-blue-800">
      <h3 className="text-cyan-400 font-semibold mb-2">Signal Spectrum Analysis</h3>
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="w-full border border-gray-700 rounded"
      />
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>1370 MHz</span>
        <span>1570 MHz</span>
      </div>
    </div>
  );
};