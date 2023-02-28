const filterColors = () => {
  $(document).ready(function () {
    $(".color-filters-links").each(function () {
      console.log(this);
      $(this).on("click", function () {
        $(".color-filters-links").removeClass("active");
        $(this).addClass("active");
        console.log(this.dataset.filter);
        if (this.dataset.filter === "all") {
          $(".color-filters-selectors").hide();
          $(".color-filters-selectors").show(1000).fadeIn(800);
        } else {
          $(".color-filters-selectors").hide();
          $(`[data-tab = "${this.dataset.filter}"]`).show(800).fadeIn();
        }
      });
    });

    $(".color-filter-carousel").append(`
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../images/colors/caro-brown1.jfif" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item ">
          <img src="../../images/colors/caro-brown1.jfif" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item ">
          <img src="../../images/colors/caro-grey1.jfif" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../images/colors/caro-grey2.jfif" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item ">
          <img src="../../images/colors/caro-red1.jfif" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item ">
          <img src="../../images/colors/caro-red2.jfif" class="d-block w-100" alt="...">
        </div>
      </div>
     
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
      
    </div>`);
  });
};
export default filterColors;
