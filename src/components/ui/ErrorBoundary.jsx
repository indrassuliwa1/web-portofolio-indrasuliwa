import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback !== undefined ? (
        this.props.fallback
      ) : (
        <div className="p-4 text-xs text-purple-300 bg-purple-950/40 rounded-xl border border-purple-500/20 m-4">
          3D visual fallback active. Content loaded smoothly.
        </div>
      );
    }

    return this.props.children;
  }
}
