import animationData1 from "../../public/revive_helps4.json";
import animationData2 from "../../public/revive_helps3.json";
import animationData3 from "../../public/revive_helps1.json";

export interface HelperSectionData {
    title: string;
    points: string[];
    animation?: any; // Updated type to match imported animation data
    bgColor?: string; // Added background color property
}

export const helpersSectionData: HelperSectionData[] = [
    {
        title: "Personalized Consultations",
        points: [
            "Olive breaks down every ingredient into clear, actionable information.",
            "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
            "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes."
        ],
        animation: animationData1,
        bgColor: "#cbe2cd"
    },
    {
        title: "Expert Guidance",
        points: [
            "Receive tailored advice from certified nutritionists and wellness coaches.",
            "Get recommendations for healthier alternatives based on your preferences.",
            "Access ongoing support to help you achieve your health goals."
        ],
        animation: animationData2,
        bgColor: "#ffedee"
    },
    {
        title: "Comprehensive Reports",
        points: [
            "Detailed breakdowns of product ingredients and their health impacts.",
            "Easy-to-understand scoring system for quick decision making.",
            "Regular updates to keep you informed about the latest research and findings."
        ],
        animation: animationData3,
        bgColor: "#f4edc6"
    }
];