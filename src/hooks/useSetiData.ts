import { useState, useEffect, useCallback } from 'react';
import { SetiSignal, ExoplanetData, RadioTelescopeData, SetiStats } from '../types/seti';
import { setiDataService } from '../services/nasaApi';

export const useSetiData = () => {
  const [signals, setSignals] = useState<SetiSignal[]>([]);
  const [exoplanets, setExoplanets] = useState<ExoplanetData[]>([]);
  const [radioData, setRadioData] = useState<RadioTelescopeData[]>([]);
  const [stats, setStats] = useState<SetiStats>({
    totalSignals: 0,
    activeObservatories: 0,
    exoplanetsDiscovered: 0,
    currentObservations: 0,
    anomaliesDetected: 0,
    lastUpdate: new Date()
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = useCallback(async () => {
    try {
      const [newSignals, newExoplanets, newRadioData, newStats] = await Promise.all([
        setiDataService.fetchLiveSetiData(),
        setiDataService.fetchExoplanetData(),
        setiDataService.fetchRadioTelescopeData(),
        setiDataService.getSetiStats()
      ]);

      setSignals(newSignals);
      setExoplanets(newExoplanets);
      setRadioData(newRadioData);
      setStats(newStats);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateSignals = useCallback(async () => {
    try {
      const newSignals = await setiDataService.fetchLiveSetiData();
      const newStats = await setiDataService.getSetiStats();
      setSignals(newSignals);
      setStats(newStats);
    } catch (err) {
      console.error('Failed to update signals:', err);
    }
  }, []);

  const updateRadioData = useCallback(async () => {
    try {
      const newRadioData = await setiDataService.fetchRadioTelescopeData();
      setRadioData(newRadioData);
    } catch (err) {
      console.error('Failed to update radio data:', err);
    }
  }, []);

  useEffect(() => {
    fetchAllData();

    // Set up autonomous data fetching
    const signalInterval = setInterval(updateSignals, 5000); // Every 5 seconds
    const radioInterval = setInterval(updateRadioData, 3000); // Every 3 seconds
    const fullUpdateInterval = setInterval(fetchAllData, 60000); // Every minute

    return () => {
      clearInterval(signalInterval);
      clearInterval(radioInterval);
      clearInterval(fullUpdateInterval);
    };
  }, [fetchAllData, updateSignals, updateRadioData]);

  return {
    signals,
    exoplanets,
    radioData,
    stats,
    isLoading,
    error,
    refetch: fetchAllData
  };
};