import Michael from '../assets/MichaelOne.jpg'
import Kris from '../assets/KrisOne.png'
import Laura from '../assets/LauraOne.jpg'
import Dale from '../assets/DaleOne.jpg'
import Dave from '../assets/DaveOne.jpg'
import Adam from '../assets/AdamOne.png'

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const memberInfo = [
    {
        id: 0,
        name: 'Michael King',
        credits: 'Karen Newman/Abbey Road Project/Majesty Walk',
        pic: Michael,
        websiteIcon: <TbWorld />,
        websiteLink: 'https://www.michaelkingmusic.com/',
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: <FaSpotify />,
        spotifyLink: 'https://open.spotify.com/album/7HWeP6mC0zJFQ3WMlbZ5sA?si=Md7uubnYT7eMgQGhX6KY9Q&nd=1&dlsi=2fc66425f79b499a',
        facebookIcon: <FaFacebookSquare />,
        facebookLink: 'https://www.facebook.com/mkingmusic',
        instagramIcon: false,
        instagramLink: false,
        soundCloundIcon: <FaSoundcloud />,
        soundCloudLink: 'https://soundcloud.com/mk123123',
        youtubeIcon: <IoLogoYoutube />,
        youtubeLink: 'https://www.youtube.com/@MajestyWalk-qx5fd',
        bio: "Michael King is a Detroit based multi instrumentalist Songwriter, Producer and Composer. He was a founding member of the band Press (with Liz Larin), He is the Music Director and Composer for Karen Newman and is a member of the Abbey Road Project.  Michael is also the creator , writer and producer for the new multi media / music project Majesty Walk."
    },
    {
        id: 1,
        name: 'Kris Kurzawa',
        credits: 'Alexander Zonjic/Jeff Lorber/The Kris Kurzawa Group',
        pic: Kris,
        websiteIcon: <TbWorld />,
        websiteLink: 'https://www.kriskurzawaguitar.com/',
        appleMusicIcon: <SiApplemusic />,
        appleMusicLink: 'https://music.apple.com/us/artist/kris-kurzawa/1071714493',
        spotifyIcon: <FaSpotify />,
        spotifyLink: 'https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx',
        facebookIcon: <FaFacebookSquare />,
        facebookLink: 'https://www.facebook.com/KrisKurzawaGuitar/',
        instagramIcon: <FaInstagramSquare />,
        instagramLink: 'https://www.instagram.com/k_kurzawa/',
        soundCloundIcon: false,
        soundCloudLink: false,
        youtubeIcon: <IoLogoYoutube />,
        youtubeLink: 'https://www.youtube.com/@kriskurzawa8133',
        bio: "Kris Kurzawa’s versatility has led him to become one of the Detroit area’s most in-demand guitarists since the early 2000s; crossing multiple genres including jazz, fusion, rock, world music, and R+B.  He released his first album ‘Sly’ in 2016 earning him his fifth Detroit Music Award.  He earned his bachelor's degree in 2003 and his master's degree in 2012 with a concentration in jazz studies from Wayne State University where his now adjunct faculty in their jazz studies program."
    },
    {
        id: 2,
        name: 'Laura Creamer',
        credits: 'Bob Seger/Eric Clapton/Bruce Hornsby',
        pic: Laura,
        websiteIcon: <TbWorld />,
        websiteLink: 'https://www.lauracreamer.com/',
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
        facebookIcon: <FaFacebookSquare />,
        facebookLink: 'https://www.facebook.com/laura.creamer.90/',
        instagramIcon: false,
        instagramLink: false,
        soundCloundIcon: false,
        soundCloudLink: false,
        youtubeIcon: false,
        youtubeLink: false,
        bio: 'Laura Creamer is a Detroit-born singer/songwriter who has toured and recorded with Bob Seger, Eric Clapton, Bruce Hornsby, The Black Crowes, Thomas Dolby, Eagles members: Glenn Frey and Joe Walsh, and many others. Her writing and vocals have been used on many albums, commercials, and music for film and TV.'
    },
    {
        id: 3,
        name: 'Dale Grisa',
        credits: 'Karen Newman/Jill Jack/Michael King',
        pic: Dale,
        websiteIcon: false,
        websiteLink: false,
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        soundCloundIcon: false,
        soundCloudLink: false,
        youtubeIcon: false,
        youtubeLink: false,
        bio: 'Consequat duis quis exercitation nulla id qui deserunt duis mollit voluptate incididunt commodo. Laborum eiusmod culpa nulla deserunt fugiat non irure. Sint in amet fugiat commodo est.'
    },
    {
        id: 4,
        name: 'Dave Henderickson',
        credits: 'Karen Newman/Jill Jack/The Tropohilics',
        pic: Dave,
        websiteIcon: <TbWorld />,
        websiteLink: 'http://davehendricksonmusic.com/',
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: <FaSpotify />,
        spotifyLink: 'https://open.spotify.com/artist/3I4q2EF5Q4jXNJzOmIjrZP?si=YIDZDUuvS8aLn1MycMD3Yg&nd=1&dlsi=c12ef38be8194052',
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        soundCloundIcon: false,
        soundCloudLink: false,
        youtubeIcon: false,
        youtubeLink: false,
        bio: "Dave is a musician, singer, songwriter, and producer.  He’s been described as “a bass player’s bass player”.  Artists hire him again and again for his professionalism.  From his earliest days picking up a bass in school and playing along with every Top 40 song on the radio through his time at the Berklee College of Music and Oakland University jazz departments, Dave has honed his skills in all styles of music from Big Band and Funk to Country, Jazz and more."
    },
    {
        id: 5,
        name: 'Adam James',
        credits: 'Karen Newman/Theo Gridiron/Stewart Franke',
        pic: Adam,
        websiteIcon: false,
        websiteLink: false,
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        soundCloundIcon: false,
        soundCloudLink: false,
        youtubeIcon: false,
        youtubeLink: false,
        bio: "Adam is a Detroit-area drummer/percussionist known for his versatility, performing every musical style from jazz and blues to rock and musical theater.  He has toured nationally, recorded for film and television and performed with such artists as Kim Wilson, Lazy Lester, The Tokens, Karen Newman, Stewart Franke and Theo Gridiron."
    }
]

export default memberInfo