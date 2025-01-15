



document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.select-price');
  const priceList = document.getElementById('priceList');
  const totalPriceElement = document.getElementById('totalPrice');
  const resetButton = document.getElementById('resetButton');
  let totalPrice = 0;

  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const price = parseInt(card.getAttribute('data-price'));
      const productName = card.querySelector('h3').textContent;

  
      const listItem = document.createElement('li');
      listItem.textContent = `${productName}: ${price}`;
      priceList.appendChild(listItem);

  
      totalPrice += price;
      totalPriceElement.textContent = totalPrice;
    });
  });

  resetButton.addEventListener('click', () => {
  
    totalPrice = 0;
    totalPriceElement.textContent = totalPrice;

    
  });
});












