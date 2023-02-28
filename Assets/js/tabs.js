function tabToshow() {
  document.querySelectorAll("button").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const target = e.currentTarget;
      console.log(target);
      const currentId = target.getAttribute('data-ref');
      console.log(currentId);
      const targetContent = document.querySelectorAll(".main_tab__content_info");
      targetContent.forEach((target) => {
        console.log("dsda")
        target.classList.remove("main_tab__content_info--active");
      });
      document.querySelectorAll("button").forEach((tabs) => {
        tabs.classList.remove("active");
      });
      tab.classList.add("active");
      document.getElementById(currentId).classList.add("main_tab__content_info--active")
    });
  });
}

export default tabToshow;
