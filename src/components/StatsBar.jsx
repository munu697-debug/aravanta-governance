import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './StatsBar.css';

const CountUp = ({ to, prefix = "", suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      onViewportEnter={() => {
        count.set(0);
        animate(count, to, { duration: 2, ease: "easeOut" });
      }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};

const StatsBar = () => {
  const stats = [
    { value: 42, label: "Governments Served", suffix: "+" },
    { value: 18, label: "Countries Reached", suffix: "" },
    { value: 3.2, label: "Economic Impact", prefix: "$", suffix: "T+" },
    { value: 150, label: "Policies Designed", suffix: "+" }
  ];

  return (
    <div className="stats-bar">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="stat-value">
              <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </h3>
            <p className="stat-label uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
