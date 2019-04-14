import React from 'react';

export class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        return {error};
    }

    state = {error: null};

    componentDidCatch(error, info) {
        logger.error(error, info);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    Unhandled error in component: {this.state.error.toString()};
                </div>
            );
        }

        return this.props.children;
    }
}
