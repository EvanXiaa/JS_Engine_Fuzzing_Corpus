// |jit-test| allow-oom; skip-if: !('oomTest' in this)
oomTest(function () {
  newGlobal({
    sameZoneAs: this
  });
});
