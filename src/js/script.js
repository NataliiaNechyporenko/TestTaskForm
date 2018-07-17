$(document).ready(function(){
  let step1 = '';
  let step2 = '';
  let initialState = {
    sum: 100,
    term: 12,
    name: '',
    surname: '',
    itn: '',
    city: '',
  };

  let orderData = {
    sum: 0,
    term: 0,
    name: '',
    surname: '',
    itn: '',
    city: '',
  };

  function agreeForm(f) {
    // Если поставлен флажок, снимаем блокирование кнопки
    if (f.agree.checked) f.submit.disabled = 0 
    // В противном случае вновь блокируем кнопку
    else f.submit.disabled = 1
   }

  function renderStep1() {
    $(".form-wrapper").empty();
    let step1Template = _.template(document.getElementById('form-step1-template').innerHTML);
    let formStep1 = step1Template(initialState);
    $(".form-wrapper").append(formStep1);
    $("#step1-next-btn").click(renderStep2);

    $("#sum").on("change", checkSum);
    $("#term").on("change", checkTerm);
  };

  function renderStep2(evt) {
    evt.preventDefault();
    $(".form-wrapper").empty();
    let step2Template = _.template(document.getElementById('form-step2-template').innerHTML);
    let formStep2 = step2Template();
    $(".form-wrapper").append(formStep2);
    $("#step2-back-btn").click(renderStep1);
    $("#step2-next-btn").click(renderStep3);
  };

  function renderStep3(evt) {
    evt.preventDefault();
    $(".form-wrapper").empty();
    let step3Template = _.template(document.getElementById('form-step3-template').innerHTML);
    let formStep3 = step3Template(orderData);
    $(".form-wrapper").append(formStep3);
    $("#step3-back-btn").click(renderStep2);
    $("#step3-submit").click(renderStep4);
  }

  function renderStep4(evt) {
    evt.preventDefault();
    $(".form-wrapper").empty();
    let step4Template = _.template(document.getElementById('form-step4-template').innerHTML);
    let formStep4 = step4Template();
    $(".form-wrapper").append(formStep4);
  };

  let checkSum = () => {
    let sum = $("#sum").val();
    if (sum !== '' && sum >= 1 && sum <= 10000) {
      $("#sum").addClass("form__input--ok");
        orderData.sum = sum;
      } else {
        $("#sum").removeClass("form__input--ok");
        orderData.sum  = 0;
      };
    checkInputsStep1();
  };

  let checkTerm = () => {
    let term = parseInt($("#term").val());
    if (term !== '' && term >= 1 && term <= 12) {
      $("#term").addClass("form__input--ok");
      orderData.term = term;
      } else {
        $("#term").removeClass("form__input--ok");
      orderData.term = 0;
    };
    checkInputsStep1();
  };

  function checkInputsStep1() {
    if (orderData.sum !== 0 && orderData.term !== 0) {
        step1 = 'ok';
        $("#step1-next-btn").addClass("btn--active");
        $("#step1-next-btn").attr(disabled = 0);
      } else {
        step1 = 'no';
        console.log(orderData);
        $("#step1-next-btn").removeClass("btn--active");
        $("#step1-next-btn").off('click');
      }
  };



// function checkItn(event) {
//       let msfrom1900 = Date.now() + Math.abs(Date.parse("January 01, 1900"));
//       let daysFrom1970 = msfrom1900/(1000*60*60*24);
//       let daysIn21Years = 7670;
//       let minItn = daysFrom1970 - daysIn21Years;
//       let itn = $(`#${inputId}`).val();
//       let first5CharsItn = itn.slice(0, 4);
//       console.log(first5CharsItn);
//       };
 
// function handleClick(evt) {
//   evt.preventDefault();
// };

renderStep1(initialState);
});    

