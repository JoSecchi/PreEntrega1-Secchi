const products = [
    {
        id: '1',
        title: 'Travel Bagpack',
        category:'Luggage',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UArthjaAf7IfBc8wnCTsJc5hQIZpq7TZvFD7g1xRTmPuvx24Pm9Pm34OVZLN7__YBE4&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '2',
        title: 'Suitcase',
        category:'Luggage',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_4gHx63bICpznh0-mNGEh-GcdtJE3aV96A&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '3',
        title: 'Carry-ons',
        category:'Luggage',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o-aKhOr4b4dahxn5tLBvS-gKmXT2hvYcmA&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '4',
        title: 'Universal Travel Adapter',
        category:'Accesories',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhg9S_OGsYMoF0YmxSM2kG9LPHnhKzGZ5DgtHHFvr8eHweTmd3xOcfkIk-a_DN0rb5LFs&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '5',
        title: 'Powerbank',
        category:'Accesories',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdV7uT9tdDQfXZRWkHP7T4PzeDmOe5xhakwg&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '6',
        title: 'Travel Organizer Bag',
        category:'Accesories',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DWqKRCmrRBHcmYDRnD_RcKg67XNRnSAq0C6QsZcrkos_4ljcmrN0JaSZPtbM51upcD8&usqp=CAU' ,
        price:'',
        stock: 10,
    },
    {
        id: '7',
        title: 'Cable Organizer',
        category:'Accesories',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PiUXyDBUN4XGSIcU-nTJS3X06QK9Dx4htA&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '8',
        title: 'The North Face Jacket',
        category:'Clothing',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMen8kdIPo62X25sFKhrpTDUfp3aXnoiLpaw&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '9',
        title: 'Bucket Hat',
        category:'Clothing',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJFdWdfkyj-Hd_vYIfjvWo-ew1oif3O0GAQ&usqp=CAU',
        price:'',
        stock: 10,
    },
    {
        id: '10',
        title: 'Mens Swim Shorts',
        category:'Clothing',
        description: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqnkDT2YZm_pOqGADECaN9ruuYo9ewESi9A&usqp=CAU' ,
        price:'',
        stock: 10,
    },
];

export const getProducts = ()=> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 300)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}