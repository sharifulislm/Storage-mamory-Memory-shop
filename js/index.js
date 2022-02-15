
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


    function onclick(clickId,upDAteid,price){
        document.getElementById(clickId).addEventListener('click', function(){
            updateData(upDAteid,price);
         
        })
    }

    // onclick('sixteenGB','memory-cost', 200);
    onclick('sixteenGB','memory-cost', 200);
    onclick('ssd2','storage-cost', 100);
    onclick('paid-delivery','delivery-cost', 20);
    onclick('eightGB','memory-cost', 0);
    onclick('ssd1','storage-cost', 0);
    onclick('ssd3','storage-cost', 500);
    onclick('free-delivery','delivery-cost', 0);






