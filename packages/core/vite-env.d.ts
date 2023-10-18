/// <reference types="vite/client" />

declare const APP_VERSION: string;

declare const FULL_APP_VERSION: string;

interface ImportMetaEnv {
  readonly VITE_LOCALIZATION_KEY: string;
  readonly VITE_LAUNCH_DARKLY_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
