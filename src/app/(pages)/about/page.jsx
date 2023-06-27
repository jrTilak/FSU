import React from 'react'
import AboutFSU from '@/components/AboutPage/AboutDesc'
import MemberDetail from '@/components/AboutPage/MemberDetail'
import members from "../../../../public/json/members.json"

const About = () => {
    return (
        <>
            <div className="pt-20">
                <AboutFSU
                    title="About Us"
                    desc="The Free Student Union (FSU) is a prominent organization dedicated to advocating for the rights and welfare of students at IOE Purwanchal Campus Dharan. Established with the vision of ensuring a free and inclusive educational environment, we operate as an independent body, separate from political affiliations, aiming to represent the interests of students within the campus. We play a vital role in addressing issues related to education, student rights, and social justice. We actively engage in promoting academic freedom, fostering student empowerment, and safeguarding democratic values within IOE Purwanchal Campus Dharan. By organizing various campaigns, seminars, and workshops, we strive to create awareness among students about their rights and responsibilities while also encouraging their active participation in the democratic process. zFurthermore, we serve as a platform for students to voice their concerns and grievances. We act as a bridge between students and the administration of IOE Purwanchal Campus Dharan, advocating for better infrastructure, improved learning environments, and accessible education for all. Through our efforts, we aim to create a conducive atmosphere for academic growth and personal development, ensuring that student&apos;s voices are heard and their needs are addressed effectively within the campus."
                    float="right"
                    headingCss=""
                />
                <AboutFSU
                    title="Our Works"
                    desc=" We at IOE Purwanchal Campus Dharan are committed to promoting the rights and interests of students. We work to improve the quality of education  and protect the rights of students on campus. We are also involved in social and political activism, having campaigned for issues such as democracy, human rights, and environmental protection. We envision a campus where all students have the opportunity to achieve their full potential and are free to learn, participate in democratic processes, and make a positive contribution to society. We achieve this through a variety of activities, including providing scholarships and financial assistance to students, organizing protests and demonstrations on issues such as democracy, human rights, and environmental protection, advocating for the rights of students on campus, promoting the quality of education, and organizing cultural and sports events."
                    float="left"
                    headingCss="md:text-end"
                />
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-6"></hr>
            <MemberDetail details={members} />
        </>
    )
}

export default About