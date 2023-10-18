import React, { useEffect, useState } from "react";
import { tx, t, IMemoryCache } from "@transifex/native";

type Locale = "en" | "fr";

interface LocalizationLoaderProps {
  filterTags?: string;
  locale: Locale;
  children: React.ReactNode;
}

type AdditionalOptions = {
  filterStatus?: "reviewed" | "proofread" | "finalized";
  cache?: IMemoryCache;
};

const localizationContexts = {
  demographicsSDK: "demographics_sdk",
};

const localizationTags = {
  demographicsSDK: "demographics_sdk",
};

const LocalizationLoader = ({ filterTags, locale, children }: LocalizationLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const additionalOptions: AdditionalOptions = {};

    if (import.meta.env.MODE !== "production") {
      additionalOptions.cache = undefined;
    }

    tx.init({
      token: import.meta.env.VITE_LOCALIZATION_KEY,
      filterTags,
      ...additionalOptions,
    });
  }, [filterTags]);

  useEffect(() => {
    tx.setCurrentLocale(locale).finally(() => {
      setIsLoading(false);
    });
  }, [locale]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
};

export { LocalizationLoader, t, localizationContexts, localizationTags };
