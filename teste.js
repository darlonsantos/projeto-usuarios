

const data =  new Date();

//let td = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+' '+data.getHours()+':'+data.getMinutes();



console.log(data);
// console.log(data.getTime());
// console.log(data.getSeconds());
// console.log(data.getDay());
// console.log(data.getMonth());
// console.log(data.getUTCDay());
console.log(data.getFullYear())


const dataInicial =  data.getDate()+'/'+ data.getFullYear();
const horas =  data.getHours() +':'+ data.getMinutes()



console.log(`Ano: ${dataInicial}, Horas: ${horas}`);


function imprimitDataHoras(dt){
   
   let data =  dt.getDate()+'/'+dt.getFullYear();
   let horas =  dt.getHours()+':'+dt.getMinutes()   
   console.log(`Horas: ${horas}, Data: ${data}`);

}
  
imprimitDataHoras(data)

teste('darlon')