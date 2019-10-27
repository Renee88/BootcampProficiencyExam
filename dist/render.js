class Renderer {

    _renderRecipes(recipes){
        let source = $("#recipe-template").html()
        let template = Handlebars.compile(source)
        let recipesHTML = template({recipes})
        $("#recipes-container").append(recipesHTML)
    }
}