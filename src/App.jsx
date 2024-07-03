import {useEffect, useState} from 'react'
import './App.css'
import Description from "./components/Description.jsx";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";
import Notification from "./components/Notification.jsx";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0};
    });

    useEffect(() => {
        window.localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = feedbackType => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    }

    const resetFeedback = () => {
        setFeedback({good: 0, neutral: 0, bad: 0});
    };

    const {good, neutral, bad} = feedback;

    const totalFeedback = good + neutral + bad;
    const positiveFeedback = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;

    return (
        <>
            <Description/>
            <Options
                onLeaveFeedback={updateFeedback}
                onResetFeedback={resetFeedback}
                totalFeedback={totalFeedback}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (<Notification message="No feedback yet" />)
            }
        </>
    )
}

export default App
