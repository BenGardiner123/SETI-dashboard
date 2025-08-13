import React, { useEffect, useRef } from 'react';
import { RadioTelescopeData } from '../types/seti';

interface SpectrogramProps {
  data: RadioTelescopeData[];
}

export const Spectrogram: React.FC<SpectrogramProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawSpectrogram = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (data.length === 0) return;

      const telescopeData = data[0];
      const width = canvas.width;
      const height = canvas.height;
      
      // Draw time-frequency data
      const numBins = telescopeData.data.length;
      const binWidth = width / numBins;
      
      telescopeData.data.forEach((intensity, i) => {
        const x = i * binWidth;
        const normalizedIntensity = Math.abs(intensity);
        
        // Color based on intensity
        const hue = 240 - (normalizedIntensity * 120); // Blue to red
        const saturation = 100;
        const lightness = 30 + (normalizedIntensity * 50);
        
        ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.fillRect(x, 0, binWidth, height);
        
        // Add sparkles for strong signals
        if (normalizedIntensity > 1.5) {
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(x + binWidth/2, Math.random() * height, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // Overlay grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 8; i++) {
        const x = (i / 8) * width;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    drawSpectrogram();
    const interval = setInterval(drawSpectrogram, 200);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-purple-800">
      <h3 className="text-purple-400 font-semibold mb-2">Radio Telescope Spectrogram</h3>
      <canvas
        ref={canvasRef}
        width={600}
        height={200}
        className="w-full border border-gray-700 rounded"
      />
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>Frequency</span>
        <span className="text-purple-400">
          {data[0]?.telescope || 'No Data'} - SNR: {data[0]?.signalToNoise?.toFixed(1) || 'N/A'}
        </span>
      </div>
    </div>
  );
};