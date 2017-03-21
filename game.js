// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

//This function will remove any existing blue,green,invisible classname so that the count will work correctly.
// From Sherlyc
function resetClass (evt){
    if (evt.target.classList.contains('green')) {
      evt.target.classList.remove('green');
    } else if (evt.target.classList.contains('blue')){
      evt.target.classList.remove('blue');
    } else if (evt.target.classList.contains('invisible')){
      evt.target.classList.remove('invisible');
    }

}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);
  }
}

function makeGreen (evt) {
  resetClass (evt);
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  resetClass (evt);
  evt.target.classList.toggle('blue');
  updateCounts();
}
// CREATE FUNCTION hide HERE
function hide(evt) {
  resetClass (evt);
  evt.target.classList.toggle('invisible');
  updateCounts();
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  // One way of doing it. But this also counts the lines
  // totals.blue = document.getElementsByClassName('blue').length;
  // totals.green = document.getElementsByClassName('green').length;
  // totals.invisible = document.getElementsByClassName('invisible').length;
  dotsChildren = document.getElementsByClassName('board')[0].children;
  for(i = 0; i < dotsChildren.length; i++) {
    if(dotsChildren[i].classList.contains('blue')) {
      totals.blue++;
    } else if (dotsChildren[i].classList.contains('green')) {
      totals.green++;
    } else if (dotsChildren[i].classList.contains('invisible')) {
      totals.invisible++;
    }
  }


  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
