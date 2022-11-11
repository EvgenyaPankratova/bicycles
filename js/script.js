let dropdownMenuButton = document.querySelector('.bicycle-main-btn');
let addCharacteristicsButton = document.querySelector('.add-characteristics__btn');
let characteristicsList = document.querySelector('.characteristics-list');
let input = document.querySelector('.input');

function buttonNavToggler(event){ //отменяем обновление браузера по умолчанию
	event.preventDefault();
	
}

dropdownMenuButton.addEventListener('change', buttonNavToggler);


function addChar(event){ //добавляем характеристику из поля ввода
		if(input.value && input.validity.valid){ //проверяем что форма валидна и имеет псевдокласс valid
			let li = document.createElement('li');
			li.innerHTML = input.value;
			characteristicsList.append(li);
		}else{
			alert('Данные введены неверно или поле не заполнено');
		}
	}

addCharacteristicsButton.addEventListener('click', addChar);
