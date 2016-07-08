
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#62727a", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("circle", { cx: "32", cy: "32", r: "4" }),
		React.createElement("path", { d: "m30 26h4v32h-4z" }),
		React.createElement("path", { d: "m23.9 26h24.2v4h-24.2z", transform: "matrix(.7067-.7075.7075.7067-9.2498 33.6847)" })
	),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#62727a", r: "3" })
);
};
