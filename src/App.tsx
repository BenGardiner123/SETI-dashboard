import React from 'react';
import { StarField } from './components/StarField';
import { Header } from './components/Header';
import { LiveStats } from './components/LiveStats';
import { SignalVisualizer } from './components/SignalVisualizer';
import { Spectrogram } from './components/Spectrogram';
import { ExoplanetTimeline } from './components/ExoplanetTimeline';
import { useSetiData } from './hooks/useSetiData';
import { Loader, AlertCircle } from 'lucide-react';

function App() {
  const { signals, exoplanets, radioData, stats, isLoading, error } = useSetiData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <StarField />
        <div className="relative z-10 text-center">
          <Loader className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Connecting to NASA Data Sources...</p>
          <p className="text-gray-400 text-sm mt-2">Initializing SETI monitoring systems</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <StarField />
        <div className="relative z-10 text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <p className="text-white text-lg">Connection Error</p>
          <p className="text-gray-400 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <StarField />
      <div className="relative z-10 p-6">
        <Header lastUpdate={stats.lastUpdate} isLive={true} />
        
        <LiveStats stats={stats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SignalVisualizer signals={signals} />
          <Spectrogram data={radioData} />
        </div>
        
        <ExoplanetTimeline exoplanets={exoplanets} />
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Data autonomously collected from NASA APIs and observatories worldwide</p>
          <p>Updates every 3-5 seconds • {signals.length} active signals detected</p>
        </div>
      </div>
    </div>
  );
}

export default App;