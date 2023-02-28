function scrollTabcontent() {
  document.querySelectorAll("button").forEach((targets) => {
    targets.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget;
      console.log(target);
      const currentid = target.getAttribute("data-ref");
      console.log(currentid);
      window.scrollTo({
          top: document.getElementById(currentid).offsetTop - 40,
          behavior: "smooth",
        });
      document.querySelectorAll("button").forEach((tabs) => {
          tabs.classList.remove("active");
        });
        targets.classList.add("active");
    });
  });
}

export default scrollTabcontent;
