let url = "http://localhost:3001/api/v1";

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        render = '';
        for (let i = 0; i < data.length; i++) {
            render += `
                    <div class="one-product"> 
                        <div class="contentProduct productTitle">${data[i].title}</div>
                        <div class="contentProduct productImg"><img src="${data[i].imageUrl}"></div>
                        <div class="contentProduct">${data[i].description}</div>
                        <div class="contentProduct productPrice">$ ${data[i].price}</div>
                        <div class="contentProduct buttonCart">
                            <button onclick="addCart('${i}','${data[i].title}','${data[i].price}')"> Add to cart </button>
                        </div>
                    </div>
                `
            document.getElementById("content").innerHTML = render;
        }
    })


function addCart(id, title, price) {
    fetch("http://localhost:3001/api/v1/cart")
        .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].cartID == id) {
                    let value = {
                        "id": id,
                        "amount": data[i].amount + 1
                    }
                    fetch("http://localhost:3001/api/v1/cart", {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(value),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    return;
                }
            }
            let dataPost = {
                "cartID": id,
                "products": title,
                "totalPrice": price,
                "amount": 1,
            }
            fetch('http://localhost:3001/api/v1/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPost),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        )
}
