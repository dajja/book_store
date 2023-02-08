function getCart() {
    fetch('http://localhost:3001/api/v1/cart')
        .then((res) => res.json())
        .then((data) => {
            let dataTable = `
        <tr>
            <th>STT</th>
            <th>Ten san pham</th>
            <th>So luong</th>
            <th>Thanh tien</th>
            <th>Hanh dong</th>
            </tr>
        `;
            let totalPrice = 0;
            if (data.length == 0) {
                document.getElementById("tableCart").innerHTML = "NOT PRODUCT";
                document.getElementById("totalMoney").style.display = "none";
            } else {
                for (let i = 0; i < data.length; i++) {
                    dataTable += `<tr>
                        <td>${i + 1}</td>
                        <td>${data[i].products}</td>
                        <td>${data[i].amount}</td>
                        <td>${data[i].amount * data[i].totalPrice}.000 VND</td>
                        <td> <button class="btn-delete" onclick="deleteCart(${data[i].cartID})"> Delete </button></td>
                        </tr>`
                    document.getElementById("tableCart").innerHTML = dataTable;
                    totalPrice += data[i].amount * data[i].totalPrice;
                }
                document.getElementById("totalPrice").innerHTML = `${totalPrice}.000 VND`;
            }
        })


}
getCart();

function deleteCart(id) {
    data = {
        "cartID": id
    }
    fetch('http://localhost:3001/api/v1/cart', {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    getCart();

}