const mtg = require('mtgsdk')

function mtgCardFind() {

    mtg.card.find(3)
        .then(result => {
            console.log(result.card.name) // "Black Lotus"
        })
}