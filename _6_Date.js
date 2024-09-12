

 let Mydate = new Date();
 console.log(Mydate);
 console.log(Mydate.toString());
 console.log(Mydate.toDateString());
 console.log(Mydate.getDay());
 console.log(Mydate.toLocaleDateString('en-IN'));

 let CreateMydate = new Date(2024,8,7,20,58);
 console.log(CreateMydate.toString('en-IN'));
 console.log(CreateMydate.toLocaleString('en-IN'));


 let Cdate = new Date("07-08-2024");

 let CurrTime = Date.now();

 console.log(Cdate.getTime());
 console.log(CurrTime);
 console.log(Math.floor(Date.now()/1000));  // convert into seconds