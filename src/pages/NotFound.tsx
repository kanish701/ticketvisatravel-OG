import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../components/AppIcon'; 
import Button from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
            <Icon name="Map" size={48} className="text-red-500 opacity-80" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-brand-midnight mb-4"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-brand-slate text-lg mb-8"
        >
          Oops! It looks like you've ventured into uncharted territory. The page you are looking for doesn't exist or has been moved.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            onClick={() => navigate('/')}
            className="bg-brand-midnight text-white hover:bg-brand-midnight/90 px-8 py-3"
            iconName="Home"
          >
            Go Home
          </Button>
          
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="border-brand-slate/20 text-brand-midnight hover:bg-gray-100 px-8 py-3"
            iconName="ArrowLeft"
          >
            Go Back
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;