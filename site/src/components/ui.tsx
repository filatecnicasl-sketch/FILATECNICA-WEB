import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 lg:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
    </span>
  );
}
