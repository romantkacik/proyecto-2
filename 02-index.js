const PRODUCTS = [
  {
    name: 'Apple MacBook Pro Apple M1 Pro/16GB/1TB SSD/16.2" Plata',
    brand: 'Apple',
    price: 2354 + '€',
    stars: 5,
    reviews: 13,
    seller: 'Vendido por Mackfan',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc1.webp',
  },
  {
    name: 'Apple Macbook Air 2023 Apple M2/8GB/256GB SSD/GPU Deca Core/15.3 Gris Espacial',
    brand: 'Apple',
    price: 1440 + '€',
    stars: 4,
    reviews: 65,
    seller: 'Vendido por PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc2.webp',
  },
  {
    name: 'Apple Macbook Pro Apple M3 8 Núcleos/8GB/512GB SSD/GPU 10 Núcleos/14" Gris Espacial',
    brand: 'Apple',
    price: 1928 + '€',
    stars: 5,
    reviews: 1,
    seller: 'Vendido por PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc3.webp',
  },
  {
    name: 'Apple MacBook Air Apple M1/8GB/256GB SSD/GPU Hepta Core/13.3 Plata',
    brand: 'Apple',
    price: 959 + '€',
    stars: 4,
    reviews: 718,
    seller: 'Vendido por PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc4.webp',
  },
  {
    name: 'ASUS TUF Gaming A15 2023 FA507NU-LP045 AMD Ryzen 7 7735HS/16GB/512GB SSD/RTX 4050/15.6',
    brand: 'Asus',
    price: 999 + '€',
    stars: 3,
    reviews: 17,
    seller: 'Vendido por PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/ASUS/pc5.webp',
  },
  {
    name: 'ASUS Vivobook Go E1504FA-NJ642W AMD Ryzen 5 7520U/8GB/512GB SSD/15.6',
    brand: 'Asus',
    price: 469 + '€',
    stars: 2,
    reviews: 33,
    seller: 'Vendido por Mackfan',
    image: './assets/assets-proyectp-2/imagenes/ASUS/pc6.webp',
  },
  {
    name: 'HP Victus 15-fa0053ns Intel Core i5-12450H/16GB/512GB SSD/RTX 3050/15.6',
    brand: 'HP',
    price: 729 + '€',
    stars: 5,
    reviews: 23,
    seller: 'Vendido por PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/HP/pc14.webp',
  },
  {
    name: 'HP ZBook Studio G9 Intel Core i7-12700H/32GB/512GB SSD/RTX 3060/16',
    brand: 'HP',
    price: 2820 + '€',
    stars: 4,
    reviews: 40,
    seller: 'Vendido por Mackfan',
    image: './assets/assets-proyectp-2/imagenes/HP/pc8.webp',
  },
  {
    name: 'HP 255 G9 AMD Ryzen 5 5625U/16GB/512 GB SSD/15.6',
    brand: 'HP',
    price: 499 + '€',
    stars: 3,
    reviews: 13,
    seller: 'Vendido por Mackfan',
    image: './assets/assets-proyectp-2/imagenes/HP/pc9.webp',
  },
  {
    name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/8GB/512GB SSD/15.6',
    brand: 'Lenovo',
    price: 399 + '€',
    stars: 3,
    reviews: 38,
    seller: 'Vendido por Mackfan',
    image: './assets/assets-proyectp-2/imagenes/LENOVO/pc10.webp',
  },
  {
    name: 'Lenovo IdeaPad Flex 5 14IAU7 Intel Core i7-1255U/16GB/512GB SSD/14" Táctil',
    brand: 'Lenovo',
    price: 929 + '€',
    stars: 2,
    reviews: 110,
    seller: 'Vendido por Mackfan',
    image: './assets/assets-proyectp-2/imagenes/LENOVO/pc11.webp',
  },
  {
    name: 'Lenovo ThinkPad L15 Gen 4 Intel Core i7-1355U/16GB/512GB SSD/15.6',
    brand: 'Lenovo',
    price: 1526 + '€',
    stars: 3,
    reviews: 68,
    seller: 'Vendido por PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/LENOVO/pc12.webp',
  },
]

//! NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR ---------------

const sectionNavBar = document.querySelector('#navBar')

//CREAR ELEMENTOS:

const divNavBar = document.createElement('div')
const logo = document.createElement('img')
//BUSCADOR
const serchContent = document.createElement('div')
const inputNav = document.createElement('input')
const lupNav = document.createElement('img')
//NAVBAR INDEX
const divIndex = document.createElement('div')
const indexContent1 = document.createElement('div')
const index1 = document.createElement('a')
const index1Logo = document.createElement('img')
const indexContent2 = document.createElement('div')
const index2 = document.createElement('a')
const index2Logo = document.createElement('img')
const indexContent3 = document.createElement('div')
const index3 = document.createElement('a')
const index3Logo = document.createElement('img')

// AÑADIR ELEMENTOS AL HTML

document.body.appendChild(divNavBar)
divNavBar.appendChild(logo)
divNavBar.appendChild(serchContent)
serchContent.appendChild(inputNav)
serchContent.appendChild(lupNav)
divNavBar.appendChild(divIndex)
divIndex.appendChild(indexContent1)
indexContent1.appendChild(index1Logo)
indexContent1.appendChild(index1)
divIndex.appendChild(indexContent2)
indexContent2.appendChild(index2Logo)
indexContent2.appendChild(index2)
divIndex.appendChild(indexContent3)
indexContent3.appendChild(index3Logo)
indexContent3.appendChild(index3)
sectionNavBar.appendChild(divNavBar)

// VALORES

