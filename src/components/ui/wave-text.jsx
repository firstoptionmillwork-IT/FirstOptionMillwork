"use client";;
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Text_03({
    text = "Hover me",
    className = ""
}) {
    return (
        <motion.span
            className={cn(
                "w-full text-center inline-block cursor-pointer text-xs transition-all",
                className
            )}
            whileHover="hover"
            initial="initial">
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                        initial: {
                            y: 0,
                            scale: 1,
                        },
                        hover: {
                            y: -4,
                            scale: 1.2,
                            transition: {
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                                delay: index * 0.1,
                            },
                        },
                    }}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

export { Text_03 }