/*
Source: 
*/
const inspector = require('inspector');

function post(session, action, params) {
	return new Promise((resolve, reject) => {
		session.post(action, params, (err, data) => {
			if (err) {
				return reject(err);
			}
			resolve(data);
		});
	});
}

async function main() {
	const session = new inspector.Session();
	session.connect();
	await post(session, 'HeapProfiler.enable');
	await post(session, 'HeapProfiler.startSampling', {
		samplingInterval: 32768
	});

	// Take the snapshot
	const chunks = [];

	session.on('HeapProfiler.addHeapSnapshotChunk', data => {
		chunks.push(data.params.chunk);
	});
	await post(session, 'HeapProfiler.takeHeapSnapshot', {
		reportProgress: false
	});

	const snapshot = chunks.join('');
	console.log(snapshot);
}

main();