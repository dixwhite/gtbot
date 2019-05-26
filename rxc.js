var app = req("discord.js");
var cl = new app.Client();

cl.n('ready', () => console.log('ready'));

cl.l()
