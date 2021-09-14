  const button = document.querySelector('.menu__burger-button');
  const navigation = document.querySelector('.navigation')
     
  button.addEventListener('click', (e) => {
    button.classList.toggle('menu__burger-button_active');
    navigation.classList.toggle('navigation__active')
  });

