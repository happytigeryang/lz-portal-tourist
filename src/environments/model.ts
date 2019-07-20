import { NgModuleRef } from '@angular/core';

export interface Environment {
  production: boolean;
  mpsApi: string;
  microApi: string;
  cdn?: string;
  googleTrackingId: string;
  firebaseOptions: FirebaseOptions;
  ssoConfig: SsoConfig;
}

export interface FirebaseOptions {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  publicVapidKey: string;
}

export interface SsoConfig {
  authority: string;
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  userStore?: any;
  post_logout_redirect_uri?: string;
  automaticSilentRenew?: boolean;
  silent_redirect_uri?: string;
  accessTokenExpiringNotificationTime?: number;
}
