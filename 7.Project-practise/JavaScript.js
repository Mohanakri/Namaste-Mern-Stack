


getWeather(city) {
  const ab = new Promise((resolve,reject)=>{
    if(city=='Mumbai'){
      resolve('Weather in Mumbai is sunny');
    }
    else
      reject('City Paris not found');
  })
}

ab 
 .then(result => {
  console.log('23c)
 })
 .then(result1 => {
  retconsole.log('Enjoy your day!))
 .catch(result2 => console.log('error bro'));