const menuList = [
    {
        id: 1,
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmão com cítricos',
        price: 65.00,
        image: 'carpaccioFresco.jpg'
    },
    {
        id: 2,
        name: 'Risotto de berinjela',
        description: 'Risotto de berinjela e queijo de cabra',
        price: 47.00,
        image: 'risotoBerinjela.jpg'
    },
    {
        id: 3,
        name: 'Mousse de arroz',
        description: 'Mousse de arroz com leite e aroma de flor de laranjeira',
        price: 27.00,
        image: 'mousseArroz.jpg'
    },
    {
        id: 4,
        name: 'Aspargos brancos',
        description: 'Aspargos brancos com vinagrete de legumes e presunto ibérico',
        price: 37.00,
        image: 'aspargoBranco.jpg'
    },
    {
        id: 5,
        name: 'Torta de frango',
        description: 'Torta de frango com presunto, queijo e palmito',
        price: 15.00,
        image: 'tortaFrango.jpg'
    }
]


const menuController = {
    getHomePage: (req, res) => {
        res.render('index', { menu: menuList});
    },

    getDetails: (req, res) => {
        const { id } = req.params;
        const menu = menuList.find(item => item.id === Number(id));

        res.render('detalheMenu', { menu });
    }
   }

module.exports = menuController