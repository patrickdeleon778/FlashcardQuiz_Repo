export default interface CardInfoProp {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
    id: number;
    name: string;
}