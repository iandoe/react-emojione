
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M62,23H39.1L32,2l-7.1,21H2l18.5,13l-7.1,21L32,44l18.5,13l-7.1-21L62,23z", fill: "#ffce31" }),
	React.createElement(
		"g",
		{ fill: "#ffdf85" },
		React.createElement("path", { d: "m46.2 20.3l4-11.4-10.5 7.2 1.5 4.2z" }),
		React.createElement("path", { d: "m27.9 50l4.1 12 4.1-12-4.1-2.8z" }),
		React.createElement("path", { d: "m50.7 34.3l-3.8 2.6 1.6 4.8h12.9z" }),
		React.createElement("path", { d: "m24.3 16.1l-10.5-7.2 4 11.4h5z" }),
		React.createElement("path", { d: "m13.3 34.3l-10.7 7.4h12.9l1.6-4.8z" })
	)
);
};
