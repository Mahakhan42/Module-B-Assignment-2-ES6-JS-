let cardArr = [
    {
        id: 0,
        title: "Hoodies",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smartfunctionality",
        image_url: "https://i.pinimg.com/originals/f8/de/ca/f8decaa116143002666cb2817c18cd67.jpg"
        },
        {
        id: 1,
        title: "Ergonomic Wooden Tuna",
        price: 743,
        description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        image_url: "https://www.bugatti-fashion.com/media/bug_magazin_ratgeber_slim-jeans2280x1200.jpg"
        },
        {
        id: 2,
        title: "Electronic Bronze Chips",
        price: 808,
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
        image_url: "https://themensden.pk/cdn/shop/products/Brown-Cap.jpg?v=1648656882"
        },
        {
        id: 3,
        title: "Awesome Bronze Car",
        price: 382,
        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        image_url: "https://images.customwheeloffset.com/original/1326372-1-2016-fr-s-scion-base-eibach-lowering-springs-adv1-av6-bronze.jpg"
        },
        {
        id: 4,
        title: "PRINTED MICKEY T-SHIRT",
        price: 745,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wN3upI9EQcUa-eFKDdL8W3G5ak_XhrsTCZspoxY8IaN71QIxI2YEshbryrRr7_J8CJI&usqp=CAU"
        },
  ];
  console.log(cardArr);
  
// *************************** FOREACH ******************
const cardRender = document.getElementById("cardsJS");
cardArr.forEach(cardsData =>{
    const {title,price,description,image_url} =cardsData; //Destructing Use
    cardRender.innerHTML += `
    <div class="card m-2 shadow-none p-3 mb-5 bg-light rounded" style="width: 18rem;">
    <img src=${image_url} class="card-img-top" style="height: 160px;" alt="...">
    <div class="card-body">
    <h6 class="price">Price: ${price}</h6>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    </div>
    </div>`
});

// *************************** MAP ******************
let cardsRun = document.getElementById("cardsRender");
cardArr.map(showCard => {
let {title,price,description,image_url}=showCard; //Destructing USE
cardsRun.innerHTML += `
<div class="card m-2 shadow-none p-3 mb-5 bg-light rounded" style="width: 18rem;">
<img src=${image_url} class="card-img-top" style="height: 160px;" alt="...">
<div class="card-body">
<h6 class="price">Price: ${price}</h6>
<h5 class="card-title">${title}</h5>
<p class="card-text">${description}</p>
</div>
</div>`
});

