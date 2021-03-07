const provider = {
    getEasterEggs: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: [
                        {
                            imgSrc: "https://i.pinimg.com/736x/45/63/2b/45632bfeaf802a4b955ede90ef7634f6.jpg",
                            name: "Wooden Egg",
                            saleStartTime: 1618400441000,
                            mainColor: "82490b",
                            secondaryColor: "d4bb7e"
                        },
                        {
                            imgSrc: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/20a66ad9832fef4ad18737cb360000c7/2/6/26804_a.jpg",
                            name: "Chocolate Egg",
                            saleStartTime: 1618068315000,
                            mainColor: "200000",
                            secondaryColor: "84563c"
                        },
                        {
                            imgSrc: "https://previews.123rf.com/images/1enchik/1enchik1302/1enchik130200127/18013372-red-ornate-vector-easter-egg-with-floral-ornament.jpg",
                            name: "Red Egg",
                            saleStartTime: 1618038000000,
                            mainColor: "",
                            secondaryColor: ""
                        },
                        {
                            imgSrc: "https://previews.123rf.com/images/1enchik/1enchik1302/1enchik130200127/18013372-red-ornate-vector-easter-egg-with-floral-ornament.jpg",
                            name: "Red Egg",
                            saleStartTime: 1618038000000,
                            mainColor: "420612",
                            secondaryColor: "ae4d4d"
                        },
                        {
                            imgSrc: "https://m.media-amazon.com/images/I/51D+eJahgPL._AC_SL1168_.jpg",
                            name: "Blue Egg",
                            saleStartTime: 1618213241000,
                            mainColor: "1c4966",
                            secondaryColor: "45b6fe"
                        },
                        {
                            imgSrc: "https://p1.hiclipart.com/preview/518/75/726/easter-eggs-s-green-egg.jpg",
                            name: "Green Egg",
                            saleStartTime: 1617310799000,
                            mainColor: "136207",
                            secondaryColor: "a0e989"
                        },
                        {
                            imgSrc: "https://www.hearthsong.com/medias/sys_master/images/images/h37/h6f/8800746668062/726912x.jpg",
                            name: "Golden Egg",
                            saleStartTime: 1618347599000,
                            mainColor: "daa520",
                            secondaryColor: "f8edd2"
                        },
                        {
                            imgSrc: "https://ak1.ostkcdn.com/images/products/is/images/direct/22bd18779aed8b55814d47c21ed09762edc49d51/Netting-Imperial-Faberge-Egg---Jewelry-Box-in-Black.jpg",
                            name: "Faberge Egg",
                            saleStartTime: 1618941599000,
                            mainColor: "1c4966",
                            secondaryColor: "e1b74d"
                        }
                    ]
                });
            }, 300);
        });
    }
};

export { provider };
