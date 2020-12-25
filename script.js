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


function DomElement(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
};
DomElement.prototype.show = function(){
    let element; 
        if (this.selector[0] === '.') {
            element = document.createElement('div');
            element.className = this.selector.slice(1);
            element.innerHTML = 'Hi';
        }
        if (this.selector[0] === '#'){
            element = document.createElement('p');
            element.setAttribute('id', this.selector.slice(1));
            element.innerHTML = 'Hello World';
        }
        element.style.height = this.height;
        element.style.width = this.width;
        element.style.backgroundColor = this.bg;
        element.style.fontSize = this.fontSize;
        document.body.appendChild(element);
        console.log(this.selector + ' ' + this.height + ' '+ this.width + ' ' + this.bg + ' ' + this.fontSize);
}
let block = new DomElement('.block', '15px', '50px', '#aaa', '15px');
let best = new DomElement('#best', '30px', '100px', 'green', '20px');

block.show();
best.show();