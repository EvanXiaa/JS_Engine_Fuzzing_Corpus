
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
var options = { weekday: 'short', month: 'numeric', day: 'numeric' };
console.log(new Intl.DateTimeFormat('fr-FR', options).format(date));

