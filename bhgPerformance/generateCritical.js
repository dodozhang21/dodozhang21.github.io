const critical = require('critical');
critical.generate({
  inline: true,
  base: 'project/',
  src: 'project1.html',
  dest: 'project1-critical.html',
  width: 375,
  height: 667,
});