
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#62727a", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m30 6h4v32h-4z" }),
		React.createElement("path", { d: "M27 27.9 30.6 26 43 46.1 39.4 48z" }),
		React.createElement("circle", { cx: "32", cy: "32", r: "4" })
	),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#62727a", r: "3" })
);
};
