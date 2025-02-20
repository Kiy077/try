document.addEventListener('DOMContentLoaded',()=>{
    console.log('pagina de invitado cargada')
})

document.addEventListener('DOMContentLoaded', async()=>{
    try{
        const response = await fetch('http://localhost:400/api/guest/products')
        const products = await response.json()

        const productList = document.getElementById('productList')
        productList.innerHTML = products.map(product =>`
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text>Precio: ${product.price}</p>
                    </div>
                </div>
            </div>
            `).join('')
    }catch(error){
        console.error('Error al cargar los productos: ', error)
    }
})