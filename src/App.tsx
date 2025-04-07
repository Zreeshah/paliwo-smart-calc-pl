
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import CenaPaliwa from "./pages/CenaPaliwa";
import PaliwaPremium from "./pages/PaliwaPremium";
import Diesel from "./pages/Diesel";
import LPG from "./pages/LPG";
import Hybryda from "./pages/Hybryda";
import EkonomicznaJazda from "./pages/EkonomicznaJazda";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/zastrzezenie-prawne" element={<Disclaimer />} />
            <Route path="/cena-paliwa" element={<CenaPaliwa />} />
            <Route path="/paliwa-premium" element={<PaliwaPremium />} />
            <Route path="/diesel" element={<Diesel />} />
            <Route path="/lpg" element={<LPG />} />
            <Route path="/hybryda" element={<Hybryda />} />
            <Route path="/ekonomiczna-jazda" element={<EkonomicznaJazda />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
