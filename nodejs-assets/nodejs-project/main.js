var rn_bridge = require('rn-bridge');
// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {
	rn_bridge.channel.send(msg);
} );

// Inform react-native node is initialized.
//rn_bridge.channel.send("Node was initialized.");
try {
	var rgbNode = require('./rgb_node');
	rn_bridge.channel.send("Success!.");
} catch (e) {
	rn_bridge.channel.send("Error:\n"+JSON.stringify(e));
}
