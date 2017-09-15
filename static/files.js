function playlists(){
  var fs = require('fs');

  function getFiles(dir){
    fileList = [];
    var files = fs.readdirSync(dir);
    for(var i in files){
      if (!files.hasOwnProperty(i)) continue;
      var name = dir+files[i];
      if (!fs.statSync(name).isDirectory()){
        fileList.push(name);
      }
    }
    return fileList;
  }
  var arr = getFiles('./sounds/long_breaks/');
  var file = fs.createWriteStream('./long_breaks.txt');
  file.on('error', function(err) { console.log('err');});
  arr.forEach(function(v) { file.write(v + ','); });
  file.end();

  var arr = getFiles('./sounds/short_breaks/');
  var file = fs.createWriteStream('./short_breaks.txt');
  file.on('error', function(err) { console.log('err');});
  arr.forEach(function(v) { file.write(v + ','); });
  file.end();

  var arr = getFiles('./sounds/answers/');
  var file = fs.createWriteStream('./answers.txt');
  file.on('error', function(err) { console.log('err');});
  arr.forEach(function(v) { file.write(v + ','); });
  file.end();
};

module.exports = playlists;