
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'

// Use lazy loading for App component
const App = lazy(() => import('./App.tsx'))

// Create root element
const rootElement = document.getElementById("root");

// Only proceed if we found the root element
if (rootElement) {
  createRoot(rootElement).render(
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Ładowanie...</div>}>
      <App />
    </Suspense>
  );

  // Signal that the app has loaded successfully
  if (window.onAppLoaded && typeof window.onAppLoaded === 'function') {
    window.onAppLoaded();
  }
} else {
  console.error("Could not find root element to mount React app");
}
