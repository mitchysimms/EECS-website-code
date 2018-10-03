let cart_amountofitems = 0;
let total_Price = 0;

let item_1count = 0;
let item_2count = 0;
let item_3count = 0;
let item_4count = 0;
let item_5count = 0;
let item_6count = 0;

document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
document.getElementById('costOfItems').innerHTML = total_Price;
window.onload = () => {
     document.getElementById('item1count').value = item_1count;
     document.getElementById('item1count').innerHTML = item_1count;
     document.getElementById('item2count').value = item_2count;
     document.getElementById('item2count').innerHTML = item_2count;
     document.getElementById('item3count').value = item_3count;
     document.getElementById('item3count').innerHTML = item_3count;
     document.getElementById('item4count').value = item_4count;
     document.getElementById('item4count').innerHTML = item_4count;
     document.getElementById('item5count').value = item_5count;
     document.getElementById('item5count').innerHTML = item_5count;
     document.getElementById('item6count').value = item_6count;
     document.getElementById('item6count').innerHTML = item_6count;
}


function addItem1toCart(){
     cart_amountofitems++;
     total_Price += 250;
     item_1count++;
     document.getElementById('item1count').value = item_1count;
     document.getElementById('item1count').innerHTML = item_1count;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function addItem2toCart(){
     cart_amountofitems++;
     total_Price += 200;
     item_2count++;
     document.getElementById('item2count').value = item_2count;
     document.getElementById('item2count').innerHTML = item_2count;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function addItem3toCart(){
     cart_amountofitems++;
     total_Price += 150;
     item_3count++;
     document.getElementById('item3count').value = item_3count;
     document.getElementById('item3count').innerHTML = item_3count;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function addItem4toCart(){
     cart_amountofitems++;
     total_Price += 350;
     item_4count++;
     document.getElementById('item4count').value = item_4count;
     document.getElementById('item4count').innerHTML = item_4count;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function addItem5toCart(){
     cart_amountofitems++;
     total_Price += 7;
     item_5count++;
     document.getElementById('item5count').value = item_5count;
     document.getElementById('item5count').innerHTML = item_5count;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function addItem6toCart(){
     cart_amountofitems++;
     total_Price += 1000;
     item_6count++;
     document.getElementById('item6count').value = item_6count;
     document.getElementById('item6count').innerHTML = item_6count;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function clearCart(){
     cart_amountofitems = 0;
     total_Price = 0;
     item6count = 0;
     item5count = 0;
     item4count = 0;
     item3count = 0;
     item2count = 0;
     item1count = 0;
     document.getElementById('amountOfItems').innerHTML = cart_amountofitems;
     document.getElementById('costOfItems').innerHTML = total_Price;
}

function checkCart(){
     var shopForm = document.forms[shoppingForm];
     if(cart_amountofitems == 0){
          window.alert("Your cart is empty")
          return false;
     }
     else{
          return true;
     }
     return {
          hi: 1,
     }
}
