import FeedbackItem from "@/app/feedback/FeedbackItem";
import { FeedbackData } from "@/types/feedback"

export default function Feedback() {
    const feedback: FeedbackData[] = [
        {
            name: "Derek Jones",
            position: "Chief Technical Officer (Sunobi)",
            comment: "Thomas is someone I consider to be among the very best individuals I have ever worked with. Beyond his professional skills, his integrity, attention to detail, and pragmatic outlook make him not only a valued colleague but also a pleasure to work with.",
        },
        {
            name: "Tydus Queiroz",
            position: "Chief Innovation Officer (Sunobi)",
            comment: "Thomas brings exceptional development skills and a sharp instinct for driving results. He has a strong eye for detail and a rare ability to make himself versatile and adaptable to learn new things. His innovative approach has contributed meaningfully to Sunobi’s growth, helping us improve internal efficiency and elevate our external product offerings.",
        },
        {
            name: "Michael Wells",
            position: "Software Application Developer (Sunobi)",
            comment: "Thomas and I collaborated on several projects and he's a consummate professional. Extremely knowledgeable in Unity and server technology, I was often amazed at how quickly he could solve some fairly significant problems. Always willing to help out when needed; Thomas was a great asset to our team.",
        },
        {
            name: "Scot Kinney",
            position: "AstraWorlds.com",
            comment: "Thomas has worked with us on several large projects over the years. His work was always exemplary. He would be my first call if I needed programming help in the future. He's a gentleman and a scholar!",
        }
    ];
    const feedbackItems = feedback.map(item => {
        return (
            <FeedbackItem key={item.name} item={item} />
        );
    })
    return (
        <>
            <h1 className="entry-title">Feedback</h1>
            <div className="feedback-section">{feedbackItems}</div>
        </>
    );
};
