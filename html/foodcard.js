const Food = [
  {
    img: "img",
    name: "Amok",
    description: "Fish sugar dsih",
    price: "15$",
  },
];

function Foodmenu() {
  const foodData = " ";
  for (const f of Food) {
    foodData += `
             <div class="item" data-category="khfood">
              <div class="img">
                <img src="${f.img}">
              </div>
              <div class="f-name">
                <div class="txt"><h2>${f.name}</h2></div>
                <div class="icon">star icon</div>
              </div>
              <div class="desc">
                <p>
                    ${f.description}
                </p>
              </div>
              <div class="price-btn">
                <div class="price"><p>${f.price}</p></div>
                <div class="btn">Book Now</div>
              </div>
            </div>
        `;
    document.querySelector(".items").innerHTML = foodData;
  }
}
Foodmenu();

console.log("he");
