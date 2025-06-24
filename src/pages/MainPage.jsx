import "../assets/icons/index";
import { Link } from "react-router-dom";
import { Pattern1, Pattern2, Pattern3, Pattern4, Pattern5, Pattern6, Pattern7, Pattern8, PatternCard1, PatternCard2, PatternCard3, Group41 } from "../assets/icons/index";

const patterns = {
    1: Pattern1,
    2: Pattern2,
    3: Pattern3,
    4: Pattern4,
    5: Pattern5,
    6: Pattern6,
    7: Pattern7,
    8: Pattern8,
};
const patternsCard = {
    1: PatternCard1,
    2: PatternCard2,
    3: PatternCard3,
}
export default function MainPage() {
    return (
        <div className="main-page">
            <div className="page01">
                <div className="top-pattern">

                    <div className="left-pattern">
                        {[1, 2, 3].map((num) => (
                            <img src={patterns[num]} alt={`pattern${num}`} className={`pattern${num}`} />
                        ))}
                    </div>
                    <div className="right-pattern">
                        {[4, 5, 6, 7, 8].map((num) => (
                            <img src={patterns[num]} alt={`pattern${num}`} className={`pattern${num}`} />
                        ))}

                    </div>
                </div>
                <div className="main-info">
                    <div className="content">
                        <h1>HELLO!</h1>
                        <h2>Welcome to our website</h2>
                        <p>Boost your English vocabulary with VocaBoost — a smart learning platform
                            that uses Spaced Repetition, flashcards, fill-in-the-blank exercises, and word
                            associations to help you remember words faster and longer.</p>
                        <Link className="get-started">Get started</Link>
                    </div>
                    <div className="pattern-card-container">
                        <div className="pattern-card">
                            {[3, 2, 1].map((num) => (
                                <img src={patternsCard[num]} alt={`pattern${num}`} className={`pattern-card${num}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page02">
                <img src={Group41} alt="group41" className="group41" />
                <div className="main-context">" Struggling with English vocabulary "</div>
                <div className="space">---</div>
                <div className="extra-context">Don't worry</div>
            </div>
        </div>
    );
}