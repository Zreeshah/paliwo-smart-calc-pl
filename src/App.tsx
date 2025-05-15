
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Lazy load all pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CenaPaliwa = lazy(() => import("./pages/CenaPaliwa"));
const PaliwaPremium = lazy(() => import("./pages/PaliwaPremium"));
const Diesel = lazy(() => import("./pages/Diesel"));
const LPG = lazy(() => import("./pages/LPG"));
const Hybryda = lazy(() => import("./pages/Hybryda"));
const EkonomicznaJazda = lazy(() => import("./pages/EkonomicznaJazda"));

// Loading component
const PageLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="text-brand-green animate-pulse">Ładowanie...</div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Reduce unnecessary network requests
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
