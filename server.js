const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const request = require('request')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
    console.log('OK')
})

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient

    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        let recipes = response.body
        recipes = JSON.parse(recipes)
        let recipesArr = recipes.results
        let recipesForClient = recipesArr.map(r=>{return{
            title: r.title,
            href: r.href,
            thumbnail: r.thumbnail,
            ingredients: r.ingredients
        }})
        res.send(recipesForClient)
    })

})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`)
})