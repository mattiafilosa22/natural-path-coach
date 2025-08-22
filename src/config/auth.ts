// Configurazione per BasicAuth

export interface AuthConfig {
  enabled: boolean;
  username: string;
  password: string;
  title?: string;
  description?: string;
  sessionKey?: string;
  // Opzioni avanzate
  enableLogoutButton?: boolean;
  showCredentialsInDev?: boolean;
  sessionTimeout?: number; // in millisecondi
}

export const AUTH_CONFIG: AuthConfig = {
  enabled: true, // Cambia a true per attivare l'autenticazione
  username: 'marcoDelMoro',
  password: 'Test123!',
  title: 'Marco Del Moro',
  description: 'Accesso riservato all\'area coaching',
  sessionKey: 'natural-path-coach-auth',
  enableLogoutButton: true,
  showCredentialsInDev: true,
  sessionTimeout: 24 * 60 * 60 * 1000 // 24 ore
};

/**
 * Utility per verificare se l'autenticazione è abilitata
 */
export const isAuthEnabled = (): boolean => {
  return AUTH_CONFIG.enabled;
};

/**
 * Utility per verificare se l'utente è autenticato
 */
export const isAuthenticated = (): boolean => {
  if (!AUTH_CONFIG.enabled) return true;

  const authData = sessionStorage.getItem(AUTH_CONFIG.sessionKey || 'auth');
  if (!authData) return false;

  try {
    const parsedData = JSON.parse(authData);
    const now = Date.now();

    // Controlla se la sessione è scaduta
    if (AUTH_CONFIG.sessionTimeout && parsedData.timestamp) {
      if (now - parsedData.timestamp > AUTH_CONFIG.sessionTimeout) {
        logout();
        return false;
      }
    }

    return parsedData.authenticated === true;
  } catch {
    return authData === 'authenticated'; // Backward compatibility
  }
};

/**
 * Utility per fare login
 */
export const setAuthenticated = (): void => {
  const authData = {
    authenticated: true,
    timestamp: Date.now()
  };
  sessionStorage.setItem(AUTH_CONFIG.sessionKey || 'auth', JSON.stringify(authData));
};

/**
 * Utility per fare logout
 */
export const logout = (): void => {
  sessionStorage.removeItem(AUTH_CONFIG.sessionKey || 'auth');
};
