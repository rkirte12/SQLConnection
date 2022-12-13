const {createPool} = require('mysql')

const con = createPool({
  host: "localhost",
  user: "root",
  password: ""

});



con.getConnection((err)=>{
  if (err) throw err;
  console.log("Connected!")
})

// // con.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
// // });