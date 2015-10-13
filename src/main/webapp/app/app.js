(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: ' . . . ',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "resources/full.jpg",
                    thumb:'resourcesthumb.jpg'
                }
            ],
            images1: [
                "images/gem-02.gif",
                "images/gem-05.gif",
                "images/gem-09.gif"
            ],
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: ' . . . ',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'resources/full.jpg',
                    thumb:'resources/thumb.jpg'
                }
            ]

        }];

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
})();
