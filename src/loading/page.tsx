"use client";
import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      className="w-16 h-16 rounded-md bg-blue-500 m-auto mt-32 mb-32 "
    />
  );
}