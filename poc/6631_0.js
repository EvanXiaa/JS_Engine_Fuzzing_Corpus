
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
    format(0.5);
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
    for (var ijjkkk = 0; ijjkkk < 100000; ++ijjkkk) {
        var FPAn = format(3);
    }
    format(3);
    '4th';
    format(4);
    '11th';
    format(11);
    '21st';
    format(21);
    '103rd';
    format(103);
    JSON.stringify(759250124);
    pr = new Intl.PluralRules('ar');
    suffixes = null;
    var awYX = Date;
    'zero';
    pr.select(0);
    var TYHh = Reflect;
    'one';
    pr.select(1);
    'two';
    pr.select(2);
    'few';
    pr.select(3);
    var kxjR = 1073741825 ** -2147483648;
    format(-9007199254740994);
    'many';
    var CHkP = 1200 >= -1.7976931348623157e+308;
    pr.select(11);
    'other';
    pr.select(100);
    'other';
    pr.select(1.5);
    format(-1.7976931348623157e+308);
}


