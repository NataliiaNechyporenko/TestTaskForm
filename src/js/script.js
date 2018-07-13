$(document).ready(function(){
  let step1 = '';
  let step2 = '';
  let orderData = {
    sum: 1000,
    term: 12,
    name: '',
    surname: '',
    itn: '',
    city: '',
  };

  function renderStep1() {
    $(".form-wrapper").empty();
    let step1Template = _.template(document.getElementById('form-step1-template').innerHTML);
    let formStep1 = step1Template(orderData);
    $(".form-wrapper").append(formStep1);
  };

  renderStep1();

  $("#sum").on("change", function() {
    let sum = $(this).val();
    if (sum !== '' && sum >= 1 && sum <= 10000) {
      $(this).addClass("form__input--ok");
      orderData.sum = sum;
      } else {
      $(this).removeClass("form__input--ok");
      orderData.sum  = 0;
    };
    checkInputsStep1();
  });

  $("#term").on("change", function() {
    let term = parseInt($(this).val());
    if (term !== '' && term >= 1 && term <= 12) {
      $(this).addClass("form__input--ok");
      orderData.term = term;
      } else {
      $(this).removeClass("form__input--ok");
      orderData.term = 0;
    };
    checkInputsStep1();
  });

  function checkInputsStep1() {
    if (orderData.sum !== 0 && orderData.term !== 0) {
        step1 = 'ok';
        $("#step1-next-btn").addClass("btn--active");
        $("#step1-next-btn").click(renderStep2);
      } else {
        step1 = 'no';
        console.log(orderData);
        $("#step1-next-btn").removeClass("btn--active");
        $("#step1-next-btn").off('click');
      }
  };

function checkItn(event) {
      let msfrom1900 = Date.now() + Math.abs(Date.parse("January 01, 1900"));
      let daysFrom1970 = msfrom1900/(1000*60*60*24);
      let daysIn21Years = 7670;
      let minItn = daysFrom1970 - daysIn21Years;
      let itn = $(`#${inputId}`).val();
      let first5CharsItn = itn.slice(0, 4);
      console.log(first5CharsItn);
      };
 
// Click handler on the next button on Step1. -> Render Step 2 of form 
  function renderStep2(evt) {
    evt.preventDefault();
    $(".form-wrapper").empty();
    let step2Template = _.template(document.getElementById('form-step2-template').innerHTML);
    let formStep2 = step2Template();
    $(".form-wrapper").append(formStep2);
    $("#step2-back-btn").click(renderStep1);
  }
});    

function handleClick(evt) {
  evt.preventDefault();
}