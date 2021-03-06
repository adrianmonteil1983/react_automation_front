import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      console.log(error);
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    }
  
    render() {
        
      if (this.state.hasError) {
        console.log('error')
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
        return this.props.children; 

    }
  }

  export default ErrorBoundary;