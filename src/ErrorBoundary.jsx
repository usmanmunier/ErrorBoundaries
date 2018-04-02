import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.hasError) {
            return (<div class="error">
                <div>
                    ## Some Error Message or Error control
                </div>
            </div>);
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object
};

export default ErrorBoundary;
