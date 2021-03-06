(function() {
    namespace.routes = [
        // Shop endpoint
        {
            url: '',
            template: '/partials/customs.hotels.hotels',
            controller: 'HotelListingCtrl',
            reloadOnSearch: false
                // template: '/partials/posts',
                // controller: 'PostCtrl'
        },
        {
            url: 'recommendations',
            template: '/partials/customs.recommendations.index',
            controller: 'RecommendationListingCtrl'
            
                // template: '/partials/posts',
                // controller: 'PostCtrl'
        },
        {
            url: 'hotels/create',
            template: '/partials/customs.hotels.create',
            controller: 'HotelCreateCtrl'
                // template: '/partials/posts',
                // controller: 'PostCtrl'
        },
        {
            url: 'hotel/:id',
            template: '/partials/customs.hotels.create',
            controller: 'HotelCreateCtrl'
                // template: '/partials/posts',
                // controller: 'PostCtrl'
        },
        {
            url: 'hotels/:id',
            template: '/partials/customs.hotels.create',
            controller: 'HotelCreateCtrl'
                // template: '/partials/posts',
                // controller: 'PostCtrl'
        }, {
            url: 'shops',
            template: '/partials/customs.shops.shops',
            controller: 'ShopListingCtrl',
            reloadOnSearch: false
        },
        // Customer
        {
            url: 'customers',
            template: '/partials/customs.customers.listing',
            controller: 'CustomerListingCtrl',
            reloadOnSearch: false
        },
        // Comment
        {
            url: 'bookings',
            template: '/partials/customs.booking.listing',
            controller: 'BookingListingCtrl',
            reloadOnSearch: false
        },
        // Coupon management
        {
            url: 'coupons',
            template: '/partials/customs.coupons.listing',
            controller: 'CouponListingCtrl',
            reloadOnSearch: false
        },
        {
            url: 'coupons/:shop',
            template: '/partials/customs.coupons.listing',
            controller: 'CouponListingCtrl',
            reloadOnSearch: false
        },
        {
            url: 'coupons/:shop/create',
            template: '/partials/customs.coupons.create',
            controller: 'CouponCreateCtrl',
            reloadOnSearch: false
        },
        {
            url: 'coupons/:shop/:id',
            template: '/partials/customs.coupons.create',
            controller: 'CouponCreateCtrl',
            reloadOnSearch: false
        },
        {
            url: 'promotions',
            template: '/partials/customs.coupons.listing',
            controller: 'CouponListingCtrl',
            reloadOnSearch: false
        },
        {
            url: 'promotions/:shop',
            template: '/partials/customs.coupons.listing',
            controller: 'CouponListingCtrl',
            reloadOnSearch: false
        },
        {
            url: 'promotions/:shop/create',
            template: '/partials/customs.coupons.create',
            controller: 'CouponCreateCtrl',
            reloadOnSearch: false
        },
        {
            url: 'promotions/:shop/:id',
            template: '/partials/customs.coupons.create',
            controller: 'CouponCreateCtrl',
            reloadOnSearch: false
        },
        // Coupon management
        {
            url: 'advertisements',
            template: '/partials/customs.advertisements.listing',
            controller: 'AdvertisementListingCtrl',
            reloadOnSearch: false
        },
        {
            url: 'advertisements/create',
            template: '/partials/customs.advertisements.create',
            controller: 'AdvertisementCreateCtrl',
            reloadOnSearch: false
        },
        {
            url: 'advertisements/:id',
            template: '/partials/customs.advertisements.create',
            controller: 'AdvertisementCreateCtrl',
            reloadOnSearch: false
        },
        // Slider management
        {
            url: 'sliders',
            template: '/partials/customs.sliders.create',
            controller: 'SliderCreateCtrl',
            reloadOnSearch: false
        },
        // Item dimension 
        {
            url: 'dimensions/:type',
            template: '/partials/customs.dimensions.listing',
            controller: 'DimensionListingCtrl'
        },
        {
            url: 'posts/create',
            template: '/partials/create-post',
            controller: 'AppCtrl'
        }, {
            url: 'posts/:id',
            template: '/partials/create-post',
            controller: 'AppCtrl'
        }, {
            url: 'posts/:id/locale/:locale',
            template: '/partials/create-post',
            controller: 'AppCtrl'
        }, {
            url: 'posts',
            template: '/partials/posts',
            controller: 'PostCtrl'
        },
        /*{
		url: 'articles/:hash',
		template: '/partials/create-article',
		controller: 'ArticleCtrl'
	}, {
		url: 'articles',
		template: '/partials/articles',
		controller: 'ArticleListCtrl'
	},{
		url: 'collections/:hash',
		template: '/partials/create-collection',
		controller: 'CollectionCtrl'
	}, {
		url: 'collections',
		template: '/partials/collections',
		controller: 'CollectionListCtrl'
	}, */
        {
            url: 'media',
            template: '/partials/media',
            controller: 'MediaCtrl'
        }, {
            url: 'menu/manage',
            template: '/partials/menu',
            controller: 'MenuCtrl'
        }, {
            url: 'pages',
            template: '/partials/pages',
            controller: 'PageCtrl'
        }, {
            url: 'categories/manage',
            template: '/partials/categories',
            controller: 'CategoryCtrl'
        }, {
            url: 'types/manage',
            template: '/partials/types',
            controller: 'TypeCtrl'
        }, {
            url: 'site',
            template: '/partials/site',
            controller: 'SiteCtrl'
        }, {
            url: 'messages',
            template: '/partials/messages',
            controller: 'MessageCtrl'
        }, {
            url: 'products',
            template: '/partials/customs.products',
            controller: 'ProductCtrl'
        }, {
            url: 'products/:id',
            template: '/partials/customs.product-sections',
            controller: 'ProductSectionCtrl'
        }, {
            url: 'products/:id/sections/:sectionId/articles/:hash',
            template: '/partials/customs.product-article',
            controller: 'ProductArticleCtrl'
        }, {
            url: 'functions',
            template: '/partials/customs.solutions',
            controller: 'SolutionCtrl'
        }, {
            url: 'functions/:typeId/articles/:hash',
            template: '/partials/customs.product-article',
            controller: 'ProductArticleCtrl'
        }, {
            url: 'files',
            template: '/partials/customs.files',
            controller: 'FileCtrl'
        }, {
            url: 'posts/items/:category',
            template: '/partials/posts',
            controller: 'PostCtrl'
        }, {
            url: 'posts/items/:category/:kind',
            template: '/partials/posts',
            controller: 'PostCtrl'
        }, {
            url: 'posts/:typeId/:categoryId/create',
            template: '/partials/create-post',
            controller: 'AppCtrl'
        }, {
            url: 'posts/:typeId/:categoryId/:id',
            template: '/partials/create-post',
            controller: 'AppCtrl'
        }
    ];
}());