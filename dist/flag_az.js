
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,2C18.9,2,7.8,10.4,3.7,22h56.6C56.2,10.4,45.1,2,32,2z", fill: "#428bc1" }),
	React.createElement("path", { d: "M32,62c13.1,0,24.2-8.3,28.3-20H3.7C7.8,53.7,18.9,62,32,62z", fill: "#83bf4f" }),
	React.createElement("path", { d: "M3.7,22C2.6,25.1,2,28.5,2,32s0.6,6.9,1.7,10h56.6c1.1-3.1,1.7-6.5,1.7-10s-0.6-6.9-1.7-10H3.7z", fill: "#ed4c5c" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m31.6 40.2c-4.5 0-8.2-3.7-8.2-8.2 0-4.5 3.7-8.2 8.2-8.2 1.1 0 2.1.2 3 .6-1.6-1.2-3.6-2-5.8-2-5.3 0-9.5 4.3-9.5 9.6 0 5.3 4.3 9.6 9.5 9.6 2.2 0 4.2-.7 5.8-2-.9.4-1.9.6-3 .6" }),
		React.createElement("path", { d: "m40.4 33.4l-2.2 1.5 1.4-2.3-2.6-.6 2.6-.6-1.5-2.2 2.3 1.4.6-2.6.6 2.6 2.2-1.5-1.4 2.3 2.6.6-2.6.6 1.5 2.2-2.3-1.4-.6 2.6z" })
	)
);
};
