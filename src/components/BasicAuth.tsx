import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { AUTH_CONFIG, isAuthenticated, setAuthenticated, logout } from '@/config/auth';

interface BasicAuthProps {
  children: React.ReactNode;
  username?: string;
  password?: string;
  title?: string;
  description?: string;
}

const BasicAuth: React.FC<BasicAuthProps> = ({
  children,
  username = AUTH_CONFIG.username,
  password = AUTH_CONFIG.password,
  title = AUTH_CONFIG.title || 'Accesso Richiesto',
  description = AUTH_CONFIG.description || 'Inserisci le credenziali per accedere al sito'
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [inputUsername, setInputUsername] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Controlla se l'utente è già autenticato
  useEffect(() => {
    setIsAuth(isAuthenticated());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simula un piccolo delay per l'autenticazione
    await new Promise(resolve => setTimeout(resolve, 500));

    if (inputUsername === username && inputPassword === password) {
      setAuthenticated();
      setIsAuth(true);
    } else {
      setError('Credenziali non valide. Riprova.');
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setInputUsername('');
    setInputPassword('');
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isAuth) {
    return (
      <div>
        {/* Pulsante di logout (se abilitato) */}
        {AUTH_CONFIG.enableLogoutButton && (
          <div className="fixed top-4 right-4 z-50">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="bg-white/90 backdrop-blur-sm"
            >
              Logout
            </Button>
          </div>
        )}
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-fitness-orange/10 to-fitness-orange/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-fitness-orange/10 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-fitness-orange" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                placeholder="Inserisci username"
                required
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="Inserisci password"
                  required
                  className="w-full pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-fitness-orange hover:bg-fitness-orange/90"
              disabled={isLoading}
            >
              {isLoading ? 'Autenticazione...' : 'Accedi'}
            </Button>
          </form>

          {/* Credenziali di default per sviluppo */}
          {/* {AUTH_CONFIG.showCredentialsInDev && process.env.NODE_ENV === 'development' && (
            <div className="mt-6 p-3 bg-gray-50 rounded-lg text-sm">
              <p className="font-medium text-gray-700 mb-1">Credenziali di sviluppo:</p>
              <p className="text-gray-600">Username: <code className="bg-gray-200 px-1 rounded">{username}</code></p>
              <p className="text-gray-600">Password: <code className="bg-gray-200 px-1 rounded">{password}</code></p>
            </div>
          )} */}
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicAuth;
