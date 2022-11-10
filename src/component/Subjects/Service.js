import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectCard from './SubjectCard';

const Service = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        fetch('https://assignment-server-11-flax.vercel.app/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-center mt-8'>Subjects</h2>
            <div className='flex justify-center'>
                <div className='grid md:grid-cols-1 lg:grid-cols-3  grid-cols-1 mt-8'>
                    {
                        subjects.map(subject => <SubjectCard
                            key={subject._id}
                            subject={subject}
                        ></SubjectCard>)
                    }
                </div>
            </div>
            <div className='text-center my-10'>
                <Link to='/allsubjects'> <button className='btn btn-primary text-center'>See All</button> </Link>
            </div>

        </div>
    );
};

export default Service;