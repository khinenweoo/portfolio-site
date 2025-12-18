import { Sparkles } from 'lucide-react';
import TimelineCard from './TimelineCard';
import step_icon1 from '../assets/step-icon-1.svg'
import step_icon2 from '../assets/step-icon-2.svg'
import step_icon3 from '../assets/step-icon3.svg'

const ProcessFlow = () => {
    const stepsData = [
        {
            id: 1,
            number: 1,
            title: "Step 1: Product design Research",
            description: "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
            iconImage: step_icon1,
            showButton: true,
        },
        {
            id: 2,
            number: 2,
            title: "Step 2: UI design in figma",
            description: "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
            iconImage: step_icon2,
            showButton: false,
        },
        {
            id: 3,
            number: 3,
            title: "Step 3: No-code develop in webflow",
            description: "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
            iconImage: step_icon3,
            showButton: false,
        },
    ];

    return (
        <section id='about' className="w-full py-40 px-4 sm:px-12 lg:px-24 xl:px-40 min-h-screen transition-all">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-18">
                <h2 className="text-3xl md:text-4xl text-white font-semibold">
                    My process to design
                </h2>
                <Sparkles className="text-white" size={24} />
            </div>

            {/* Timeline Steps Loop */}
            <div className="timeline-steps flex flex-col">
                {stepsData.map((step, index) => (
                        <TimelineCard
                            key={step.id}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            iconImage={step.iconImage}
                            showButton={step.showButton}
                            // Determine if it's the last step to hide the connecting line
                            isLastStep={index === stepsData.length - 1}
                        />
                ))}
            </div>
        </section>
    );
};

export default ProcessFlow;