import { Component, ReactNode } from "react";
import ErrorView from "./views/Error";

interface ErrorBoundaryState {
  error: unknown;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(err: unknown) {
    return { error: err };
  }

  render() {
    if (this.state.error) {
      return <ErrorView error={this.state.error} />;
    }
    return this.props.children;
  }
}
