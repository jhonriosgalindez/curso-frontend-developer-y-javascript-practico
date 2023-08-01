const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const container = document.querySelector('.cards-container')

const toggleDesktopMenu = () => {
  aside.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
  aside.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

const toggleCartAside = () => {
  mobileMenu.classList.add('inactive')
  desktopMenu.classList.add('inactive')
  aside.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguer.addEventListener('click', toggleMobileMenu)
cartIcon.addEventListener('click', toggleCartAside)

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Smart TV',
  price: 600,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Laptop',
  price: 1000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

const homeProducts = (list) => {
  for (product of list) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    container.appendChild(productCard);
  }
}

homeProducts(productList)