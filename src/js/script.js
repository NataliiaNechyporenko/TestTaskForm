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
  };

  let formElements = {
    "sum": (event) => { checkInputsStep1(event)  },
    "term": (event) => { checkInputsStep1(event) },
    "itn": (event) => { checkItn(event) },
  };

  let handleInputsChange = (event) => {
    let target = event.target.id;
    for (let key in formElements) {
         if(target.includes(key)) {
          formElements[key](event);
         }
     };
  };

  function checkInputsStep1(event) {
    console.log($(this));
    if ($(this).val() !== '' ) {
      $(this).addClass("form__input--ok");
        // orderData[inputId] = $(this).val();
      } else {
        $(this).removeClass("form__input--ok");
        orderData[inputId] = 0;
      }
      console.log(orderData);
    if (orderData.sum >= 1 
      && orderData.sum <= 10000
      && orderData.term >= 1
      && orderData.term <= 12) {
        step1 = 'ok';
        $("#step1-next-btn").addClass("btn--active")
      } else {
        step1 = 'no';
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
  function handleClick(evt) {
    evt.preventDefault();
    $(".form-wrapper").empty();
    let step2Template = _.template(document.getElementById('form-step2-template').innerHTML);
    let formStep2 = step2Template();
    $(".form-wrapper").append(formStep2);
  }

//Ivent listeners
  $("input").on("change", handleInputsChange);
  $(".btn").click(handleClick);
});