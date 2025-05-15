
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './index.css'

// Use lazy loading for App component
const App = lazy(() => import('./App.tsx'))

// Create root element
const rootElement = document.getElementById("root");

// Only proceed if we found the root element
if (rootElement) {
  const app = (
    <BrowserRouter>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Ładowanie...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  );

  // Use hydration for SSR in production
  if (import.meta.env.PROD) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }

  // Signal that the app has loaded successfully
  if (window.onAppLoaded && typeof window.onAppLoaded === 'function') {
    window.onAppLoaded();
  }
} else {
  console.error("Could not find root element to mount React app");
}