index1.textContent = 'Compromisos'
index1.href = 'https://www.pccomponentes.com/compromisos'
index2.textContent = 'Mi cuenta'
index2.href = 'https://www.pccomponentes.com/login'
index3.textContent = 'Mi cesta'

divNavBar.classList.add('navBar')
divNavBar > logo.classList.add('logo')
logo.src = '/assets/assets-proyectp-2/nav-bar/logo-pccomponentes.svg'
divNavBar > serchContent.classList.add('serch')
inputNav.value = 'Buscar'
lupNav.src = '/assets/assets-proyectp-2/nav-bar/busqueda.png'

divIndex.classList.add('divIndex')
index1Logo.src = '/assets/assets-proyectp-2/nav-bar/compromisos.png'
index2Logo.src = '/assets/assets-proyectp-2/nav-bar/usuario.png'
index3Logo.src = '/assets/assets-proyectp-2/nav-bar/cesta.png'

//! NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR ---------------

//!-----------------------------------------------------------------

//! PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS-----------

const productsSection = document.querySelector('#products')
const productlist = document.createElement('article')
productlist.className = 'productlist'
productsSection.appendChild(productlist)

const printProducts = (products) => {
  productlist.innerHTML = ''
  for (const product of products) {
    //CREAR ELEMENTOS:

    const divProduct = document.createElement('div')
    divProduct.classList.add('divProduct')
    const productImg = document.createElement('img')
    const productName = document.createElement('span')
    const productBrand = document.createElement('h3')
    const productPrice = document.createElement('p')
    const productComment = document.createElement('div')
    productComment.classList = 'productComment'
    const allStars = document.createElement('div')
    allStars.className = 'allStars'
    for (let i = 1; i <= product.stars; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      allStars.appendChild(star)
    }

    const pComment = document.createElement('span')
    const productSeller = document.createElement('h4')

    // AÑADIR ELEMENTOS AL HTML
    divProduct.appendChild(productImg)
    divProduct.appendChild(productName)
    divProduct.appendChild(productBrand)
    divProduct.appendChild(productPrice)
    divProduct.appendChild(productComment)
    productComment.appendChild(allStars)
    productComment.appendChild(pComment)
    divProduct.appendChild(productSeller)
    productlist.appendChild(divProduct)

    // VALORES

    productImg.src = product.image
    productName.textContent = product.name
    productBrand.textContent = product.brand
    productPrice.textContent = product.price
    productSeller.textContent = product.seller
    pComment.textContent = `(${product.reviews})`
  }
}
printProducts(PRODUCTS)

//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*//*FILTRO*/

// filtro de orden por Marcas
// filtro de orden por Marcas
// filtro de orden por Marcas
// filtro de orden por Marcas

const productFilter = document.createElement('article')
productFilter.classList.add('productFilter')
productsSection.appendChild(productFilter)

const filtro = document.createElement('label')
filtro.classList.add('filtro1')
const selectLabel = document.createElement('select')
selectLabel.id = 'brandFilter'
filtro.innerText = 'Filtrar por marca :'
const option1 = document.createElement('option')
const option2 = document.createElement('option')
const option3 = document.createElement('option')
const option4 = document.createElement('option')
const option5 = document.createElement('option')

selectLabel.appendChild(option1)
selectLabel.appendChild(option2)
selectLabel.appendChild(option3)
selectLabel.appendChild(option4)
selectLabel.appendChild(option5)
filtro.appendChild(selectLabel)
productFilter.appendChild(filtro)

option1.textContent = 'Mostrar todos'
option1.value = 'all'
option2.textContent = 'Apple'
option2.value = 'Apple'
option3.textContent = 'Asus'
option3.value = 'Asus'
option4.textContent = 'HP'
option4.value = 'HP'
option5.textContent = 'Lenovo'
option5.value = 'Lenovo'

const brandFilter = document.getElementById('brandFilter')
brandFilter.addEventListener('change', handleBrandFilter)

function handleBrandFilter() {
  const selectedBrand = brandFilter.value
  const filteredProducts = filterProductsByBrand(PRODUCTS, selectedBrand)
  printProducts(filteredProducts)
}

function filterProductsByBrand(products, brand) {
  if (brand === 'all') {
    return products
  }
  return products.filter((product) => product.brand === brand)
}

// filtro de orden ASC y DESC al DOM
// filtro de orden ASC y DESC al DOM
// filtro de orden ASC y DESC al DOM

const labelContent = document.createElement('label')
labelContent.classList.add('filtro2')
labelContent.innerText = 'Filtrar por precio :'
const orderLabel = document.createElement('select')
orderLabel.id = 'orderFilter'
const orderOption1 = document.createElement('option')
const orderOption2 = document.createElement('option')

orderLabel.appendChild(orderOption1)
orderLabel.appendChild(orderOption2)

orderOption1.textContent = 'Precio de menor a mayor'
orderOption1.value = 'asc'
orderOption2.textContent = 'Precio de mayor a menor'
orderOption2.value = 'desc'

productFilter.classList.add('productFilter')
productsSection.appendChild(productFilter)
labelContent.appendChild(orderLabel)
productFilter.appendChild(labelContent)

const orderFilter = document.getElementById('orderFilter')
orderFilter.addEventListener('change', handleOrderFilter)

function handleOrderFilter() {
  const selectedOrder = orderFilter.value
  const sortedProducts = PRODUCTS.slice().sort((a, b) => {
    const priceA = parseFloat(a.price)
    const priceB = parseFloat(b.price)

    return selectedOrder === 'asc' ? priceA - priceB : priceB - priceA
  })

  printProducts(sortedProducts)
}
