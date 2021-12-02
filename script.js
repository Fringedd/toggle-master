'use strict';

const toggle1 = document.getElementById('toggle');
const dollars = document.querySelectorAll('.dollars');
const dollar = document.getElementById('dollar');
const amount = document.getElementById('amounty');
const amounts = document.querySelectorAll('.amount');

const amounty = Number(document.querySelector('.amount').textContent);

const number = Math.trunc(amounty / 10);
console.log(number);

let arry = [];

const list = document.querySelectorAll('.amount');

console.log(arry);

let result = arry.map(i => Number(i));
console.log(typeof arry[1]);
const togglerR = function () {
  if (!toggle1.classList.contains('right')) {
    toggle1.classList.add('right');
    arry = ['19.99', '24.99', '39.99'];
    for (let i = 0; i < amounts.length; i++) {
      amounts[i].innerHTML = `${arry[i]}`;
    }
  } else {
    toggle.classList.remove('right');
    arry = ['199.99', '249.99', '399.99'];
    for (let i = 0; i < amounts.length; i++) {
      amounts[i].innerHTML = `${arry[i]}`;
    }
  }
};

toggle1.addEventListener('click', togglerR);
