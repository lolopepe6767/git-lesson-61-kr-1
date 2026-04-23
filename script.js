var testScore = prompt("Введите баллы за тест(0-50):")
var hwScore = prompt("Введите баллы за домашние задания(0-30):")
var attendanceScore = prompt("Введите баллы за посещаемость 0-20):")
testScore = Number(testScore)
hwScore = Number(hwScore)
attendanceScore = Number(attendanceScore)
if (isNaN(testScore)) {
    console.error("Это не число!");
} else if (testScore < 0) {
    console.error("Число слишком маленькое!");
} else if (testScore > 50) {
    console.error("Число слишком большое!");
}
else {
    var totalScore = testScore + hwScore + attendanceScore;
    var grade = ""
}
if (totalScore >= 90 && totalScore <= 100) {
    grade = "Отлично"
}else if (totalScore >= 75) {
    grade = "Хорошо"
}else if (totalScore >= 60) {
    grade = "Удовлетворительно"
}else {
    grade = "Неудовлетворительно"
}
console.log("Общий балл: " + totalScore);
console.log("Итоговая оценка: " + grade);
var numbers = [5, 12, 8, 130, 44, 2, 9];
var sum = 0;
var moreThan10 = 0;
var max = numbers[0];
var min = numbers[0];
console.log("Числа больше 10:");
for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    sum = sum + current;
    if (current > 10) {
        console.log(current);
        moreThan10++;
    }
    if (current > max) {
        max = current;
    }
        if (current < min) {
        min = current;
    }
}
console.log("Сумма всех чисел: " + sum);
console.log("Максимальное число: " + max);
console.log("Минимальное число: " + min);
console.log("Количество чисел больше 10: " + moreThan10);
