$(document).ready(function(){
  let step1 = '';
  let step2 = '';
  let orderData = {
    sum: 0,
    term: 0,
    name: '',
    surname: '',
    itn: '',
    city: '',
  }

  function checkInputNumber(evt) {
    let inputId = evt.target.id;
    console.log(inputId);
    if ($(`#${inputId}`).val() !== '') {
        $(`#${inputId}`).addClass("form__input--ok");
        orderData[inputId] = $(`#${inputId}`).val();
      } else {
        $(`#${inputId}`).removeClass("form__input--ok");
        orderData[inputId] = 0;
      }

    if (orderData.sum >= 1 
      && orderData.sum <= 10000
      && orderData.term >= 1
      && orderData.term <= 12) {
        step1 = 'ok';
        $("#step1-next-btn").addClass("btn--active")
      } else {
        step1 = 'no';
      }

    if (inputId === 'itn') {
      let msfrom1900 = Date.now() + Math.abs(Date.parse("January 01, 1900"));
      let daysFrom1970 = msfrom1900/(1000*60*60*24);
      let daysIn21Years = 7670;
      let minItn = daysFrom1970 - daysIn21Years;
      let itn = $(`#${inputId}`).val();
      let first5CharsItn = itn.slice(0, 4);
      
      console.log(first5CharsItn);

      }
    }
  

  function handleClick(evt) {
    evt.preventDefault();
    $(".form-wrapper").empty();
    let step2Template = _.template(document.getElementById('form-step2-template').innerHTML);
    let formStep2 = step2Template();
    $(".form-wrapper").append(formStep2);
  }

  $("input").on("change", checkInputNumber);
  $(".btn").click(handleClick);
});