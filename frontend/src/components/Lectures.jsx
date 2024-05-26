import React, { useEffect, useState } from 'react';
import './Lectures.css';

const Lectures = () => {
    const [lectures, setLectures] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/lectures/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(data => setLectures(data))
            .catch(error => setError('Failed to load lectures'));
    }, []);

    return (
        <div>
            <h2>Lectures</h2>
            <div>
                <h3>Python</h3>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=lygaoUnJKF4&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT&index=5&ab_channel=Jenny%27sLecturesCSIT">Python Lecture 1</a></li>
                    <li><a href="https://www.youtube.com/watch?v=6Nu9cvINQLk&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT&index=7&ab_channel=Jenny%27sLecturesCSIT">Python Lecture 2</a></li>
                    <li><a href="https://www.youtube.com/watch?v=sa97IyIOHxU&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT&index=8&ab_channel=Jenny%27sLecturesCSIT">Python Lecture 3</a></li>
                    <li><a href="https://www.youtube.com/watch?v=a43BIxiZ5EM&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT&index=9&ab_channel=Jenny%27sLecturesCSIT">Python Lecture 4</a></li>
                </ul>
            </div>
            <div>
                <h3>Java</h3>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=fxtwjxPmo-8&list=PLXj4XH7LcRfDlQklXu3Hrtru-bm2dJ9Df&index=4&ab_channel=SudhakarAtchala">Java Lecture 1</a></li>
                    <li><a href="https://www.youtube.com/watch?v=NRtlNM0vMeE&list=PLXj4XH7LcRfDlQklXu3Hrtru-bm2dJ9Df&index=6&ab_channel=SudhakarAtchala">Java Lecture 2</a></li>
                    <li><a href="https://www.youtube.com/watch?v=14HjsSC3ZEo&list=PLXj4XH7LcRfDlQklXu3Hrtru-bm2dJ9Df&index=12&ab_channel=SudhakarAtchala">Java Lecture 3</a></li>
                    <li><a href="https://www.youtube.com/watch?v=pNppcR0t1dU&list=PLXj4XH7LcRfDlQklXu3Hrtru-bm2dJ9Df&index=23&ab_channel=SudhakarAtchala">Java Lecture 4</a></li>
                </ul>
            </div>
            <div>
                <h3>C</h3>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=EjavYOFoJJ0&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&ab_channel=Jenny%27sLecturesCSIT">C Lecture 1</a></li>
                    <li><a href="https://www.youtube.com/watch?v=HucJhUkDJuk&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&index=5&ab_channel=Jenny%27sLecturesCSIT">C Lecture 2</a></li>
                    <li><a href="https://www.youtube.com/watch?v=oYuRtXcwXqw&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&index=27&ab_channel=Jenny%27sLecturesCSIT">C Lecture 3</a></li>
                    <li><a href="https://www.youtube.com/watch?v=oWTnLzWkF5w&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&index=28&ab_channel=Jenny%27sLecturesCSIT">C Lecture 4</a></li>
                </ul>
            </div>
            <div>
                <h3>Javascript</h3>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&ab_channel=ShradhaKhapra">Javascript Lecture 1</a></li>
                    <li><a href="https://www.youtube.com/watch?v=Zg4-uSjxosE&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=2&ab_channel=ShradhaKhapra">Javascript Lecture 2</a></li>
                    <li><a href="https://www.youtube.com/watch?v=UmRtFFSDSFo&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=3&ab_channel=ShradhaKhapra">Javascript Lecture 3</a></li>
                    <li><a href="https://www.youtube.com/watch?v=gFWhbjzowrM&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=4&ab_channel=ShradhaKhapra">Javascript Lecture 4</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Lectures;
