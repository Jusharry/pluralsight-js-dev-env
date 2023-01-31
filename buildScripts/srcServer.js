//let express = require('express');
//let path = require('path');
//let open = require('open');

/* using a Transpiler like Babel we can import the dependcies we need
rather than creating variables*/

import express from "express";
import path from "path";
import open from "open";
//Add webpack bundler
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 80; //using ngrok
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else{
    open(`http:localhost:${port}`)
  }
});
