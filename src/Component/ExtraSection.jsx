import React from 'react';
import { FaCar, FaClock, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
const features = [
    {
        icon: <FaClock size={24} className="text-orange-500" />,
        title: "24/7 Customer Support",
        desc: "We’re always available to help you with any questions or concerns."
    },
    {
        icon: <FaShieldAlt size={24} className="text-orange-500" />,
        title: "Safe & Secure",
        desc: "All vehicles are insured and maintained for your safety."
    },
    {
        icon: <FaCar size={24} className="text-orange-500" />,
        title: "Wide Fleet of Cars",
        desc: "Choose from economy to luxury cars, ready for any journey."
    }
];
const ExtraSection = () => {
    return (
        <div className="py-14 px-4  text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Custormer?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        <div className="mb-3 flex justify-center">{feature.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-700">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExtraSection;