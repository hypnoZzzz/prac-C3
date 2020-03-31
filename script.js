
const replacement = document.getElementById('replacement');
let userCity = document.getElementById('userCity');
let answerCity = document.getElementById('answerCity');
const city = document.getElementById('city');
city.value = localStorage.getItem('city');
const answerToUser = () => {
  city.value = localStorage.getItem('city');
  replacement.style.display = 'flex';
  answerCity.style.display = 'flex';
  userCity = city.value;
  answerCity.innerHTML = answerCity.textContent + userCity;
    return answerCity.innerHTML; 
};

const chbxForm = document.getElementById('chbxForm')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const saveChbx = document.getElementById('saveChbx');
const votes = document.getElementById('votes')
const reload = () => {
  window.location.reload();
}

if (city.value ==='') {
    wrapper.style.display = 'none';
  } else {
      wrapper.style.display = 'flex';
    };

if(reload) {
  answerToUser();
  city.style.display = 'none';
 }

city.oninput = () => {
      localStorage.setItem('city', city.value);
    };

replacement.onclick = () => {
  city.style.display = 'flex';
  localStorage.removeItem('city');
  city.value='';
} 


saveChbx.onclick = () => { 
  let All = [one, two, three, four, five, six];
for(let number = 0; number<All.length; number++){
  let x = All[number]
  x.setAttribute('disabled', 'disabled');
  betta();
  }
};

resetButton.onclick = () => {
  let All = [one, two, three, four, five, six];
  for(let e = 0; e<All.length; e++) {
    let y = All[e]
    y.removeAttribute('disabled');
    localStorage.clear();
  }
};


function betta() {

oneClick = () => {
  if(one.checked) {
    localStorage.setItem('one', "true");
  } else {
    localStorage.setItem('one', "false");
  }
}

if (localStorage.getItem('one') == "true") {
  one.setAttribute('checked','checked');
}


if (localStorage.getItem('one') == "true" ) {
  one.setAttribute('disabled', 'disabled')
};
if (localStorage.getItem('one') == "false" ) {
  one.setAttribute('disabled', 'disabled')
};



twoClick = () => {
  if(two.checked) {
    localStorage.setItem('two', "true");
  } else {
    localStorage.setItem('two', "false");
  }
}

if (localStorage.getItem('two') == "true") {
  two.setAttribute('checked','checked');
}

if (localStorage.getItem('two') == "true") {
  two.setAttribute('disabled', 'disabled')
};
if (localStorage.getItem('two') == "false") {
  two.setAttribute('disabled', 'disabled')
};




threeClick = () => {
  if(three.checked) {
    localStorage.setItem('three', "true");
  } else {
    localStorage.setItem('three', "false");
  }
}

if (localStorage.getItem('three') == "true") {
 three.setAttribute('checked','checked');
}

if (localStorage.getItem('three') == "true") {
  three.setAttribute('disabled', 'disabled')
};
if (localStorage.getItem('three') == "false") {
  three.setAttribute('disabled', 'disabled')
};    



fourClick = () => {
  if(four.checked) {
    localStorage.setItem('four', "true");
  } else {
    localStorage.setItem('four', "false");
  }
}

if (localStorage.getItem('four') == "true") {
  four.setAttribute('checked','checked');
}

if (localStorage.getItem('four') == "true") {
  four.setAttribute('disabled', 'disabled')
};
if (localStorage.getItem('four') == "false") {
  four.setAttribute('disabled', 'disabled')
};    


fiveClick = () => {
  if(five.checked) {
    localStorage.setItem('five', "true");
  } else {
    localStorage.setItem('five', "false");
  }
}

if (localStorage.getItem('five') == "true") {
  five.setAttribute('checked','checked');
}

if (localStorage.getItem('five') == "true") {
  five.setAttribute('disabled', 'disabled')
};
if (localStorage.getItem('five') == "false") {
  five.setAttribute('disabled', 'disabled')
};    


sixClick = () => {
  if(six.checked) {
    localStorage.setItem('six', "true");
  } else {
    localStorage.setItem('six', "false");
  }
}

if (localStorage.getItem('six') == "true") {
  six.setAttribute('checked','checked');
}

if (localStorage.getItem('six') == "true") {
  six.setAttribute('disabled', 'disabled')
};
if (localStorage.getItem('six') == "false") {
  six.setAttribute('disabled', 'disabled')
};    

  one.onclick = oneClick;
  two.onclick = twoClick;
  three.onclick = threeClick;
  four.onclick = fourClick;
  five.onclick = fiveClick;
  six.onclick = sixClick;

};

betta();