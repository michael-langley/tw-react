module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

interface Props {

}

const ${componentName} = (props: Props) => {
  const {foo} = props
  
  return (
    <div data-testid="${componentName}" className="foo-bar">{componentName}</div>
  )
};

export default ${componentName};

`,
  extension: `.tsx`,
});
