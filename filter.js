import vue from 'vue';

let getType=function(data){
  let fn=Object.prototype.toString;
  getType=function(data){
    return fn.call(data).split(' ')[1].slice(0,-1).toLowerCase();
  }
  return getType(data);
}
const filters={
  toThousandFilter(num,unit) {
    let result=(+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
    if(unit){
      return result+unit;
    }else{
      return result;
    }
  },
  toFixed(value,number=2){
    if(getType(value)!=='number'){
      return '--';
    }else{
      return value.toFixed(number);
    }
  },
  toPercent(value,number=2){
    if(getType(value)!=='number'){
      return '--';
    }else{
      return (value*100).toFixed(number)+'%';
    }
  }
}
Object.keys(filters).forEach(key=>{
  vue.filter(key,filters[key])
})