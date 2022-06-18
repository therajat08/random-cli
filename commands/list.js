const conf = new (require('conf'))
const chalk = require('chalk')

function list(){
  const itemList = conf.get('item-list')
  if(itemList && itemList.length){
    console.log(
      chalk.green.bold('Below are the items listed') 
    )
    itemList.forEach((item,index)=>{
      console.log(`${index + 1}. ${item.text}`);
    })
  }else{
    console.log(
      chalk.yellow.bold('No items to show. Please add some')
    )
  }
}

module.exports = list;
