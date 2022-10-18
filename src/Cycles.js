/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (; start <= end; start++) {
        if (!(start % 2)) sum += start;
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let iteration_quantity = 0;
    while (a > 0.1) {
        a = a / 2;
        iteration_quantity++;
    }
    return iteration_quantity;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let result_string = '';
    let iter = 0;
    do {
        if (iter % 3 == 2) {
            result_string += '_';
        } else {
            result_string += message[iter];
        }
        iter++;
    } while (iter < message.length);
    return result_string;
}
