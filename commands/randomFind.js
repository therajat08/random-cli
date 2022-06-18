const conf = new (require('conf'))()
const chalk = require('chalk')

function randomFind(){
  let list = conf.get("item-list");
  if(list && list.length){
    let randomItem = list[Math.floor(Math.random()*list.length)]
    if(randomItem){
      console.log("you get : " + randomItem.text);
    }else{
      console.log('couldn\'t fetch your request')
    }
  }else{
      console.log('List if empty');
  }
}

module.exports = randomFind
