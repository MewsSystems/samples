import React from "react";
import { connect } from "react-redux";
import { togglePair } from "../store/actions";

const mapStateToProps = state => {
    const processPair = entry => {
        const [key, [first, second]] = entry;
        const text = `${first["code"]}/${second["code"]}`;
        return { key, text };
    };

    const pairs = Object.entries(state.pairs).map(processPair);

    return {
        pairs,
        fetchingPairs: state.fetchingPairs,
        pairFilter: state.pairFilter
    };
};

const mapDispatchToProps = {
    togglePair
};

const PairsList = ({ pairs, fetchingPairs, togglePair, pairFilter }) => {
    if (fetchingPairs) {
        return <h3>Loading rates...</h3>;
    }

    return (
        <div>
            {pairs.map(({ key, text }) => {
                const btnClass = pairFilter.find(pair => pair === key) ? "btn-primary" : "btn-secondary";
                return (
                    <button key={key} className={`btn btn-block ${btnClass}`} onClick={() => togglePair(key)}>
                        {text}
                    </button>
                );
            })}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PairsList);
