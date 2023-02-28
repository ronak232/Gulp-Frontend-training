function Search() {
  $(document).ready(function () {
    $(".header-search-icon").on("click", () => {
      $(".search-header").toggleClass("show-search");
    //   $(".menu-header-list-items-search").html('<i class="fas fa-times" aria-hidden="true"></i>')
      $(".search-header-bar").focus();
    });
    $(".search-header-container-close").on("click", ()=>{
        $(".search-header").removeClass("show-search");
        console.log("cross")
    })
  });

  $(".main_navbar__container_hidden_button").on("click", ()=>{
    $(".main_navbar__container-header").toggleClass("show");
    $(".fa-chevron-down").toggleClass("is-active")
  })
}

export default Search;
