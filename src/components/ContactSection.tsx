import { motion } from 'framer-motion';
import { IconPhone, IconMapPin } from '@tabler/icons-react';

export default function ContactSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Image d'arrière-plan */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/cta-reflexologie-institut.jpg")',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Contenu */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay sombre */}
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Prenez rendez-vous
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-2"
              >
                <IconMapPin className="w-6 h-6 text-squash-mint" />
                <p className="text-xl">
                  Centre ville de Gondrin et de Courrensan
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-2"
              >
                <IconPhone className="w-6 h-6 text-squash-mint" />
                <a 
                  href="tel:0668304482"
                  className="text-2xl hover:text-squash-mint transition-colors duration-300"
                >
                  06 68 30 44 82
                </a>
              </motion.div>
            </div>

            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="mt-12 px-8 py-4 bg-squash-mint text-white rounded-full
                        text-lg font-semibold hover:bg-squash-mint/90 
                        transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Réserver une séance
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
