ErrorBoundaries
---------------

In React 16 concpet of ErrorBoundary is introduced to provide a way for error handling. In react 16, a component which is wrapped in ErrorBoundary can throw an error and ErrorBoundary will catch that an show the common error component.

<h1>How to do it in Prior version of React<h1>

The concept is very simple:
- Create a component and name it ErrorBoundary
  ```import React from react;
  import PropTypes from prop-types;

  class ErrorBoundary extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          if (this.props.hasError) {
              return (<div class="error">
                  <div>
                      Some Error Message or Error control
                  </div>
              </div>);
          }
          return this.props.children;
      }
  }

  ErrorBoundary.propTypes = {
      children: PropTypes.object
  };

  export default ErrorBoundary;```

- In your view wrap all the components inside ErrorBoundary
- Manage error from the top view, if there is an error then the view should send property hasError=true




