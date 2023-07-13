var comment, leisure;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


comment = [];
leisure = [];


document.getElementById('btn').addEventListener('click', (event) => {
  leisure.unshift(document.getElementById('text1').value);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('text1').value;

  element_list.appendChild(new_li);

});

document.getElementById('button').addEventListener('click', (event) => {
  comment.unshift(document.getElementById('text').value);
  let element_list2 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = document.getElementById('text').value;

  element_list2.appendChild(new_li2);

});