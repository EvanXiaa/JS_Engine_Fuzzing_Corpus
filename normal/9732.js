const EXPORTED_SYMBOLS = [ 'PREFS_BRANCH', 'MODE_RDONLY', 'MODE_WRONLY', 'MODE_CREATE', 'MODE_APPEND', 'MODE_TRUNCATE', 'PERMS_FILE', 
                           'PERMS_PASSFILE', 'PERMS_DIRECTORY'];

const PREFS_BRANCH = "extensions.pmog.";

const MODE_RDONLY   = 0x01;
const MODE_WRONLY   = 0x02;
const MODE_CREATE   = 0x08;
const MODE_APPEND   = 0x10;
const MODE_TRUNCATE = 0x20;

const PERMS_FILE      = 0644;
const PERMS_PASSFILE  = 0600;
const PERMS_DIRECTORY = 0755;