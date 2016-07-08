
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "M15.6,45L11,19h4l2.9,17.9L21.4,19H26l3.4,18.2L32.3,19h3.9l-4.7,26h-4.1l-3.8-19.4L19.8,45H15.6z" }),
		React.createElement("path", { d: "m46 41.3c-1.9 0-3.5-1.7-3.5-3.7v-11.2c0-2 1.6-3.7 3.5-3.7 1.9 0 3.5 1.7 3.5 3.7h3.5c0-4.1-3.1-7.4-7-7.4-3.9 0-7 3.3-7 7.4v11.1c0 4.1 3.1 7.4 7 7.4 3.9 0 7-3.3 7-7.4h-3.5c0 2.1-1.6 3.8-3.5 3.8" })
	)
);
};
