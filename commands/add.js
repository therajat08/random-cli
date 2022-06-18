const conf = new (require('conf'))
const chalk = require('chalk')

function add(item){
  let itemList = conf.get('item-list');

  if(!itemList){
    itemList = []
  }
  itemList.push(
    {
      text: item
    }
  )
  conf.set('item-list',itemList)
  console.log('Item added successfully');
}

module.exports = add;
