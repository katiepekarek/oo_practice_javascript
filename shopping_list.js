var ShoppingList = function(budget){
  this.contents = [];
  this.budget = budget;
};

ShoppingList.prototype.addItem = function(item){
  if (this.budget >= (this.total()+item.price)){
    this.contents.push(item);
    return this.contents;
  } else {
    return "sorry, you can't have that";
  }
};

ShoppingList.prototype.total = function(){
  return this.contents.map(function(obj){
  return obj.price }).reduce(function(prev, curr){return prev + curr}, 0);
};

ShoppingList.prototype.swap = function(item1, item2){
  this.contents[this.contents.indexOf(item1)] = item2;
}



module.exports = ShoppingList;
