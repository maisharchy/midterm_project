function createCategoryCards() 
{
  fetch("./figurines.json")
    .then(response => response.json())
    .then(myCategories =>   
    {
      const colContainer = document.getElementById("col");
      myCategories.categories.forEach(category => 
        {
          const {title, price, pic, url} = category;
          const card = document.createElement("div");
          card.classList.add("card", "shadow-sm");
          card.innerHTML = `
            <img src="${pic}" class="card-img-top" alt="picture" width = "450" height = "600">
            <div class="card-body">
              <h3 class="card-text"><strong>${title}</strong>, ${price}</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="${url}" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
                </div>
              </div>
            </div>
          `;
          colContainer.appendChild(card);
        });
    });
}


function setBackgroundImage() 
{
  document.body.style.backgroundImage = "url('./images/anime.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}


window.onload = function() 
{
  createCategoryCards();
  setBackgroundImage();
};

