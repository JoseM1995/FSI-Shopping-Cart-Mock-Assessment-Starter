function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity 
}

// product already in cart so quant = 1 
let quantity = 1

// buttons

const quantDown = document.querySelector('quantity-down')
const quantUp = document.querySelector('quantity-up')

