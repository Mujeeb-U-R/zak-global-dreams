import React from 'react';
import ReactDOM from 'react-dom/client';
// Grab everything from the router file as a module object
import * as RouterModule from './src/router';
// @ts-ignore
import './src/styles.css';

const App = () => {
  // Dynamically look for the router instance inside the module object
  const router = (RouterModule as any).router || (RouterModule as any).default;
  
  // Extract the raw layout component from the router tree setup
  const TargetComponent = router?.options?.routeTree?.options?.component || 
                          router?.routeTree?.options?.component;

  if (!TargetComponent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white font-sans">
        <p className="text-sm tracking-widest uppercase text-amber-400">Loading ZAK Consultants Portal...</p>
      </div>
    );
  }

  return <TargetComponent />;
};

const rootElement = document.getElementById('root');

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}