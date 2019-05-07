//функция определения всевозможных ходов конем
function Position() {
	//считываем значение начальной клетки из текстового поля
	var start = document.getElementById('start').value;		
	//буква из названия ячейки	
	var col = start.charAt(0);	
	//цифра из названия ячейки		
	var row = start.charAt(1);	
	//строка для результата		
	var res = "";
	var resRow;
	var resCol;
	row = parseInt(row);
	//преобразуем букву col в цифру
	switch(col) {
		case 'A':
			col = 1;
			break;
		case 'B':
			col = 2;
			break;
		case 'C':
			col = 3;
			break;
		case 'D':
			col = 4;
			break;
		case 'E':
			col = 5;
			break;
		case 'F':
			col = 6;
			break;
		case 'G':
			col = 7;
			break;
		case 'H':
			col = 8;
			break;
		default:
			alert('Некорректный ввод!');
			break;
	}
	//находим всевозможные позиции, куда конь может попасть из заданной ячейки
	for(var x = -2; x <= 2; x++)
		for(var y = -2; y <= 2; y++)
		{
			if((x != y) && (x != -y) && (x != 0) && (y != 0) && (col + x >= 1) && (col + x <= 8) && (row + y >= 1) && (row + y <= 8))
			{
				resCol = col + x;
				switch(resCol) {
					case 1:
						resCol = 'A';
						break;
					case 2:
						resCol = 'B';
						break;
					case 3:
						resCol = 'C';
						break;
					case 4:
						resCol = 'D';
						break;
					case 5:
						resCol = 'E';
						break;
					case 6:
						resCol = 'F';
						break;
					case 7:
						resCol = 'G';
						break;
					case 8:
						resCol = 'H';
						break;
					default:
						break;
				}
				resRow = row + y;
				res += resCol + resRow + " ";
			}
		}
	//выводим результат во всплывающем окне
	alert(res);			
}