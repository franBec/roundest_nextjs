"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { backendLanguageOptions } from "@/components/backend-language/backend-language-selector";

interface BackendLanguage {
  value: string;
  label: string;
}

interface BackendLanguageContextType {
  selectedBackendLanguage: BackendLanguage;
  setSelectedBackendLanguage: (backendLanguage: BackendLanguage) => void;
}

const BackendLanguageContext = createContext<
  BackendLanguageContextType | undefined
>(undefined);

export const BackendLanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedBackendLanguage, setSelectedBackendLanguage] =
    useState<BackendLanguage>(backendLanguageOptions[0]);

  return (
    <BackendLanguageContext.Provider
      value={{ selectedBackendLanguage, setSelectedBackendLanguage }}
    >
      {children}
    </BackendLanguageContext.Provider>
  );
};

export const useBackendLanguage = () => {
  const context = useContext(BackendLanguageContext);
  if (!context) {
    throw new Error(
      "useBackendLanguage must be used within a BackendLanguageProvider"
    );
  }
  return context;
};
