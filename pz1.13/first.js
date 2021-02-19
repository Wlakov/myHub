 var choose = String(prompt("Виберіть мову ua або en", '')).toLowerCase();
    switch (choose) {
        case 'ua':
            let enternum = Number(prompt("Введіть номер дня неділі від 1 до 7", ''));
            switch (enternum) {
                case 1:
                    alert('Понеділок');
                    break;
                case 2:
                    alert('Вівторок');
                    break;
                case 3:
                    alert('Середа');
                    break;
                case 4:
                    alert('Четвер');
                    break;
                case 5:
                    alert('П`ятниця');
                    break;
                case 6:
                    alert('Субота');
                    break;
                case 7:
                    alert('Неділя');
                    break;
                default:
                    alert('Ще разок')
            }
            break;
        case 'en':
            let enternumber = Number(prompt("Enter a number from 1 to 7", ''));
            switch (enternumber) {
                case 1:
                    alert('Monday');
                    break;
                case 2:
                    alert('Tuesday');
                    break;
                case 3:
                    alert('Wednesday');
                    break;
                case 4:
                    alert('Thursday');
                    break;
                case 5:
                    alert('Friday');
                    break;
                case 6:
                    alert('Saturday');
                    break;
                case 7:
                    alert('Sunday');
                    break;
                default:
                    alert('Wrong');
            }
            break;
        default:
            alert('One more time');
            location.reload();
    }


