const { Artist, Category, Location, Product, Photo, CategoryProduct }  = require('../db.js');

const  setAllDb = async() => {

    // Artistas
    const artists = [
        {
            name: "Symphony Serenade"
        },
        {
            name: "The Music Virtuosos"
        },
        {
            name: "Harmonic Harmony"
        },
        {
            name: "Grand Orchestra"
        },
        {
            name: "The Majestic Ensemble"
        },
        {
            name: "DJ Synapse"
        },
        {
            name: "The Sound Architect"
        },
        {
            name: "Electro Visionary"
        },
        {
            name: "Bass Innovator"
        },
        {
            name: "Rabbit Mechanic"
        },
        {
            name: "Groove Avenue"
        },
        {
            name: "The Jazz Underground"
        },
        {
            name: "The Sound Makers"
        },
        {
            name: "Nightfall Quartet"
        },
        {
            name: "Soulful Rhapsody"
        },
        {
            name: "Starlight Symphony"
        },
        {
            name: "The Pop Sensations"
        },
        {
            name: "Electric Hearts"
        },
        {
            name: "Future Rhythms"
        },
        {
            name: "Dream Pop Collective"
        },
        {
            name: "Argento´s Riffs"
        },
        {
            name: "La Banda Rebelde"
        },
        {
            name: "La Poderosa Social Club"
        },
        {
            name: "Rock del Sur"
        },
        {
            name: "Corazones Salvajes"
        },
        {
            name: "La Orquesta de Juan Dominguez"
        },
        {
            name: "Cuarteto Porteño"
        },
        {
            name: "Corazón Dos por Cuatro"
        },
        {
            name: "Tangos del barrio"
        },
        {
            name: "Vientos de Buenos Aires"
        },
    ];
    
    await Artist.bulkCreate(artists);  


    // Categorias
    const categories = [
        {
            name: "Clásica"
        },
        {
            name: "Electrónica"
        },
        {
            name: "Jazz"
        },
        {
            name: "Pop"
        },
        {
            name: "Rock"
        },
        {
            name: "Tango"
        },
    ];

    await Category.bulkCreate(categories);

    // Lugares
    const locations = [
        {
            name: "Yazz concert club",
            address: 'Av. san Martin 4567'
        }
    ];

    await Location.bulkCreate(locations);

    const products = [
        {
            locationId: 1,
            artistId: 1,
            name: 'Symphony Serenade Return',
            description: 'Bienvenidos al concierto de música clásica del trío Symphony Serenade. Esta noche, tendremos la oportunidad de escuchar algunos de los compositores más famosos de todos los tiempos, como Beethoven, Mozart y Tchaikovsky',
            startDate: '2023-03-02',
            endDate: '2023-03-02',
            startTime: '12:00:00',
            stock: 500,
            price: 1500,
            categories : [
                {
                    id : 1
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 2,
            name: 'The Music Virtuosos Show',
            description: 'The Music Virtuosos te invita a una noche de música clásica de alto nivel. Con nuestros solistas de renombre y nuestro director, te llevaremos en un viaje a través de la historia de la música, desde la época barroca hasta la época clásica.',
            startDate: '2023-03-03',
            endDate: '2023-03-03',
            startTime: '13:00:00',
            stock: 550,
            price: 1600,
            categories : [
                {
                    id : 1
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 3,
            name: 'Harmonic Harmony Return',
            description: 'Harmonic Harmony te invita a una noche de música en vivo, con obras de los compositores más importantes de la historia. Desde el Concerto para Violín de Bach hasta la Sinfonía No. 9 de Beethoven',
            startDate: '2023-03-04',
            endDate: '2023-03-04',
            startTime: '14:00:00',
            stock: 560,
            price: 2500,
            categories : [
                {
                    id : 1
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 4,
            name: 'Grand Orchestra In Concert',
            description: 'Grand Orchestra te invita a una noche única de música clásica. Con nuestro talentoso grupo de músicos y nuestro repertorio de algunos de los compositores más grandes de la historia',
            startDate: '2023-03-05',
            endDate: '2023-03-05',
            startTime: '15:00:00',
            stock: 1200,
            price: 4500,
            categories : [
                {
                    id : 1
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 5,
            name: 'The Majestic Ensemble Show',
            description: 'The Majestic Ensemble te ofrece una noche de música que nunca olvidarás. Con un programa que incluye algunas de las obras más famosas de la historia, como la Novena Sinfonía de Beethoven y la Sinfonía No. 40 de Mozart',
            startDate: '2023-03-06',
            endDate: '2023-03-06',
            startTime: '16:00:00',
            stock: 1100,
            price: 500,
            categories : [
                {
                    id : 1
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },

        // ---------------------------------------
        {
            locationId: 1,
            artistId: 6,
            name: 'DJ Synapse Pool Party',
            description: 'Bienvenidos a una experiencia musical sin igual, donde la electrónica y la pasión por la música se unen para crear algo único y sorprendente. ¡Prepárense para bailar y disfrutar!',
            startDate: '2023-03-07',
            endDate: '2023-03-07',
            startTime: '17:00:00',
            stock: 1150,
            price: 1500,
            categories : [
                {
                    id : 2
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 7,
            name: 'The Sound Architect',
            description: 'The Sound Architect nos regala un evento especial para todos los amantes de la música y la energía que se siente en el aire',
            startDate: '2023-03-02',
            endDate: '2023-03-02',
            startTime: '18:00:00',
            stock: 1500,
            price: 3500,
            categories : [
                {
                    id : 2
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 8,
            name: 'Electro Visionary Live',
            description: 'Si te encanta la música que hace vibrar el cuerpo y la mente, entonces Electro Visionary es la opción correcta. La banda electrónica es conocida por sus ritmos infecciosos y su capacidad de crear un ambiente de fiesta.',
            startDate: '2023-03-06',
            endDate: '2023-03-06',
            startTime: '12:00:00',
            stock: 1100,
            price: 500,
            categories : [
                {
                    id : 2
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 9,
            name: 'Bass Innovator',
            description: 'Ven a descubrir un sonido único y una energía vibrante que solo la música electrónica puede ofrecer. Bass Innovator ha preparado un set lleno de sorpresas y emoción para ti.',
            startDate: '2023-03-16',
            endDate: '2023-03-16',
            startTime: '18:00:00',
            stock: 1200,
            price: 1500,
            categories : [
                {
                    id : 2
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 10,
            name: 'Rabbit Mechanic Concert',
            description: 'Te invitamos a sumergirte en un mundo de sonidos electrónicos, donde la música te llevará a un viaje sin fin de diversión y alegría. Rabbit Mechanic está lista para hacer que este momento sea inolvidable.',
            startDate: '2023-03-10',
            endDate: '2023-03-10',
            startTime: '19:00:00',
            stock: 1700,
            price: 3400,
            categories : [
                {
                    id : 2
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },

        // -----
        {
            locationId: 1,
            artistId: 11,
            name: 'Groove Avenue Concert',
            description: '¡Bienvenidos al concierto de música en vivo! Prepárense para experimentar la magia de la improvisación en su máxima expresión.',
            startDate: '2023-03-11',
            endDate: '2023-03-11',
            startTime: '19:30:00',
            stock: 1700,
            price: 3400,
            categories : [
                {
                    id : 3
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },

        {
            locationId: 1,
            artistId: 12,
            name: 'The Jazz Underground',
            description: 'La música es un arte que evoca emociones y sentimientos, y en este concierto, tendrás la oportunidad de experimentar la libertad y la creatividad que se encuentra en la improvisación.',
            startDate: '2023-03-09',
            endDate: '2023-03-09',
            startTime: '13:00:00',
            stock: 1600,
            price: 3100,
            categories : [
                {
                    id : 3
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 13,
            name: 'The Sound Makers Return',
            description: 'Si eres un apasionado de la música, no te pierdas esta oportunidad única de escuchar a los músicos más talentosos e innovadores del momento, donde la improvisación juega un papel fundamental en su arte.',
            startDate: '2023-03-13',
            endDate: '2023-03-13',
            startTime: '11:00:00',
            stock: 1500,
            price: 1400,
            categories : [
                {
                    id : 3
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 14,
            name: 'Nightfall Quartet Concert',
            description: 'La música es un idioma universal, y en este concierto, tendrás la oportunidad de conectarte con la música de una manera totalmente nueva. La improvisación será la guía en un viaje musical único e inolvidable.',
            startDate: '2023-03-14',
            endDate: '2023-03-14',
            startTime: '15:30:00',
            stock: 1650,
            price: 2400,
            categories : [
                {
                    id : 3
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },
        {
            locationId: 1,
            artistId: 15,
            name: 'Soulful Rhapsody Return',
            description: 'La música es una forma de comunicación sin barreras, y en este concierto, la orquesta Soulful Rhapsody te invita a unirte a ellos en una aventura musical llena de creatividad, libertad y, sobre todo, improvisación',
            startDate: '2023-03-16',
            endDate: '2023-03-16',
            startTime: '19:00:00',
            stock: 1700,
            price: 3400,
            categories : [
                {
                    id : 3
                },
            ],

            photo : [
                {
                    path: 'c:',
                }
            ]
        },

    ];

    for (const product of products) {
        c = await Product.create(product);

        for (const category of product.categories) {
            await CategoryProduct.create({categoryId: category.id, productId: c.id})
        }

        for (const photo of product.photo) {
            p = await Photo.create({productId: c.id, path: photo.path})
        }
    }    

}

module.exports = { setAllDb };
