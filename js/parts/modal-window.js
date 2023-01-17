import { phoneInputMask } from "./phoneMask.js";

export const modalWindow = (selector) => {
  const leyoutModal = ({ title, text }) => `
                      <div class="modal-window modal">
                        <div class="modal__container">
                            <span class="modal__close"></span>
                            <h2 class="modal__title">${title}</h2>
                            <div class="modal__body">
                                <p class="modal__text">${text}</p>
                                <form action="" class="modal__form">
                                    <input class="modal__field" type="tel" data-input-phone
                                        placeholder="+7 (999) 999-99-99" aria-placeholder="+79999999999" name="phone">
                                    <button class="btn btn__solid btn__solid--black" type="submit">Отправить</button>
                                    <button class="btn btn__transp btn__transp--black" type="reset">Отчистить</button>
                                </form>
                            </div>
                        </div>
                        <div class="modal__background"></div>
                      </div>
  `;

  const leyoutModalSelf = (self) => {
    switch (self.dataset.modal) {
      case "make":
        return leyoutModal({
          title: "Записаться",
          text: "Мы свяжемся с вами в течение нескольких минут и&nbsp;запишем вас на удобную дату",
        });
      case "discount":
        return leyoutModal({
          title: "Получить скидку 20% на первый визит",
          text: "Мы свяжемся с вами в течение нескольких минут и&nbsp;расскажем, как получить скидку",
        });
      case "buy":
        return leyoutModal({
          title: "Купить",
          text: "Мы свяжемся с вами в течение нескольких минут и&nbsp;расскажем, как купить сетификат",
        });
      default:
        return leyoutModal();
    }
  };

  const closeModal = (btn, modal, container) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("open");
      container.classList.remove("open");
      modal.classList.add("close");
      container.classList.add("close");
      setTimeout(() => {
        modal.remove();
        document.body.removeAttribute("style");
      }, 650);
    });
  };
  const showModal = (self) => {
    const layout = leyoutModalSelf(self);
    const parent = document.querySelector(selector);
    parent.insertAdjacentHTML("afterBegin", layout);
    phoneInputMask();
  };

  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const self = e.currentTarget;
      showModal(self);
      const closeBtn = document.querySelector(".modal__close");
      const modal = document.querySelector(".modal");
      const container = modal.querySelector(".modal__container");
      modal.classList.add("open");
      container.classList.add("open");
      document.body.style.overflow = "hidden";
      closeModal(closeBtn, modal, container);
    });
  });
};
