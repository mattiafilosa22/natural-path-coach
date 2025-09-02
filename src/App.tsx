import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiebotManager } from "@/components/CookiebotManager";
import BasicAuth from "@/components/BasicAuth";
import { AUTH_CONFIG } from "@/config/auth";
import { useWebVitals } from "@/hooks/use-web-vitals";
import Funnel from "./pages/Funnel";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/funnel" element={<Funnel />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  // Monitor Web Vitals for SEO
  useWebVitals();

  return (
    <QueryClientProvider client={queryClient}>
      <CookiebotManager>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {AUTH_CONFIG.enabled ? (
            <BasicAuth>
              <AppRoutes />
            </BasicAuth>
          ) : (
            <AppRoutes />
          )}
        </TooltipProvider>
      </CookiebotManager>
    </QueryClientProvider>
  );
};

export default App;
