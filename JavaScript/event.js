const btn = document.querySelector('button');
const btn2 = document.querySelector('.btn');
//Returns the first element that is a descendant of node that matches selectors.只能选中一个
/*btn变量指向 button 元素，在 button 这种对象上可触发一系列的事件，因此也就可以使用事件处理器。
我们通过将一个匿名函数（这个赋值函数包括生成随机色并赋值给背景色的代码）赋值给“点击”事件处理器参数，
监听“点击”这个事件。 */
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// btn.onclick = function () {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// }
btn.onmouseover = function () {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
function bgChange2(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn2.addEventListener('click', bgChange2);

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.onsubmit = function (e) {
    if (fname.value === '' || lname.value === '') {
        e.preventDefault();
        para.textContent = 'You need to fill in both names!';
    }
} 