// Mixins need to be marked with React.createMixin (added in React 0.13) so
// that they can be tracked by the compiler pass.
var Mixin = React.createMixin({
  mixinMethod: function() {
    console.log("Mixin method running");
  }
});

// Does not use JSX since JSX compilation is assumed to take place before
// inputs are given to Plovr/the Closure Compiler.
var DemoCounter = React.createClass({
  displayName: "DemoCounter",
  mixins: [Mixin],
  getInitialState: function() {
    return {count: 0};
  },
  render: function() {
    this.mixinMethod();
    return React.createElement("div", null,
      "Count: ", this.state.count,
      React.createElement(
        "button", {onClick: this.increment.bind(this, 1)}, "Internal Increment")
    );
  },
  /**
   * @param {number} count
   */
  increment: function(count) {
    this.setState({count: this.state.count + count});
  }
});

// Unused component classes will be removed from the output, since the compiler
// knows that React.createClass does not have side effects.
var UnusedClass = React.createClass({
  displayName: "UnusedClass",
  render: function() {
    return React.createElement("div", null, "I am unused");
  }
});

/**
 * @constructor
 */
function SomeOtherType() {};
SomeOtherType.prototype.increment2 = function() {return false};

/** @type {DemoCounter} */ var counterInstance = React.render(
    React.createElement(DemoCounter),
    document.querySelector("#container"));

// Not necessarily what we would do in a production app, but demonstrates that
// methods on instantiated React elements can be called without warnings.
document.querySelector("#button").addEventListener(
  "click",
  function(e) {
    counterInstance.increment(1);
    counterInstance.increment("wrong parameter type");
    counterInstance.nonExistentMethod();
  });
