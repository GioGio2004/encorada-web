import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProcessStep = ({
  step,
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {step}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="h-5 w-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      {step < 5 && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-600 to-gray-800 opacity-30"></div>
      )}
    </motion.div>
  );
};
export default ProcessStep;