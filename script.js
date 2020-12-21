// 1) Сделать класс DomElement, который
//    содержит свойства
//   - selector, 
//   - height, 
//   - width, 
//   - bg, 
//   - fontSize
// содержит метод, который создает элемент на странице в зависимости от условия:  
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector  начинается с решетки # то создаем параграф с id

// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"
// с помощью cssText задавать стили: 
//   - высотой - height,
//   - шириной - width, 
//   - background - bg
//   - размер текста fontSize 
// внутрь созданного блока записывать любой текст. Метод записи может быть любым.
// 2) Создать новый объект на основе класса DomElement
// 3) Вызвать его метод чтобы получить элемент на странице



// const input = document.querySelector('#input');
// const out = document.querySelector('.out');
// const div = document.createElement('div');
// const p = document.createElement('p');
function DomElement(selector, height, width, bg, fontsize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontsize = fontsize;
        
    DomElement.prototype.show = function(){
        const div = document.createElement('div');
        const p = document.createElement('p');
        if (str[0] = '.') {
            this.selector = block;
        }
        if (str[0] = '#') {
            this.selector = best;
        }
        console.log(this.selector + ' ' + this.height + ' ' + this.width + ' ' + this.bg + ' ' + this.fontsize);
    }
};
// console.log(div);
let block = new DomElement('.block', '15px', '50px', '#aaa', '15px');
let best = new DomElement('#best', '30px', '30px', 'green', '30px');
console.log(block);
console.log(best);

block.show();
best.show();