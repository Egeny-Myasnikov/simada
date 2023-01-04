export const openMenu = () => {
  const links = document.querySelectorAll(".nav__link--drop");
  links.forEach((l) =>
    l.addEventListener("click", (ev) => ev.preventDefault())
  );
  const burgerBtn = document.querySelector(".nav-burger");
  const navInner = document.querySelector(".nav__inner");
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("close");
    navInner.classList.toggle("show");
    document.body.classList.toggle("overHidden920px");
  });
};

export const nav = () => {
  const navDrop = document.querySelectorAll(".nav__drop");
  function switcher(el) {
    const dropList = el.lastElementChild;
    if (dropList.classList.contains("js-open")) {
      dropList.removeAttribute("style");
      dropList.classList.remove("js-open");
      dropList.classList.add("js-close");
      el.classList.remove("drop--open");
    } else {
      dropList.removeAttribute("style");
      const dropListHeight = dropList.scrollHeight;
      dropList.style.height = `${dropListHeight}px`;
      dropList.style.padding = `0px 20px`;
      dropList.style.marginTop = `20px`;
      dropList.classList.add("js-open");
      dropList.classList.remove("js-close");
      el.classList.add("drop--open");
    }
  }

  navDrop.forEach((el) => {
    el.lastElementChild.removeAttribute("style");
    el.lastElementChild.classList.remove("js-open");
    el.lastElementChild.classList.remove("js-close");
    function evt() {
      navDrop.forEach((el) => {
        el.classList.remove("drop--open");
        el.lastElementChild.removeAttribute("style");
        if (el.lastElementChild.classList.contains("js-close")) {
          el.lastElementChild.classList.remove("js-open");
        } else {
          el.lastElementChild.classList.add("js-close");
        }
      });
      switcher(this);
    }
    el.addEventListener("click", evt);
  });
  document.body.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("nav__drop") &&
      !e.target.classList.contains("nav__link--drop")
    ) {
      navDrop.forEach((el) => {
        el.lastElementChild.removeAttribute("style");
        el.lastElementChild.classList.remove("js-open");
        el.lastElementChild.classList.remove("js-close");
        el.classList.remove("drop--open");
      });
    }
  });
};
