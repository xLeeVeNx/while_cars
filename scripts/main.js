$(document).ready(function () {
  $(".about__btn").click(function () {
    this.className = this.className == "down" ? "up" : "down";
  });

  $(".rotate1").click(function () {
    $(".list__show1").slideToggle(500);
  });
  $(".rotate2").click(function () {
    $(".list__show2").slideToggle(500);
  });
  $(".rotate3").click(function () {
    $(".list__show3").slideToggle(500);
  });
  $(".rotate4").click(function () {
    $(".list__show4").slideToggle(500);
  });
  $(".rotate5").click(function () {
    $(".list__show5").slideToggle(500);
  });
  $(".rotate6").click(function () {
    $(".list__show6").slideToggle(500);
  });
});

$(".images__inner a")
  .fancybox({
    animationEffect: "fade",
  })
  .attr("data-fancybox", "gallery");

$("[data-fancybox]").fancybox({
  thumbs: false,
  hash: false,
  loop: true,
  keyboard: true,
  toolbar: true,
  buttons: ["close"],
  animationEffect: false,
  arrows: true,
  openEffect: true,
  closeClick: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      $(".diagnostics__inner").addClass("_sending");
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        $(".diagnostics__inner").removeClass("_sending");
      } else {
        alert("Ошибка");
        $(".diagnostics__inner").removeClass("_sending");
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
