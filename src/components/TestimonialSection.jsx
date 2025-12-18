
import { Sparkles } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    { id: 1, name: "Client Name", role: "Product designer", text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" },
    { id: 2, name: "Client Name", role: "Product designer", text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" },
    { id: 3, name: "Client Name", role: "Product designer", text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" },
    { id: 4, name: "Client Name", role: "Product designer", text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" },
];

const TestimonialSection = () => {

    return (
        <section className="w-full py-20 md:py-40 px-6 sm:px-12 lg:px-24 xl:px-40 min-h-screen">
            <div className='max-w-5xl mx-auto mb-16'>
                {/* Section Header */}
                <div className="flex items-center gap-2 mb-18">
                    <h2 className="text-3xl md:text-4xl text-white font-semibold">
                        Client testimonials
                    </h2>
                    <Sparkles className="text-white" size={24} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl w-full">
                {testimonials.map((t) => (
                    <TestimonialCard
                        key={t.id}
                        name={t.name}
                        role={t.role}
                        text={t.text}
                    />
                ))}

            </div>
        </section>
    );
};

export default TestimonialSection;