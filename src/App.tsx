import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiebotManager } from "@/components/CookiebotManager";
import Funnel from "./pages/Funnel";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import BasicAuth from "@/components/BasicAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CookiebotManager>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BasicAuth>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/funnel" element={<Funnel />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BasicAuth>
      </TooltipProvider>
    </CookiebotManager>
  </QueryClientProvider>
);

export default App;
