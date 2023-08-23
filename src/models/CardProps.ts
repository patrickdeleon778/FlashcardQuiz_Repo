export default interface CardProps {
    onFlip: () => void;
    question: string;
    answer: string;
    options: string[];
    id: number;
}