const PRODUCTS = [
  {
    name: 'Apple MacBook Pro Apple M1 Pro/16GB/1TB SSD/16.2" Plata',
    brand: 'Apple',
    price: 2354 + '€',
    stars: 5,
    reviews: 13,
    seller: 'Mackfan',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc1',
  },
  {
    name: 'Apple Macbook Air 2023 Apple M2/8GB/256GB SSD/GPU Deca Core/15.3 Gris Espacial',
    brand: 'Apple',
    price: 1440 + '€',
    stars: 4,
    reviews: 65,
    seller: 'PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc2',
  },
  {
    name: 'Apple Macbook Pro Apple M3 8 Núcleos/8GB/512GB SSD/GPU 10 Núcleos/14" Gris Espacial',
    brand: 'Apple',
    price: 1928 + '€',
    stars: 5,
    reviews: 1,
    seller: 'PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc3',
  },
  {
    name: 'Apple MacBook Air Apple M1/8GB/256GB SSD/GPU Hepta Core/13.3 Plata',
    brand: 'Apple',
    price: 959 + '€',
    stars: 4,
    reviews: 718,
    seller: 'PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/APPLE/pc4',
  },
  {
    name: 'ASUS TUF Gaming A15 2023 FA507NU-LP045 AMD Ryzen 7 7735HS/16GB/512GB SSD/RTX 4050/15.6',
    brand: 'Asus',
    price: 999 + '€',
    stars: 3,
    reviews: 17,
    seller: 'PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/ASUS/pc5',
  },
  {
    name: 'ASUS Vivobook Go E1504FA-NJ642W AMD Ryzen 5 7520U/8GB/512GB SSD/15.6',
    brand: 'Asus',
    price: 469 + '€',
    stars: 2,
    reviews: 33,
    seller: 'Mackfan',
    image: './assets/assets-proyectp-2/imagenes/ASUS/pc6',
  },
  {
    name: 'HP Victus 15-fa0053ns Intel Core i5-12450H/16GB/512GB SSD/RTX 3050/15.6',
    brand: 'HP',
    price: 729 + '€',
    stars: 5,
    reviews: 23,
    seller: 'PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/HP/pc7',
  },
  {
    name: 'HP ZBook Studio G9 Intel Core i7-12700H/32GB/512GB SSD/RTX 3060/16',
    brand: 'HP',
    price: 2820 + '€',
    stars: 4,
    reviews: 40,
    seller: 'Mackfan',
    image: './assets/assets-proyectp-2/imagenes/HP/pc8',
  },
  {
    name: 'HP 255 G9 AMD Ryzen 5 5625U/16GB/512 GB SSD/15.6',
    brand: 'HP',
    price: 499 + '€',
    stars: 3,
    reviews: 13,
    seller: 'Mackfan',
    image: './assets/assets-proyectp-2/imagenes/HP/pc9',
  },
  {
    name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/8GB/512GB SSD/15.6',
    brand: 'Lenovo',
    price: 399 + '€',
    stars: 3,
    reviews: 38,
    seller: 'Mackfan',
    image: './assets/assets-proyectp-2/imagenes/LENOVO/pc10',
  },
  {
    name: 'Lenovo IdeaPad Flex 5 14IAU7 Intel Core i7-1255U/16GB/512GB SSD/14" Táctil',
    brand: 'Lenovo',
    price: 929 + '€',
    stars: 2,
    reviews: 110,
    seller: 'Mackfan',
    image: './assets/assets-proyectp-2/imagenes/LENOVO/pc11',
  },
  {
    name: 'Lenovo ThinkPad L15 Gen 4 Intel Core i7-1355U/16GB/512GB SSD/15.6',
    brand: 'Lenovo',
    price: 1526 + '€',
    stars: 3,
    reviews: 68,
    seller: 'PcComponentes',
    image: './assets/assets-proyectp-2/imagenes/LENOVO/pc12.webp',
  },
]

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
const index1 = document.createElement('span')
const index1Logo = document.createElement('img')
const indexContent2 = document.createElement('div')
const index2 = document.createElement('span')
const index2Logo = document.createElement('img')
const indexContent3 = document.createElement('div')
const index3 = document.createElement('span')
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

// ADD

index1.textContent = 'Compromisos'
index2.textContent = 'Mi cuenta'
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
