import React from 'react';
import Image from 'next/image';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const TeamMember = ({member}) => {
    return (
        <div className="pt-5">
            <Image className="rounded-md" src={member.img} height={225} width={225} />
            <h1 className="text-xl">{member.name}</h1>
            <p className="text-xs px-20 md:px-16 pt-2 text-left">{member.bio}</p>
            <div className="flex justify-center pt-2 pb-4">
                <a href={member.linkedIn} target="_blank" className="px-5"><FaLinkedin className="h-10 w-10 md:h-14 md:w-14 text-[#0e76a8]"/></a>
                <a href={member.github} target="_blank" className="px-5"><FaGithub className="h-10 w-10 md:h-14 md:w-14"/></a>
            </div>
        </div>
    )
}

export default TeamMember;
