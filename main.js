
const buyList = document.querySelector('#buy_list')
const formBuyList = document.querySelector('#form_buy__list')
const inputBuyList = document.querySelector('#input_buy__list')
const buttonBuyList = document.querySelector('#button_buy__list')

buttonBuyList.addEventListener('click', buttonFunction)

function buttonFunction() {
    //Все элемент
    const div = document.createElement('div')
    const newCheckBox = document.createElement('input')
    const newListElement = document.createElement('li')
    const deleteButton = document.createElement('button')

    //div style

    div.setAttribute('style', 'display:flex ;  margin-top:1rem;')

    //end div style

    //checkbox
    newCheckBox.style['margin-right'] = '0.5rem'
    newCheckBox.setAttribute('type', 'checkbox')
    //end checkbox

    // input

    //Получаем текст из инпута
    const textValue = inputBuyList.value
    // Присваиваем текст из инпута новому элементу
    newListElement.innerText = textValue
    newListElement.setAttribute('style', 'list-style:none;')
    // После написания чего либо инпут очищается
    inputBuyList.value = '';

    //end input


    //Условие 

    if (textValue === '') {
        alert('Введите,пожалуйста,название продукта')
        console.error('Название продукта не введено')
    } else {
        buyList.append(div)
        div.append(newCheckBox)
        div.append(newListElement)
        newListElement.append(deleteButton)
    }

    // end Условие

    //Создание кнопки удаления
    deleteButton.setAttribute('role', ' button')
    deleteButton.innerText = '—';
    deleteButton.style['margin-left'] = '1rem'
    deleteButton.addEventListener('click', function () {
        this.closest('li').removeAttribute
        newCheckBox.remove()
        div.remove();
    });
}



