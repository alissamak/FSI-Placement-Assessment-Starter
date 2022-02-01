// First, tell us your name
let yourName = "Alissa Makligh" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle 

const credit = document.querySelector('#credit') // selecting the element with an id of credit
credit.textContent = `Created by ${yourName}` // Code to update name display

//function to display quantity of gb cookie
function showGbQuantity(gbQuant){
    let qty_gb = document.querySelector('#qty-gb')
    qty_gb.textContent = gbQuant
}

//function to display quantity of cc cookie
function showCcQuantity(ccQuant){
    let qty_cc = document.querySelector('#qty-cc')
    qty_cc.textContent = ccQuant
}

//function to display quantity of sugar cookie
function showSugarQuantity(sugarQuant){
    let qty_sugar = document.querySelector('#qty-sugar')
    qty_sugar.textContent = sugarQuant
}

function showTotalQuantity(totalQuant){
    let qty_total = document.querySelector('#qty-total')
    qty_total.textContent = totalQuant
}

// selecting the element with an id of add & minus gb cookie
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinuBtn = document.querySelector('#minus-gb')

// Event listener for clicks on the "+" button for Gingerbread cookies
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    showGbQuantity(gb)
    showTotalQuantity(gb + cc + sugar)
})

gbMinuBtn.addEventListener('click', function() {
    if(gb > 0){
        gb = gb - 1
        showGbQuantity(gb)
        showTotalQuantity(gb + cc + sugar)
    }
})

// TODO: Hook up event listeners for the rest of the buttons
//selecting the element with an id of add & minus cc cookie
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinuBtn = document.querySelector('#minus-cc')

ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    showCcQuantity(cc)
    showTotalQuantity(gb + cc + sugar)
})
    
ccMinuBtn.addEventListener('click', function() {
    if(cc > 0){
        cc = cc - 1
        showCcQuantity(cc)
        showTotalQuantity(gb + cc + sugar)
    }
})

//selecting the element with an id of add & minus sugar cookie
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinuBtn = document.querySelector('#minus-sugar')

sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    showSugarQuantity(sugar)
    showTotalQuantity(gb + cc + sugar)
})
    
sugarMinuBtn.addEventListener('click', function() {
    if(sugar > 0){
        sugar = sugar - 1
        showSugarQuantity(sugar)
        showTotalQuantity(gb + cc + sugar)
    }
})
