import React from 'react';
import { useCookiebot } from '@/hooks/use-cookiebot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const CookieStatus: React.FC = () => {
  const { isLoaded, consent, hasConsented, showDialog, renewConsent } = useCookiebot();

  if (!isLoaded) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Cookie Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Cookiebot loading...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Cookie Status
          <Badge variant={hasConsented ? "default" : "secondary"}>
            {hasConsented ? "Configured" : "Pending"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex justify-between">
            <span>Necessary:</span>
            <Badge variant={consent.necessary ? "default" : "destructive"}>
              {consent.necessary ? "✓" : "✗"}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Preferences:</span>
            <Badge variant={consent.preferences ? "default" : "destructive"}>
              {consent.preferences ? "✓" : "✗"}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Statistics:</span>
            <Badge variant={consent.statistics ? "default" : "destructive"}>
              {consent.statistics ? "✓" : "✗"}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Marketing:</span>
            <Badge variant={consent.marketing ? "default" : "destructive"}>
              {consent.marketing ? "✓" : "✗"}
            </Badge>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={showDialog} variant="outline" size="sm">
            Configure
          </Button>
          <Button onClick={renewConsent} variant="outline" size="sm">
            Renew
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
