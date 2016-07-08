
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("circle", { cx: "19.5", cy: "24.8", fill: "#fff", r: "10" }),
	React.createElement("circle", { cx: "19.5", cy: "24.8", fill: "#664e27", r: "3.5" }),
	React.createElement("circle", { cx: "44.5", cy: "24.8", fill: "#fff", r: "10" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "44.5", cy: "24.8", r: "3.5" }),
		React.createElement("path", { d: "m47.7 44c-1.7-3.6-5.9-6-15.7-6-9.8 0-14 2.4-15.7 6-.9 1.9.4 5 .4 5 1.6 3.9 1.4 5 15.3 5 13.9 0 13.6-1.1 15.3-5 0 0 1.3-3.1.4-5" })
	),
	React.createElement("path", { d: "m43.4 43c.1-.3 0-.6-.2-.8 0 0-2.5-2.2-11.1-2.2s-11.1 2.2-11.1 2.2c-.2.2-.3.5-.2.8l.2.6c.1.3.4.5.7.5h21c.3 0 .6-.2.7-.5v-.6", fill: "#fff" }),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m50.2 13.5c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.4-1 2-1.4 1.7" }),
		React.createElement("path", { d: "m25.5 10.2c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.1.2 2.3-.4 2.2" })
	)
);
};