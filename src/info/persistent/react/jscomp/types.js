/**
 * @fileoverview Type annotations for the React library.
 *
 * Will be automatically included as a source (not externs) file by
 * ReactCompilerPass. The contents of this file should be inert (i.e. interfaces
 * and typedefs only) such that it compiles down to nothing.
 */

/**
 * @typedef {!Function}
 * @template T
 */
var ReactClass;

/**
 * @interface
 * @template T
 */
function ReactElement() {}

/**
 * @interface
 */
function ReactComponent() {}

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
ReactComponent.prototype.setState = function(nextState, callback) {};

/**
 * @return {Object}
 */
ReactComponent.prototype.getInitialState = function() {};

/**
 * Component lifecycle/delegate methods that may be implemented. Intentionally
 * does not include the context parameter that is passed to some methods, since
 * it's undocumented. Implementations can still add it (and it will not be
 * flagged as an error).
 *
 * @interface
 */
function ReactComponentLifecycle() {}

ReactComponentLifecycle.prototype = {
  /**
   * @return {void}
   */
  componentWillMount: function() {},
  /**
   * @return {void}
   */
  componentDidMount: function() {},
  /**
   * @param {Object} nextProps
   * @return {void}
   */
  componentWillReceiveProps: function(nextProps) {},
  /**
   * @param {Object} nextProps
   * @param {Object} nextState
   * @return {boolean}
   */
  shouldComponentUpdate: function(nextProps, nextState) {},
  /**
   * @param {Object} nextProps
   * @param {Object} nextState
   * @return {void}
   */
  componentWillUpdate: function(nextProps, nextState) {},
  /**
   * @param {Object} prevProps
   * @param {Object} prevState
   * @return {void}
   */
  componentDidUpdate: function(prevProps, prevState) {},
  /**
   * @return {void}
   */
  componentWillUnmount: function() {}
};

/**
 * @typedef {
 *   boolean|number|string|ReactElement|
 *   Array.<boolean>|Array.<number>|Array.<string>|Array.<ReactElement>
 * }
 */
var ReactChild;

/**
 * @interface
 */
function ReactStaticFunctions() {}

/**
 * @param {{render: function()}} specification
 * @return {ReactClass}
 */
ReactStaticFunctions.prototype.createClass = function(specification) {};

/**
 * @param {T} mixin
 * @return {T}
 * @template T
 */
ReactStaticFunctions.prototype.createMixin = function(mixin) {};

/**
 * @param {(ReactClass.<T>|string|number)} type
 * @param {Object=} props
 * @param {...ReactChild} children
 * @return {ReactElement.<T>}
 * @template T
 */
ReactStaticFunctions.prototype.createElement = function(type, props, children) {};

/**
 * @param {ReactElement.<T>} nextElement
 * @param {Element} container
 * @param {function()=} callback
 * @return {T}
 * @template T
 */
ReactStaticFunctions.prototype.render = function(nextElement, container, callback) {};
