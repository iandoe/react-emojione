
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,62c16.6,0,30-13.4,30-30H2C2,48.6,15.4,62,32,62z", fill: "#f9f9f9" }),
	React.createElement("path", { d: "M32,2C15.4,2,2,15.4,2,32h60C62,15.4,48.6,2,32,2z", fill: "#c94747" })
);
};