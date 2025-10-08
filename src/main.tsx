import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

class ErrorBoundary extends React.Component<React.PropsWithChildren, { hasError: boolean }> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Log to console; integrate with monitoring later if needed
    console.error("Uncaught error in React tree:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Something went wrong.</h1>
            <p style={{ marginTop: 8 }}>Please refresh the page and try again.</p>
          </div>
        </div>
      );
    }
    return this.props.children as React.ReactNode;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
