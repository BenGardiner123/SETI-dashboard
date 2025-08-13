export interface SetiSignal {
  id: string;
  frequency: number;
  strength: number;
  timestamp: Date;
  coordinates: {
    ra: number; // Right Ascension
    dec: number; // Declination
  };
  duration: number;
  source?: string;
  anomaly?: boolean;
}

export interface ExoplanetData {
  name: string;
  discoveryDate: Date;
  starName: string;
  distance: number; // light years
  radius: number; // Earth radii
  mass: number; // Earth masses
  temperature: number; // Kelvin
  habitableZone: boolean;
}

export interface RadioTelescopeData {
  telescope: string;
  timestamp: Date;
  frequency: number;
  bandwidth: number;
  signalToNoise: number;
  coordinates: {
    ra: number;
    dec: number;
  };
  data: number[];
}

export interface SetiStats {
  totalSignals: number;
  activeObservatories: number;
  exoplanetsDiscovered: number;
  currentObservations: number;
  anomaliesDetected: number;
  lastUpdate: Date;
}