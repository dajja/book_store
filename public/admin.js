
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
                            <button> Edit </button>
                            <button> Delete </button>
                        </div>
                    </div>
                `
            document.getElementById("content").innerHTML = render;
        }
    })