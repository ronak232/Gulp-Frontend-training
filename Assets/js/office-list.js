const officeList = require("./office-listing.json");

// const showOfficeListing = () => {
//   const newoffices = officeList;
//   console.log(newoffices);

//   return officeList.map((item) => {
//     //   console.log(item.country.states)
//     //   country.states.map(state =>

//             // console.log(item)
//     //     )
//     return item.country.states.map(({name, offices}) => {
//     //   console.log(state);
//     console.log(name)
//       return offices.map((office) =>
//       {
//         //  console.log(name)
//         // console.log(office.addressLine1);
//         return `
//         <div>
//         <h1 class="name">${name}</h1>
//         <a>${office.cityName}</a>
//         </div>`
//       }).join("");
//     }).join("");
//   }).join("");
// };
// document.querySelector(".officelist").innerHTML=showOfficeListing();

//
// The map to dynamically show on the html(rendering)

// This will the show the map on the html based on the latitude and longitude.

const showOfficeListing = () => {
  const newoffices = officeList;
  // console.log(newoffices);
  const allOffices = document.querySelector(".office-list");
  let office,
    officeRegion,
    officeCity,
    officeStates = "",
    officedropdown = "";
  let dropdownList = document.querySelector(
    ".offices-location__dropdown_container-Items-menu"
  );
  if (allOffices) {
    console.log(officedropdown);
    for (office of newoffices) {
      const officeRegions = office.country.states;
      const officecountries = office.country;
      officedropdown += `<p class="offices-location__dropdown_container_country-title">${officecountries.name}</p>`;
      for (officeRegion of officeRegions) {
        const officeCities = officeRegion.offices;
        // console.log(officeCities);

        let officeLists = "";
        for (officeCity of officeCities) {
          let addressLine2;
          officeCity.addressLine2 != null && officeCity.addressLine2 != ""
            ? (addressLine2 = officeCity.addressLine2)
            : (addressLine2 = "");
          let addressLine3;
          officeCity.addressLine2 != null && officeCity.addressLine3 != ""
            ? (addressLine3 = officeCity.addressLine2)
            : (addressLine3 = "");
          let addressLine4;
          officeCity.addressLine4 != null && officeCity.addressLine4 != ""
            ? (addressLine4 = officeCity.addressLine4)
            : (addressLine4 = "");
          // Through this we can get all the states offices list.
          let addressMap = `${officeCity.addressLine1} ${officeCity.cityName} ${officeCity.stateProvinceCode} ${officeCity.postalZipCode}`;
          let googleaddress = addressMap.replace(" ", "%20");
          officeLists += `
          <div class="c-location-listing__region-office">
          <h4 class="c-location-listing__region-office-city">${officeCity.cityName}</h4> 
          <a class="c-location-listing__region-office-address" href="http://maps.google.com/maps?q=${googleaddress}" target="_blank">${officeCity.addressLine1} ${addressLine2}  ${addressLine3} ${addressLine4} <br>
          ${officeCity.cityName} ,  ${officeCity.stateProvinceCode}  ${officeCity.postalZipCode} 
          </a>
          <div class="c-location-listing__region-office-contact">
          <a class="c-location-listing__region-office-contact-phone" href="tel: ${officeCity.telephoneNumber} " title="tel. number: ${officeCity.telephoneNumber}">  ${officeCity.telephoneNumber}</a>
          <a class="c-location-listing__region-office-contact-email" href="mailto:${officeCity.email}" title="email:${officeCity.email}">Email</a>
          </div>
          <div class="c-location-listing__region-office-fax-number">Fax: ${officeCity.faxNumber}
          </div>
          </div>`;
        }
        officeStates += `
        <div class="c-location-listing__region" id="${officeRegion.name}">
        <div class="c-location-listing__region-title">
        <h3 class="c-location-listing__region-name">${officeRegion.name}</h3>
        </div> 
        <div class="c-location-listing__region-wrapper"> ${officeLists}</div>
        </div>
        `;

        officedropdown += `<button class="offices-location__dropdown_container-list-items" data-ref="${officeRegion.name}">${officeRegion.name}</button>`;
        let showItems = () => {
          let button = document.querySelector(
            ".offices-location__dropdown_container_trigger-items"
          );
          button.addEventListener("click", () => {
            let list = document.querySelector(
              ".offices-location__dropdown_container-Items-menu"
            );
            list.classList.toggle("show");
          });
        };
        showItems();
      }
      // console.log(officedropdown);
      let showData = document.querySelectorAll(
        ".offices-location__dropdown_container"
      );
      showData.innerHTML = officedropdown;
    }

    // here all the data from javascript first render into web page dynamically as a HTML.
    dropdownList.innerHTML = officedropdown;
    allOffices.innerHTML = officeStates;

    let showCities = () => {
      document
        .querySelectorAll(".offices-location__dropdown_container-list-items")
        .forEach((target) => {
          target.addEventListener("click", (event) => {
            const target = event.currentTarget;
            const currentId = target.getAttribute("data-ref");
            // dynamically change the selected city name in place of other text.
            document.getElementById("text").innerText = currentId;

            let crossBtn = document.querySelector(
              ".offices-location__dropdown_container_cross"
            );
            crossBtn.addEventListener("click", () => {
              console.log("cross clicked");
              document
                .querySelectorAll(".c-location-listing__region")
                .forEach((activeElm) => {
                  activeElm.classList.remove("hide");
                  if (document.getElementById("text").innerText === currentId) {
                    document.getElementById("text").innerText = "narrow";
                  }
                });
              document
                .querySelector(".offices-location__dropdown_container_cross")
                .classList.remove("show-btn");
            });
            crossBtn.classList.add("show-btn");
            document
              .querySelector(".offices-location__dropdown_container-Items-menu")
              .classList.remove("show");

            document
              .querySelectorAll(".c-location-listing__region")
              .forEach((value) => {
                value.classList.add("hide");
              });

            // document
            //   .getElementById(currentId)
            //   .classList.add("c-location-listing__region-active");
            document.getElementById(currentId).classList.remove("hide");
          });
        });
    };
    showCities();
  }
};
export default showOfficeListing;

// const officeJson = require("./office-listing.json");
// let showOfficelist = () => {
//   officeJson.map(item =>{
//     console.log(item.country)
//     item.country.states.map(states=>[
//         states.offices.map(officeName => {
//         console.log(states)

//             console.log(officeName);
//             return `

//             `
//         })
//     ])
//   })

// };

// export default showOfficelist;
