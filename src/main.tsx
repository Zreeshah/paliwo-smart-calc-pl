
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'

// Use lazy loading for App component
const App = lazy(() => import('./App.tsx'))

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="flex h-screen items-center justify-center">Ładowanie...</div>}>
    <App />
  </Suspense>
);
