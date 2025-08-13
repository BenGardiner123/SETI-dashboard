import React from 'react';
import { Radio, Activity } from 'lucide-react';

interface HeaderProps {
  lastUpdate: Date;
  isLive: boolean;
}

export const Header: React.FC<HeaderProps> = ({ lastUpdate, isLive }) => {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Radio className="w-8 h-8 text-cyan-400" />
            {isLive && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">SETI Data Explorer</h1>
            <p className="text-gray-400">Autonomous NASA Data Visualization</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-green-400">
            <Activity className="w-4 h-4" />
            <span className="text-sm">LIVE</span>
          </div>
          <p className="text-gray-400 text-sm">
            Last update: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </header>
  );
};