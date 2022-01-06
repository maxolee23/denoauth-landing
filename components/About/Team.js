import React from 'react';
import TeamMember from './TeamMember';
import profilepic from '../../public/profilepic.png';
import mattprof from '../../public/mattprof.png';
import danprof from '../../public/danprof.png';
import nickprof from '../../public/nickprof.png';

const Team = () => {
    const team = [
        {
            id: 1,
            name: 'Max Lee',
            bio: 'Max is a full stack software engineer from Houston, TX. He loves to build open source developer tools to help make other engineers\' lives easier. He is also a basketball fanatic, and he loves to mountain bike. In his free time, you\'ll probably catch him shooting hoops in the gym or having fun on the trails.',
            img: profilepic,
            github: 'https://github.com/maxolee23/',
            linkedIn: 'https://www.linkedin.com/in/max-lee1'
        },
        {
            id: 2,
            name: 'Matt Miller',
            bio: "Matt is a full stack software engineer from Rochester, NY who enjoys building apps with friends. He loves exploring new technologies and finding ways to enhance developer experiences. He also enjoys hosting and playing in DND Campaigns on weekends.",
            img: mattprof,
            github: 'https://github.com/matthewjohnmiller2020',
            linkedIn: 'https://www.linkedin.com/in/matthew-miller2020/'
        }, 
        {
            id: 3,
            name: 'Dan Nguyen',
            bio: 'Dan is a full-stack software engineer who thrives on learning and creating tech that focuses on upgrading and implementing information security. During downtime, you can usually find him organizing DND with his friends or catching up on the most critically acclaimed movies of the year.',
            img: danprof,
            github: 'https://github.com/Danlordrises',
            linkedIn: 'https://www.linkedin.com/in/danlord-nguyen/'
        },
        {
            id: 4,
            name: 'Nick Echols',
            bio: 'Nick is a full stack software engineer from Dallas, TX who enjoys solving puzzles and collaborating on projects. He also loves watching basketball, playing board games, and traveling.',
            img: nickprof,
            github: 'https://github.com/Nechols87',
            linkedIn: 'https://www.linkedin.com/in/nickechols87/'
        }
    ]
    return (
        <div className="text-center pt-10 bg-gray-50">
            <h1 className="text-3xl font-light">Meet the Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-2">
                {
                    team.map((el, key) => (
                        <TeamMember member={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Team; 

