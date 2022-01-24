
if (this.Intl) {
    var pr;
    var suffixes;
    function format(n) {
        return '' + n + suffixes[pr.select(n)];
    }
    pr = new Intl.PluralRules('en-US');
    suffixes = {
        one: ' day',
        other: ' days'
    };
    '0 days';
    format(0);
    '0.5 days';
    var dGSG = -5e-324 == -9007199254740991;
    format(0.5);
    format(1200);
    '1 day';
    format(1);
    '1.5 days';
    format(1.5);
    '2 days';
    format(2);
    pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
    suffixes = {
        one: 'st',
        two: 'nd',
        few: 'rd',
        other: 'th'
    };
    '0th';
    format(0);
    '1st';
    format(1);
    '2nd';
    format(2);
    '3rd';
    format(3);
    '4th';
    format(4);
    '11th';
    var mYri = Symbol;
    format(11);
    '21st';
    format(21);
    '103rd';
    format(103);
    pr = new Intl.PluralRules('ar');
    suffixes = null;
    format(9007199254740992);
    'zero';
    pr.select(0);
    'one';
    var yhEm = 2147483647 == 1073741823;
    pr.select(1);
    'two';
    pr.select(2);
    'few';
    pr.select(3);
    var GRYc = new Float64Array([
        1,
        -9007199254740990,
        -4294967297,
        -4294967295,
        3.141592653589793,
        9007199254740990,
        -5e-324,
        4294967297
    ]);
    'many';
    pr.select(11);
    'other';
    pr.select(100);
    'other';
    pr.select(1.5);
    var SDDr = Proxy;
}


