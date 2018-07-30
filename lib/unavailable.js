module.exports = function loader() {};
module.exports.pitch = function pitch(/* remainingRequest */) {
  if (this.cacheable) {
    this.cacheable();
  }

  return [
    'var React = require("react");',
    'var createClass = require("create-react-class");',
    'var desc = {',
    '	loadComponent: function(callback) {}',
    '};',
    `var mixinReactProxy = require(${JSON.stringify(
      require.resolve('./mixinReactProxy')
    )});`,
    'mixinReactProxy(React, desc);',
    'module.exports = createClass(desc);',
    'module.exports.Mixin = desc;',
  ].join('\n');
};
