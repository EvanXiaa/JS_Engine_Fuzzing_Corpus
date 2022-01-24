/*
 * Defines main class: owner of Sessions, Accounts, allEntities, scheduler
 */

var CACHE_LIFETIME = 15 * 60 * 1000;

function Server() {
	var fileServer = null;
	this.client = null;
	var Accounts = null;
	var Sessions = null;
	var commands = null;
	// this.getSessions = function(){
	// return Sessions;
	// };
};

// sconf - 觐眙桡 皴疴屦