import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {

    return (
        <motion.div
            whileHover={{ y: -10 }} // Smooth move above effect
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center bg-[#111111] rounded-3xl p-6 md:p-10 gap-10 md:gap-20 w-full max-w-5xl mx-auto mb-8 cursor-pointer border border-white/5`}
        >
            {/* Project Image */}
            <div
                className="w-full md:w-1/2 aspect-square rounded-2xl"
                style={{ background: project.image }}
            />

            {/* Project Info */}
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 bg-zinc-800/50 text-[10px] text-zinc-400">
                    {project.id}
                </div>
                <h3 className="text-white text-2xl font-bold tracking-tight">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

export default ProjectCard;