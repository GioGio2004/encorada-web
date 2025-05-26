'use client';

import { initialize, setVariable, getVariable, removeVariable, variableExists, clearVariables } from 'encorada';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the context type with all Encorada functions
type EncoradaContextType = {
  isInitialized: boolean;
  error: string | null;
  setVariable: typeof setVariable;
  getVariable: typeof getVariable;
  removeVariable: typeof removeVariable;
  variableExists: typeof variableExists;
  clearVariables: typeof clearVariables;
};

const EncoradaContext = createContext<EncoradaContextType | null>(null);

interface EncoradaProviderProps {
  children: ReactNode;
}

export function EncoradaProvider({ children }: EncoradaProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const key = process.env.ENCORADA_SECRET_KEY;
    
    if (!key) {
      setError('Missing secret key. Please set ENCORADA_SECRET_KEY in your .env.local file.');
      return;
    }

    initialize(key)
      .then(success => {
        if (success) {
          setIsInitialized(true);
        } else {
          setError('Failed to initialize Encorada');
        }
      })
      .catch(err => {
        console.error('Encorada initialization error:', err);
        setError(`Error initializing Encorada: ${err.message}`);
      });
  }, []);

  const contextValue: EncoradaContextType = {
    isInitialized,
    error,
    setVariable,
    getVariable,
    removeVariable,
    variableExists,
    clearVariables
  };

  return (
    <EncoradaContext.Provider value={contextValue}>
      {children}
    </EncoradaContext.Provider>
  );
}

export function useEncorada() {
  const context = useContext(EncoradaContext);
  
  if (!context) {
    throw new Error('useEncorada must be used within an EncoradaProvider');
  }
  
  return context;
}