let openMenuButton = document.getElementById('openMenu');
let closeMenuButton = document.getElementById('closeMenu');
let mobileMenu = document.getElementById('mobileMenu');

if (openMenuButton != null) {
  openMenuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
  });
}

if (closeMenuButton != null) {
  closeMenuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });
}

let newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm != null) {
  newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for subscribing.');
    newsletterForm.reset();
  });
}

let addCartButtons = document.getElementsByClassName('add-cart-btn');
let viewCartBtn = document.getElementById('viewCartBtn');
let cartBox = document.getElementById('cartBox');
let cartText = document.getElementById('cartText');
let clearCartBtn = document.getElementById('clearCartBtn');
let processOrderBtn = document.getElementById('processOrderBtn');
let closeCartBtn = document.getElementById('closeCartBtn');

for (let i = 0; i < addCartButtons.length; i++) {
  addCartButtons[i].addEventListener('click', function () {
    let productCard = this.parentElement;
    let productName = productCard.getElementsByTagName('h3')[0].innerText;

    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.push(productName);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert('Item added to the cart.');
  });
}

if (viewCartBtn != null) {
  viewCartBtn.addEventListener('click', function () {
    cartBox.style.display = 'block';

    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    if (cartItems.length == 0) {
      cartText.innerText = 'No items added yet.';
    } else {
      cartText.innerText = cartItems.join(', ');
    }
  });
}

if (clearCartBtn != null) {
  clearCartBtn.addEventListener('click', function () {
    sessionStorage.removeItem('cartItems');
    cartText.innerText = 'No items added yet.';
    alert('Cart cleared.');
  });
}

if (processOrderBtn != null) {
  processOrderBtn.addEventListener('click', function () {
    sessionStorage.removeItem('cartItems');
    cartText.innerText = 'No items added yet.';
    cartBox.style.display = 'none';
    alert('Thank you for your order.');
  });
}

if (closeCartBtn != null) {
  closeCartBtn.addEventListener('click', function () {
    cartBox.style.display = 'none';
  });
}

let feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm != null) {
  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let customerInfo = {
      name: document.getElementById('nameInput').value,
      email: document.getElementById('formEmail').value,
      phone: document.getElementById('phoneInput').value,
      subject: document.getElementById('subjectInput').value,
      message: document.getElementById('messageInput').value,
      customOrder: document.getElementById('customOrder').checked
    };

    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

    alert('Thank you for your message.');
    feedbackForm.reset();
  });
}

let journeyBtn = document.getElementById('journeyBtn');

if (journeyBtn != null) {
  journeyBtn.addEventListener('click', function () {
    alert('Thanks for your interest! Visit the Gallery page to explore classes.');
  });
}