var express = require('express');
var router = express.Router();
var fs = require('fs')
var url = require('url')
const DATA = require('../model/student')

const mongoose = require('mongoose');


/* GET home page. */
router.get('/',  async function(req, res, next) {
  let initialVal = {}
  if(req.query.editno ){
    initialVal = await DATA.findById(req.query.editno)
  } 
  const student = await DATA.find()
  res.render('result',{alldata : student , values : initialVal, eid : req.query.editno });
});


router.get('/detail',  async function(req, res ,next) {
  console.log("detail",req.query.no);

  const alldata = await  DATA.findById(req.query.no)
  // console.log(alldata);
  
  res.render('detail',{ data : alldata });
  
});


router.post('/add', async function(req, res, next) {
  console.log("updateid",  req.body.updateid);
  if(req.body.updateid){
      await DATA.findByIdAndUpdate(req.body.updateid,req.body)
  }else{
  // data.push(req.body)
  await DATA.create(req.body) 
  }
  // fs.writeFileSync("./data.json",JSON.stringify(data),'utf-8')
  res.redirect('/');
});
router.get('/delet', async function(req, res, next) {
  console.log(req.query.no);
  await DATA.findByIdAndDelete(req.query.no)
  // fs.writeFileSync("./data.json",JSON.stringify(data),'utf-8')
  res.redirect('/');
});
module.exports = router;
