(function(){
    var app = angular.module('store', []);

    app.controller("ReviewController", function() {
        this.review = {};
        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

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
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"

                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "boeb@thomas.net"
                }]
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
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author: "joe@thomas.com"

                },
                {
                    stars: 1,
                    body: "This product sucks!",
                    author: "boeb@thomas.net"
                }]

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

    app.directive('productTitle', function () {
        return{
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('promTitle', function () {
        return{
            restrict: 'A',
            templateUrl: ''
        };
    });
    app.directive('productPanels', function () {
        return{
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller:function(){

            },
            controllerAs: 'panels'
        };
    });

})();
