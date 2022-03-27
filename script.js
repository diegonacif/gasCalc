function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");;
};

function calculate () {
  const priceInput = document.getElementById("price")
  const consumeInput = document.getElementById("consume")
  const distanceInput = document.getElementById("distance")
  const litersInput = document.getElementById("litersConsume")
  const totalInput = document.getElementById("totalPrice")

  const liters = distanceInput.value / consumeInput.value
  const total = liters * priceInput.value

  if (priceInput.value == 0 || consumeInput.value == 0 || distanceInput.value  == 0 ) {
    return (
      alert("\nInsira os valores antes de calcular\n")
    )
  } else {
    return (      
      litersInput.value = roundToTwo(liters),
      totalInput.value = roundToTwo(total),
      console.log(total, liters)  
    )
  }
  
};

/* 
c = km/l
c * km = l
*/