import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllsubjectCard from './AllsubjectCard';

const AllSubjects = () => {
    const allsubjects = useLoaderData()
    return (
        <div>
            <h2>{allsubjects.length}</h2>

            <div>
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