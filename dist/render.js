class Renderer {

    _renderRecipes(recipes){
        $("#recipes-container").empty()
        let source = $("#recipe-template").html()
        let template = Handlebars.compile(source)
        let recipesHTML = template({recipes})
        $("#recipes-container").append(recipesHTML)
    }
}