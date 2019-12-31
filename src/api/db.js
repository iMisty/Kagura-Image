/* eslint-disable no-console */
const MongoClient = require('mongodb').MongoClient;

class Dbs{
  constructor(url,db,data){
    this.url = url;
    this.db = db;
    this.data = data;
  }

  insert(url,data){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
      if (err) throw err;
      const dbo = db;
      dbo.collection('test').insertOne(data,function(err,db){
        if (err) throw err;
        console.log('insert successed');
        db.close;
      });
    });
  }
  
  insertMany(url,data){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
      if (err) throw err;
      const dbo = db;
      dbo.collection('test').insertMany(data,function(err,db){
        if (err) throw err;
        console.log('insert successed');
        db.close;
      });
    });
  }

  find(url,db,condition){
    const dbs = db;
    MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
      if (err) throw err;
      const dbo = db.db(dbs);
      dbo.collection(db).find(condition).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        db.close;
      });
    });
  }

  update(url,db,condition,data){
    const dbs = db;
    MongoClient.connect(url,{useNewUrlParser: true},function(err,db){
      if (err) throw err;
      const dbo = dbs.db(db);
      const whereStr = condition;
      const updateStr = data;
      // eslint-disable-next-line no-unused-vars
      dbo.collection(dbs).updateOne(whereStr,updateStr,function(err,res){
        if (err) throw err;
        console.log('update successed');
        db.close;
      });
    });
  }

  a(){
    return
  }
}

let A = new Dbs();
A.a();