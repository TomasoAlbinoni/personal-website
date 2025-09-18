import { FeedbackData } from "@/types/feedback"

type FeedbackProps = {
    item: FeedbackData
}

export default function FeedbackItem({ item }: FeedbackProps) {
    return (
        <div className="feedback-item">
            <p><em>{item.comment}</em></p>
            <p>{item.name}, {item.position}</p>
        </div>
    );
};