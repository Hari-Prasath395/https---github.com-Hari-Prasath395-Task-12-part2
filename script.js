document.addEventListener('DOMContentLoaded', () => {
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
      
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            const cardContainer = document.getElementById('card-container');
            data.meals.forEach(meal => {
              const card = document.createElement('div');
              card.classList.add('card');
              const img = document.createElement('img');
              img.classList.add('card-img-top');
              img.src = meal.strMealThumb;
              img.alt = meal.strMeal;
              const cardBody = document.createElement('div');
              cardBody.classList.add('card-body');
              const cardTitle = document.createElement('h5');
              cardTitle.classList.add('card-title');
              cardTitle.textContent = meal.strMeal;
              const cardText = document.createElement('p');
              cardText.classList.add('card-text');
              cardText.textContent = meal.strInstructions;
              cardBody.appendChild(cardTitle);
              cardBody.appendChild(cardText);
              card.appendChild(img);
              card.appendChild(cardBody);
              cardContainer.appendChild(card);
            });
          })
          .catch(error => {
            console.error('Error fetching meal information:', error);
          });
      });
      
    