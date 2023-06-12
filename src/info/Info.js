import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(98, 208, 3)", "rgb(12, 122, 202)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Eetu",
    lastName: "Laine",
    initials: "el", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Junior Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🕹️',
            text: 'avid gamer'
        },
        {
            emoji: '🐶',
            text: 'loves dogs'
        },
        {
            emoji: '🌎',
            text: 'based in Finland'
        },
        {
            emoji: "💼",
            text: "Junior Developer at Digia through Academic Work"
        },
        {
            emoji: "📧",
            text: "eetulaine@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/eetulaine",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://www.instagram.com/esakaks/",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/eekaks",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/eetu-laine-bb949a230/",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/esapeipe",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Eetu. I'm a junior full stack developer at Digia through Academic Work. I used to teach high school English for 11 years and now I'm pursuing my dream in programming. Watch this space!",
    skills:
        {
            proficientWith: ['csharp', '.NET', 'reactjs', 'azure', 'python', 'sql', 'git', 'html', 'css'],
            exposedTo: [ 'typescript', 'angular', 'nodejs', 'vue']
        }
    ,
    hobbies: [
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'PC games',
            emoji: '🖥️'
        },
        {
            label: 'dogs',
            emoji: '🐶'
        },
        {
            label: 'sports',
            emoji: '👟'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Learning Diary",
            live: "https://learningdiary.herokuapp.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/eekaks/Learning_Diary_Full_Stack", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        {
            title: "Room of Terror",
            live: "https://www.youtube.com/watch?v=2Kje8GrCYE8", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/eekaks/Pygame-project", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Discover Helsinki",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/eekaks/W5_Project_Team7", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock3
        },
        {
            title: "Learning diary console app",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/eekaks/Learning_Diary_Console_Application", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock4
        },
    ]
}