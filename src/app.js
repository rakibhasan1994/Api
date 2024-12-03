const searchMeal = document.getElementById("input");
const search = document.getElementById("search");


function fetchMeal(){
    if(searchMeal.value){
        let url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`;
        fetch(url)
        .then((res) => res.json())
        .then((meals) => showMeal(meals.meals));
        document.getElementById("no-meal").style.display = "none"
    }else{
        alert("Search for a food first");
        document.getElementById("no-meal").style.display = "block";
    }
}

function showMeal(meals){
    console.log(meals);
    for (let meal of meals){
        document.querySelector(".meal-wraper").innerHTML += `
        <div class="meal-box border border-gray-500 rounded-xl">
            <img src=${meal.strMealThumb}
            alt=${meal.strMeal}
            <h3 class="heading">${meal.strMeal}</h3>
            <p class="text-gray-400 my-2">${meal.strInstructions.slice(0,100)}</p>
            <p><span>${meal.strArea}</span><span>${meal.strCategory}</span></p>
            <a href=""></a>
            <button></button>
        </div>
        `
    }
}

search.addEventListener("click", ()=> {
    fetchMeal();
})