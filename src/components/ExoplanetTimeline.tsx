import React from 'react';
import { ExoplanetData } from '../types/seti';
import { Telescope, Globe } from 'lucide-react';

interface ExoplanetTimelineProps {
  exoplanets: ExoplanetData[];
}

export const ExoplanetTimeline: React.FC<ExoplanetTimelineProps> = ({ exoplanets }) => {
  const sortedPlanets = [...exoplanets].sort((a, b) => 
    b.discoveryDate.getTime() - a.discoveryDate.getTime()
  ).slice(0, 5);

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-green-800">
      <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5" />
        Recent Exoplanet Discoveries
      </h3>
      <div className="space-y-4">
        {sortedPlanets.map((planet, index) => (
          <div key={planet.name} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex-shrink-0">
              <div className={`w-3 h-3 rounded-full ${planet.habitableZone ? 'bg-green-400' : 'bg-blue-400'}`} />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium">{planet.name}</h4>
                  <p className="text-gray-400 text-sm">
                    Host: {planet.starName} • {planet.distance.toFixed(1)} ly away
                  </p>
                </div>
                <span className="text-xs text-gray-500">
                  {planet.discoveryDate.getFullYear()}
                </span>
              </div>
              <div className="mt-2 flex gap-4 text-xs text-gray-400">
                <span>R: {planet.radius.toFixed(1)}⊕</span>
                <span>M: {planet.mass.toFixed(1)}⊕</span>
                <span>T: {planet.temperature.toFixed(0)}K</span>
                {planet.habitableZone && (
                  <span className="text-green-400">Habitable Zone</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};