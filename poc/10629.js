/*
Source: 
*/

'use strict'
const { getHeapSnapshot } = require('v8')

async function liveHandler() {
	async function pickAndProcess() {
		do {
			await Promise.resolve()
		} while (true)
	}

	const all = []
	for (let i = 0; i < 4; i++) {
		all.push(pickAndProcess())
	}

	await Promise.all(all)  // no crash when removing this line but busy-loops
}

liveHandler()
getHeapSnapshot()  // calls isolate->GetHeapProfiler()->TakeHeapSnapshot()