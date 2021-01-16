import img1 from "../assets/img/product/1.jpg";
import img2 from "../assets/img/product/2.jpg";
import img3 from "../assets/img/product/3.jpg";

export const fetchCategory = () => {
    return [
        {
            id: 1,
            name: "category 1",
            description: "description for category 1",
        },
        {
            id: 2,
            name: "category 2",
            description: "description for category 2",
        },
        {
            id: 3,
            name: "category 3",
            description: "description for category 3",
        },
    ];
};

export const fetchProductByCategory = (categoryId) => {
    if (categoryId === 1) {
        return [
            {
                name: "Product 1 cate 1",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 2 cate 1",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 3 cate 1",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 4 cate 1",
                price: 100.0,
                image: null,
            },
        ];
    }
    if (categoryId === 2) {
        return [
            {
                name: "Product 1 cate 2",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 2 cate 2",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 3 cate 2",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 4 cate 2",
                price: 100.0,
                image: null,
            },
        ];
    }
    if (categoryId === 3) {
        return [
            {
                name: "Product 1 cate 3",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 2 cate 3",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 3 cate 3",
                price: 100.0,
                image: null,
            },
            {
                name: "Product 4 cate 3",
                price: 100.0,
                image: null,
            },
        ];
    }
    return [];
};

export const fetchProducts = () => {
    const ps1 = [
        {
            name: "Product 1 cate 1",
            price: 100.0,
            image: null,
        },
        {
            name: "Product 2 cate 1",
            price: 100.0,
            image: null,
        },
        {
            name: "Product 3 cate 1",
            price: 100.0,
            image: null,
        },
        {
            name: "Product 4 cate 1",
            price: 100.0,
            image: null,
        },
    ];
    const ps2 = [
        {
            name: "Product 1 cate 2",
            price: 100.0,
            image: null,
        },
        {
            name: "Product 2 cate 2",
            price: 100.0,
            image: null,
        },
        {
            name: "Product 3 cate 2",
            price: 100.0,
            image: null,
        },
        // {
        //     name: "Product 4 cate 2",
        //     price: 100.0,
        //     image: null,
        // },
    ];
    const ps3 = [
        {
            name: "Product 1 cate 3",
            price: 100.0,
            image: null,
        },
        {
            name: "Product 2 cate 3",
            price: 100.0,
            image: null,
        },
        // {
        //     name: "Product 3 cate 3",
        //     price: 100.0,
        //     image: null,
        // },
        // {
        //     name: "Product 4 cate 3",
        //     price: 100.0,
        //     image: null,
        // },
    ];
    return [
        {
            id: 1,
            name: "Product basd",
            price: 100.0,
            mfg: "2020-12-24",
            exp: "2021-01-30",
            stock: 100,
            description: "Description for spcc",
            category: 1,
            images: [
                {
                    id: 1,
                    link: img1,
                    description: "Image of productProduct 03",
                },
                {
                    id: 2,
                    link: img2,
                    description: "Image of productProduct 03",
                },
                {
                    id: 3,
                    link: img3,
                    description: "Image of productProduct 03",
                },
            ],
        },
        {
            id: 2,
            name: "Product ancx",
            price: 800.0,
            mfg: "2020-12-24",
            exp: "2021-01-30",
            stock: 10,
            description: "Description for spcc",
            category: 2,
            images: [
                {
                    id: 1,
                    link: img1,
                    description: "Image of productProduct 03",
                },
                {
                    id: 2,
                    link: img2,
                    description: "Image of productProduct 03",
                },
                {
                    id: 3,
                    link: img3,
                    description: "Image of productProduct 03",
                },
            ],
        }
    ];
};

export const getSingleProduct = (productId) => {
    return {
        id: 1,
        name: "Product basd",
        price: 100.0,
        mfg: "2020-12-24",
        exp: "2021-01-30",
        stock: 100,
        description: "Description for spcc",
        category: 1,
        images: [
            {
                id: 1,
                link: img1,
                description: "Image of productProduct 03",
            },
            {
                id: 2,
                link: img2,
                description: "Image of productProduct 03",
            },
            {
                id: 3,
                link: img3,
                description: "Image of productProduct 03",
            },
        ],
    };
};

export const getAllProductEvaluates = (productId) => {
    return [
        {
            customerName: "customer 1",
            comment: "That's good!",
            value: 4,
        },
        {
            customerName: "customer 1",
            comment: "That's so good!",
            value: 5,
        },
        {
            customerName: "customer 1",
            comment: "That's ok!",
            value: 5,
        },
        {
            customerName: "customer 1",
            comment: "Need much better!",
            value: 3,
        },
    ];
};
