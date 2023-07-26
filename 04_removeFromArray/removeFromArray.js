const removeFromArray = function(itemsList, ...items){
     
    for (let item of items){
        
        if (item === itemsList[itemsList.indexOf(item)]){
            itemsList.splice(itemsList.indexOf(item), 1);  
        }
    }
    
    return itemsList;
}


// Do not edit below this line
module.exports = removeFromArray;
