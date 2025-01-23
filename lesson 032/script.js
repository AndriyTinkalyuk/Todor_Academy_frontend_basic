// отримуємо елемент за його ід 
let canvas = document.getElementById('canvas');
// отримуємо контекст рендеринг
let context = canvas.getContext('2d');

// задаємо параметри нашого квадратика
let x = 50;
let y = 50;
let width = 50;
let height = 50;
let color = "blue";

// Швидкість переміщення
let speedX = 1;
let speedY = 1;


// Функція для малювання
function draw(color) {
  // Очищаємо полотно
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Малюємо квадрата
  context.fillStyle = color;
  context.fillRect(x, y, width, height);


  // Переміщення квадрата 
  x += speedX;
  y += speedY;

  // Відбиття від країв canvas
  if (x + width >= canvas.width || x <= 0) {
    speedX *= -1;
  }
  if (y + height >= canvas.height || y <= 0) {
    speedY *= -1;
  }

  // Анімація
  requestAnimationFrame(draw);
}

// Запуск анімації
draw(color);

// зміна кольора на клік, проте воно ще збільшує швидкість переміщення -_-
function switchColor() {
    if(color === "blue") {
    color = "red";
} else {
    color = "blue";
}
draw(color);
}

//прослуховувач для кліку
canvas.addEventListener('click', switchColor);