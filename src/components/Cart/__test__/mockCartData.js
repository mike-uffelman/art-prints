export const initialCart = [
    {
        id: '1',
        product: {
            id: '1a',
            description: '1st product name',
            base_amt: '10.00',
            alt_description: '1st product description',
            height: 4917,
            image_urls: {
                raw: 'asdf',
                full: 'asdf',
                regular: 'asdf',
                thumb: 'asdf',
                small_s3: 'asdf',
                small: 'asdf'
            },
            likes: '30',
            orientation: 'portrait',
            owner: {
                name: 'Owners Name',
                links: {
                    html: '"https://unsplash.com/ownersname'
                }
            },
            quantity_available: 10,
            review_count: 900,
            tags: [
                {
                    type: 'search',
                    title: 'tag1'
                },
                {
                    type: 'search',
                    title: 'tag2'
                }
            ],
            width: 3934
        },
        quantity: 1,
        size: {
            width: 9,
            height: 12,
            price_multiplier: 1
        }
    },
    {
        id: '2',
        product: {
            id: '2a',
            description: '2nd product name',
            base_amt: '15.00',
            alt_description: '2nd product description',
            height: 4917,
            image_urls: {
                raw: 'asdf',
                full: 'asdf',
                regular: 'asdf',
                thumb: 'asdf',
                small_s3: 'asdf',
                small: 'asdf'
            },
            likes: '30',
            orientation: 'portrait',
            owner: {},
            quantity_available: 10,
            review_count: 900,
            tags: [
                {
                    type: 'search',
                    title: 'tag3'
                },
                {
                    type: 'search',
                    title: 'tag4'
                }
            ],
            width: 3934
        },
        quantity: 1,
        size: {
            width: 9,
            height: 12,
            price_multiplier: 1
        }
    }
]