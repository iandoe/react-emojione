
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#62727a", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m30 26h4v32h-4z" }),
		React.createElement("path", { d: "m26 15.9h4v24.2h-4z", transform: "matrix(.7071-.7071.7071.7071-11.5983 27.9992)" }),
		React.createElement("circle", { cx: "32", cy: "32", r: "4" })
	),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#62727a", r: "3" })
);
};
