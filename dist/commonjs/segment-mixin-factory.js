"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = segmentMixinFactory;

function segmentMixinFactory(router) {
    return function (routeName, listener) {
        return {
            nodeListener: function nodeListener(toState, fromState) {
                listener.call(this, toState, fromState);
            },

            componentDidMount: function componentDidMount() {
                router.addNodeListener(routeName, this.nodeListener);
                router.registerComponent(routeName, this);
            },

            componentWillUnmount: function componentWillUnmount() {
                router.removeNodeListener(routeName, this.nodeListener);
                router.deregisterComponent(routeName, this);
            }
        };
    };
}
module.exports = exports["default"];