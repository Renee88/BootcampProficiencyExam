const render = new Renderer()

$("#search").on("click", function(){
   let ingredient = $("#ingredient").val()
       $.get(`/recipes/${ingredient}`, function(recipes){
            render._renderRecipes(recipes)
       })
})

$("#recipes-container").on("click","img",function(){
    let firstIngredientHTML = $(this).siblings("ul").find("li")[0]
    let firstIngredient = firstIngredientHTML.innerHTML
    console.log(firstIngredient)
})