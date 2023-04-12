let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__container_close-button')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let editName = document.querySelector('.popup__input_edit-name');
let editJob = document.querySelector('.popup__input_edit-job');
let saveButton = document.querySelector('.popup__container_save-button');
let formElement = document.querySelector('.popup__form');

function openPopup() {
    editName.value = profileName.textContent;
    editJob.value = profileJob.textContent;

    popup.classList.add('popup__opened');
}
editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup__opened');
}
closeButton.addEventListener('click', closePopup);


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = editName.value;
    profileJob.textContent = editJob.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    closePopup()
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 



