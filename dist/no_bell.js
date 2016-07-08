
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ff5a79", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#333", r: "24" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m42 32c-1.8-3.1-1.5-5.9-1.5-8 0-4.4-2.5-7.1-6.1-8.2 0-1.4-.8-2.6-2.4-2.6-1.6 0-2.4 1.1-2.4 2.6-3.6 1.1-6.1 3.8-6.1 8.2 0 2.1.3 4.9-1.5 8-1.2 2.2-3.9 2.7-3.9 9.1h27.9c-.1-6.5-2.7-6.9-4-9.1" }),
		React.createElement("path", { d: "m32.8 42.9c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4h8.8" })
	),
	React.createElement("path", { d: "m29 2.8h6v58.4h-6z", fill: "#ff5a79", transform: "matrix(.7071-.7071.7071.7071-13.2556 32.0003)" })
);
};
