const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {
    const {good, neutral, bad} = feedback;

    return (
        <ul className="feedback">
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>
    )
}

export default Feedback;