import React from 'react';
import { SetiStats } from '../types/seti';
import { Activity, Radio, Globe, AlertTriangle, Telescope } from 'lucide-react';

interface LiveStatsProps {
  stats: SetiStats;
}

export const LiveStats: React.FC<LiveStatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Signals',
      value: stats.totalSignals.toLocaleString(),
      icon: Activity,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10'
    },
    {
      label: 'Active Observatories',
      value: stats.activeObservatories,
      icon: Telescope,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      label: 'Exoplanets Found',
      value: stats.exoplanetsDiscovered.toLocaleString(),
      icon: Globe,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      label: 'Current Observations',
      value: stats.currentObservations,
      icon: Radio,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      label: 'Anomalies Detected',
      value: stats.anomaliesDetected,
      icon: AlertTriangle,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {statItems.map((item) => (
        <div
          key={item.label}
          className={`${item.bgColor} rounded-lg p-4 border border-gray-700`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">{item.label}</p>
              <p className={`${item.color} text-2xl font-bold mt-1`}>
                {item.value}
              </p>
            </div>
            <item.icon className={`w-8 h-8 ${item.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
};