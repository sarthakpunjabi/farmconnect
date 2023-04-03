console.log("Entering cart")
var updateBtns = document.getElementsByClassName('update-cart')
var count = document.getElementById('count').value
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')



minus.addEventListener('click', function () {
    count.innerHTML = count - 1
})

plus.addEventListener('click', function () {
    count.innerHTML = count + 1
})


for (var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        if (user === 'AnonymousUser') {
            console.log("Not logged in ")
        } else {
            updateUserOrder(productId, action)
        }

    })
}

function updateUserOrder(productId, action) {
    console.log("User is logged in ")
    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({ 'productID': productId, 'action': action })

    })

        .then((response) => {
            return response.json()
        })

        .then((data) => {
            location.reload()
        })
}

