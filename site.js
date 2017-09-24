// Перечисление зависимостей:
var path = require('path');
var express = require('express');
var fs = require('fs');

function getFiles(dir){
  fileList = [];
  var files = fs.readdirSync(dir);
  for(var i in files){
    if(path.extname(files[i]) === ".mp3") {
      if (!files.hasOwnProperty(i)) continue;
      var name = dir+files[i];
      if (!fs.statSync(name).isDirectory()){
        fileList.push(name);
      }
    }
  }
  return fileList;
}
var arr = getFiles('./static/sounds/long_breaks/');
var file = fs.createWriteStream('./static/long_breaks.txt');
file.on('error', function(err) { console.log('err');});
arr.forEach(function(v) { file.write('/sounds/long_breaks/' + v.split('\\').pop().split('/').pop() + ';;'); });
file.end();

var arr = getFiles('./static/sounds/short_breaks/');
var file = fs.createWriteStream('./static/short_breaks.txt');
file.on('error', function(err) { console.log('err');});
arr.forEach(function(v) { file.write('/sounds/short_breaks/' + v.split('\\').pop().split('/').pop() + ';;'); });
file.end();

var arr = getFiles('./static/sounds/answers/');
var file = fs.createWriteStream('./static/answers.txt');
file.on('error', function(err) { console.log('err');});
arr.forEach(function(v) { file.write('/sounds/answers/' + v.split('\\').pop().split('/').pop() + ';;'); });
file.end();

var arr = getFiles('./static/sounds/before_the_game/');
var file = fs.createWriteStream('./static/before_the_game.txt');
file.on('error', function(err) { console.log('err');});
arr.forEach(function(v) { file.write('/sounds/before_the_game/' + v.split('\\').pop().split('/').pop() + ';;'); });
file.end();

var arr = getFiles('./static/sounds/after_the_game/');
var file = fs.createWriteStream('./static/after_the_game.txt');
file.on('error', function(err) { console.log('err');});
arr.forEach(function(v) { file.write('/sounds/after_the_game/' + v.split('\\').pop().split('/').pop() + ';;'); });
file.end();


// Описание настроек:
var staticSiteOptions = {
   portnum: 80, // слушать порт 80
   maxAge: 1000 * 60 * 1 // хранить страницы в кэше 
};

// Запуск сайта:
express().use(express.static(
   path.join(__dirname, 'static'),
   staticSiteOptions
)).listen(staticSiteOptions.portnum);

console.log("it works!");
console.log("http://127.0.0.1/");

