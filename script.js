const btns = document.querySelectorAll('.click-btns button')
const value = document.querySelector('#value-sec');
// console.log(btns[0].classList);
btns.forEach((val, i) => {
  val.addEventListener('click', function(e) {
    let count = Number(value.innerText);
    // **********************
    const styles = e.currentTarget.classList;
    // **********************
    // console.log(styles);
    if (styles.contains('decrease')) {
      count--;
    } else if(styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count == 0) {
      value.style.color = 'darkorange'
    } else if (count < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'green'
    }
    value.innerText = count
  })
})