import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllsubjectCard from './AllsubjectCard';

const AllSubjects = () => {
    const allsubjects = useLoaderData()
    return (
        <div>
            <h2 className='text-4xl my-10 text-center'>All Subjects</h2>
            <div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 ml-14'>
                {
                    allsubjects.map(allSubject => <AllsubjectCard
                        key={allSubject._id}
                        allSubject={allSubject}
                    ></AllsubjectCard>)
                }
            </div>
        </div>
    );
};

export default AllSubjects;