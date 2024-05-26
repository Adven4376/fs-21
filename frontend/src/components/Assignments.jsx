import React, { useEffect, useState } from 'react';
import './Assignments.css';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/assignments/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(data => setAssignments(data))
            .catch(error => setError('Failed to load assignments'));
    }, []);

    return (
        <div>
            <h2>Assignments</h2>
            <div>
                <h3>Python Assignments</h3>
                <ul>
                    <li><a href="LINK_TO_PYTHON_ASSIGNMENT_1">Python Assignment 1</a></li>
                    <li><a href="LINK_TO_PYTHON_ASSIGNMENT_2">Python Assignment 2</a></li>
                    <li><a href="LINK_TO_PYTHON_ASSIGNMENT_3">Python Assignment 3</a></li>
                </ul>
            </div>
            <div>
                <h3>Java Assignments</h3>
                <ul>
                    <li><a href="LINK_TO_JAVA_ASSIGNMENT_1">Java Assignment 1</a></li>
                    <li><a href="LINK_TO_JAVA_ASSIGNMENT_2">Java Assignment 2</a></li>
                    <li><a href="LINK_TO_JAVA_ASSIGNMENT_3">Java Assignment 3</a></li>
                </ul>
            </div>
            <div>
                <h3>C Assignments</h3>
                <ul>
                    <li><a href="LINK_TO_C_ASSIGNMENT_1">C Assignment 1</a></li>
                    <li><a href="LINK_TO_C_ASSIGNMENT_2">C Assignment 2</a></li>
                    <li><a href="LINK_TO_C_ASSIGNMENT_3">C Assignment 3</a></li>
                </ul>
            </div>
            <div>
                <h3>Javascript Assignments</h3>
                <ul>
                    <li><a href="LINK_TO_JAVASCRIPT_ASSIGNMENT_1">Javascript Assignment 1</a></li>
                    <li><a href="LINK_TO_JAVASCRIPT_ASSIGNMENT_2">Javascript Assignment 2</a></li>
                    <li><a href="LINK_TO_JAVASCRIPT_ASSIGNMENT_3">Javascript Assignment 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Assignments;
