
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#ed4c5c" },
		React.createElement("path", { d: "M52.4,10C47,5,39.9,2,32,2s-15,3-20.4,8H52.4z" }),
		React.createElement("path", { d: "m11.6 54c5.4 5 12.5 8 20.4 8s15-3 20.4-8h-40.8" })
	),
	React.createElement("path", { d: "m2 32c0 4.3.9 8.3 2.5 12h55c1.6-3.7 2.5-7.7 2.5-12s-.9-8.3-2.5-12h-55c-1.6 3.7-2.5 7.7-2.5 12", fill: "#2a5f9e" }),
	React.createElement(
		"g",
		{ fill: "#f9f9f9" },
		React.createElement("path", { d: "m11.6 54h40.7c3-2.8 5.5-6.2 7.1-10h-55c1.8 3.8 4.2 7.2 7.2 10" }),
		React.createElement("path", { d: "m52.4 10h-40.8c-3 2.8-5.5 6.2-7.1 10h55c-1.7-3.8-4.1-7.2-7.1-10" })
	)
);
};
