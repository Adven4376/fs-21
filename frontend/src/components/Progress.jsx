import React, { useState, useEffect } from 'react';

const Progress = () => {
    // State to track progress
    const [lecturesCompleted, setLecturesCompleted] = useState(0);
    const [assignmentsCompleted, setAssignmentsCompleted] = useState(0);

    // Function to handle click event when a lecture is marked as completed
    const handleLectureClick = () => {
        // Check if the maximum limit of lectures completed is reached
        if (lecturesCompleted < 4) {
            setLecturesCompleted(lecturesCompleted + 1);
        }
    };

    // Function to handle click event when an assignment is marked as completed
    const handleAssignmentClick = () => {
        // Check if the maximum limit of assignments completed is reached
        if (assignmentsCompleted < 3) {
            setAssignmentsCompleted(assignmentsCompleted + 1);
        }
    };

    return (
        <div>
            <h2>Progress</h2>
            <div>
                <h3>Lectures Completed: {lecturesCompleted}</h3>
                <ul>
                    <li onClick={handleLectureClick}>Lecture 1</li>
                    <li onClick={handleLectureClick}>Lecture 2</li>
                    <li onClick={handleLectureClick}>Lecture 3</li>
                    <li onClick={handleLectureClick}>Lecture 4</li>
                </ul>
            </div>
            <div>
                <h3>Assignments Completed: {assignmentsCompleted}</h3>
                <ul>
                    <li onClick={handleAssignmentClick}>Assignment 1</li>
                    <li onClick={handleAssignmentClick}>Assignment 2</li>
                    <li onClick={handleAssignmentClick}>Assignment 3</li>
                </ul>
            </div>
        </div>
    );
};

export default Progress;
