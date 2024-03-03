document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.cream1');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        let cart = localStorage.getItem('wishlist');
        wishlist = wishlist ? JSON.parse(wishlist) : [];

        let productExists = wishlist.find(item => item.productId === productId);
        if (productExists) {
            productExists.quantity += 1;
        } else {
            wishlist.push({ productId: productId, quantity: 1 });
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
});