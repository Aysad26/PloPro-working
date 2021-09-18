const buttonMenu = document.querySelector('.menu__burger-button');
const navigation = document.querySelector('.navigation');
const instructors = document.querySelector('.instructors__list');
const instructorItems = Array.from(document.querySelectorAll(".instructor__invisible"));
const buttonMoreInstructors = document.querySelector('.button_place_instructors');

function getInstructors() {
  const initialInstructors = instructorItems.slice(0, 2);
  initialInstructors.forEach((item) => {
    item.classList.add("instructor__visible");
    item.classList.remove("instructor__invisible");
  });
}

getInstructors();

function getMoreInstructors(e) {
  e.preventDefault();
  const instructorItems = Array.from(document.querySelectorAll(".instructor__invisible"));
  const instructorsForMore = instructorItems.slice(0, 2);
  instructorsForMore.forEach((item) => {
    item.classList.add("instructor__visible");
    item.classList.remove("instructor__invisible");
  const instructorItemsNew = Array.from(document.querySelectorAll(".instructor__invisible"));
  if (instructorItemsNew.length == 0) {buttonMoreInstructors.classList.add("button__hidden")}
  });
}

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('menu__burger-button_active');
  navigation.classList.toggle('navigation__active')
});

buttonMoreInstructors.addEventListener("click", (e) => {
  getMoreInstructors(e);
});

instructors.addEventListener("click", (e) => {
  if (e.target.className = "button_type_more") {
    const instructorCard = e.target.closest('.instructor');
    const contentHidden = instructorCard.querySelector(".instructor__content-hidden");
    const triangle = instructorCard.querySelector(".button__icon");
    const buttonText = e.target.firstChild;
    contentHidden.classList.toggle('instructor__content-hidden_active');
    triangle.classList.toggle('button__icon_opened');
    if (contentHidden.classList.contains('instructor__content-hidden_active')) {
      buttonText.textContent = 'Скрыть';
    } else {buttonText.textContent = 'Читать больше'}
  } else {return}
});

