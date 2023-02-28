// import { ajax } from "jquery";

function ajaxData() {
  $(document).ready(function () {
    console.log("Ready");

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "GET",
      dataType: "json",
      success: function (data) {
        $.each(data, function (index, item) {
          $(".cards").append(`
            <div class="col">
             <img src=${item.url ? item.url : ""} alt="pic"/>
             <p class="text-danger">${item.title}</p>
             </div>
  `);
        });
        console.log(data);
      },
      error: function () {
        $(".error-throw").append(`
               <p class="error-throw-text">Something Wrong</p>
          `);
      },
    });
  });
}

export default ajaxData;
