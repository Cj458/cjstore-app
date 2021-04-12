import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name: 'Caleb',
            email: 'Calebjason90@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
              name: 'Puma',
              logo: '/images/logo1.png',
              description: 'best seller',
              rating: 4.5,
              numReviews: 120,
            },
          },
          {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
    ],
    products:[
        {
           
            name:'Dr. Martens',
            category:'Shoes',
            image:'/images/p1.jpg',
            price: 120,
            countInStock:10,
            brand:'Dr. Martens',
            rating: 4,
            numReviews: 10,
            description:'High quality shoe',
        },

        {
          
            name:'Balenciaga',
            category:'Shoes',
            image:'/images/p2.jpg',
            price: 120,
            countInStock:9,
            brand:'Balenciaga',
            rating: 5,
            numReviews: 10,
            description:'High quality shoe',
        },
        {
            
            name:'Macbook Pro',
            category:'electronics',
            image:'/images/p3.jpg',
            price: 1200,
            countInStock: 20,
            brand:'Apple',
            rating: 5,
            numReviews: 16,
            description:'High quality laptop',
        },
        {
            
            name:'Iphone 12 pro max',
            category:'phones',
            image:'/images/p4.jpg',
            price: 999,
            countInStock: 20,
            brand:'Apple',
            rating: 5,
            numReviews: 10,
            description:'High quality phone',
        },
        {
            
            name:'Jordans',
            category:'shoes',
            image:'/images/p5.jpg',
            price: 220,
            countInStock: 12,
            brand:'Jordans',
            rating: 4,
            numReviews: 10,
            description:'High quality Shoe',
        },
    ],
};
export default data;