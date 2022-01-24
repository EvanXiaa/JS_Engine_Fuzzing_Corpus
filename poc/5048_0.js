
new Date().toLocaleString('ja-JP');
// "‎2018‎年‎4‎月‎26‎日‎ ‎11‎:‎37‎:‎33"


new Date().toLocaleString('ja-JP', { day: 'numeric', month: 'short', year: 'numeric' });
// "‎2018‎年‎4‎月‎26‎日"

new Date().toLocaleString('ja-JP', { month: 'short', year: 'numeric' });
// "‎2018‎年‎4‎月"


new Date().toLocaleString('ja-JP', { day: 'numeric', month: 'short' });
// "‎4‎26‎日"

new Date().toLocaleString('ja-JP', { month: 'short' });
// "‎4"


new Date().toLocaleString('ja-JP', { day: 'numeric', month: 'short' });
// "‎4月‎26‎日"

new Date().toLocaleString('ja-JP', { month: 'short' });
// "‎4月"


new Date().toLocaleString('ja-JP');
// "2018/4/26 11:49:10"

new Date().toLocaleString('ja-JP', { day: 'numeric', month: 'short', year: 'numeric' });
// "2018年4月26日"

new Date().toLocaleString('ja-JP', { month: 'short', year: 'numeric' });
// "2018年4月"

new Date().toLocaleString('ja-JP', { day: 'numeric', month: 'short' });
// "4月26日"

new Date().toLocaleString('ja-JP', { month: 'short' });
// "4月"

