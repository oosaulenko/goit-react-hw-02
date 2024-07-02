const Options = ({onLeaveFeedback, onResetFeedback, totalFeedback}) => {
    return (
        <>
            <button onClick={() => onLeaveFeedback('good')}>Good</button>
            <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
        </>
    )
}

export default Options;