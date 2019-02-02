const express = require('express');
const app = express();

app.use(cors())


const skillShare = [
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'

    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/forgotten.jpeg'
    }
    
]


app.get('/getskillshare', (req, res) => {
    res.json({skillShare})
})

app.listen('8081',()=>{
    console.log('started')
})