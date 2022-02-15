// document.getElementById('memory-button').addEventListener('click',function(){
//  const memoryPrice = document.getElementById('memory-cost').innerText;
//  const memoryPriceTotal = memoryPrice + 500;
//  console.log(memoryPriceTotal);
// })


// document.getElementById('')



function updateData(ItemData,price){
  
    const memoryCost = document.getElementById(ItemData);
    memoryCost.innerText = price; 
 
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost1 = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryCost1) + parseFloat(storageCost) + parseFloat (deliveryCost);
    
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;

}
document.getElementById('sixteenGB').addEventListener('click',function(){
updateData('memory-cost', 200);
});
document.getElementById('ssd2').addEventListener('click',function(){
updateData('storage-cost', 100); });

document.getElementById('paid-delivery').addEventListener('click',function(){
updateData('delivery-cost', 20); });

document.getElementById('eightGB').addEventListener('click',function(){
updateData('memory-cost', 0); });


// function onclick(){
//     document.getElementById(clickId).addEventListener('click', function(){
//         updateData(update,price);
//     })
// }

// onclick('sixteenGB','memory-cost', 200 );




// document.getElementById('ssd2').addEventListener('click',function() {
//     const cssd = document.getElementById('storage-cost');
//     cssd.innerText = 50;
//     // diclar all the total show 
//     const bestPrice = document.getElementById('best-price').innerText;
// const memoryCost1 = document.getElementById('memory-cost').innerText;
// const storageCost = document.getElementById('storage-cost').innerText;
// const deliveryCost = document.getElementById('delivery-cost').innerText;

// const totalPrice = parseFloat(bestPrice) + parseFloat(memoryCost1) + parseFloat(storageCost) + parseFloat (deliveryCost);


// const total = document.getElementById('total-price');
// total.innerText = cssd;

// } ) 

