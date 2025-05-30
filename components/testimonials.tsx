import { motion, useInView } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";

const TestimonialCard = ({
  name,
  role,
  content,
  delay = 0,
}: {
  name: string;
  role: string;
  content: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full border-gray-700/50 bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="secondary"
              className="text-xs bg-gray-800 text-gray-300"
            >
              Verified
            </Badge>
          </div>
          <p className="text-gray-300 mb-4 italic">{content}</p>
          <div>
            <p className="font-semibold text-gray-100">{name}</p>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;