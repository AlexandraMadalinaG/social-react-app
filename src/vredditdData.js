//import Users profilePictures 
import imgProfile1 from '../src/assets/img-profile1.jpeg';
import imgProfile2 from '../src/assets/img-profile2.jpeg';
import imgProfile3 from '../src/assets/img-profile3.jpeg';
import imgProfile4 from '../src/assets/img-profile4.jpeg';
import imgProfile5 from '../src/assets/img-profile5.jpeg';
import imgProfile6 from '../src/assets/img-profile6.jpeg';
import imgProfile7 from '../src/assets/img-profile7.jpeg';

//import Posts photo
import post1 from '../src/assets/post1.jpeg';
import post2 from '../src/assets/post2.jpeg';
import post3 from '../src/assets/post3.jpeg';
import post4 from '../src/assets/post4.jpeg';
import post5 from '../src/assets/post5.jpeg';
import post6 from '../src/assets/post6.jpeg';
import post7 from '../src/assets/post7.jpeg';





export const Users = [
    {
        id: 1,
        profilePictures: imgProfile1,
        userName: 'r/gaming',
    },

    {
        id: 2,
        profilePictures: imgProfile2,
        userName: 'r/kattymoda',
    },
    {
        id: 3,
        profilePictures: imgProfile3,
        userName: 'r/paolatiti',
    },
    {
        id: 4,
        profilePictures: imgProfile4,
        userName: 'r/traveluk',
    },
    {
        id: 5,
        profilePictures: imgProfile5,
        userName: 'r/mishagame',
    },
    {
        id: 6,
        profilePictures: imgProfile6,
        userName: 'r/painttheworld',
    },
    {
        id: 7,
        profilePictures: imgProfile7,
        userName: 'r/landscapeuk',
    },
];


export const Posts = [
    {
        id: 1,
        date: '5 mins ago',
        desc: 'I go to walk. I need some fresh air :)',
        userId: 1,
        photo: post1,
        like: 239,
        comment: 567,
        share: 89,
    },
    {
        id: 2,
        date: '10 hours ago',
        desc: 'Back to school',
        userId: 2,
        photo: post2,
        like: 789,
        comment: 430,
        share: 456,
    },
    {
        id: 3,
        date: '1 day ago',
        desc: 'Rome today is one of the most important tourist destinations of the world, due to the incalculable immensity of its archaeological and artistic treasures, as well as for the charm of its unique traditions, the beauty of its panoramic views, and the majesty of its magnificent villas (parks). Read more...',
        userId: 3,
        photo: post3,
        like: 1203,
        comment: 568,
        share: 1123,
    },
    {
        id: 4,
        date: '35 mins ago',
        desc: "Hello everyone! I'm here with the best cake in the world",
        userId: 4,
        photo: post4,
        like: 3459,
        comment: 789,
        share: 156,
    },
    {
        id: 5,
        date: '7 hours ago',
        desc: 'Autumn is here, my friends',
        photo: post5,
        userId: 5,
        like: 239,
        comment: 567,
        share: 675,
    },
    {
        id: 6,
        date: '2 days ago',
        desc: 'This is a beautiful destination for your next holiday',
        userId: 6,
        photo: post6,
        like: 239,
        comment: 967,
        share: 1275,
    },
    {
        id: 7,
        date: '15 mins ago',
        desc: 'This is my favourite workplace :)',
        userId: 7,
        photo: post7,
        like: 239,
        comment: 230,
        share: 95,
    },
];

