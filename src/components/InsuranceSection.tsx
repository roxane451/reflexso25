import { motion } from 'framer-motion';

export default function InsuranceSection() {
  return (
    <div id="insurance" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-squash-text mb-4">
            Remboursement de la Réflexologie
          </h2>
          <h3 className="text-xl text-squash-mint font-bold">
            par votre mutuelle
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-squash-muted text-lg mb-8 text-center">
            De nombreuses mutuelles santé remboursent les séances de Réflexologie.
          </p>

          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-squash-text mb-6 text-center">
              Voici une liste non exhaustive :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Alptis',
                'Assurema',
                'Axa',
                'Ipselia',
                'Maaf',
                'Mutuelle de France',
                'Mutuelle Verte',
                'Myriade Mutuelle',
                'Novia',
                'Phenix',
                'Radiance',
                'Reunica',
                'Smeba',
                'Unilia'
              ].map((mutuelle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: 'easeOut'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#F0FDF9'
                  }}
                  className="
                    p-4 
                    rounded-lg 
                    bg-white 
                    shadow-sm 
                    border border-gray-100
                    hover:border-squash-mint/30
                    hover:shadow-md
                    transition-all 
                    duration-300
                    flex 
                    items-center 
                    justify-center
                    text-squash-muted
                    hover:text-squash-mint
                    cursor-default
                  "
                >
                  <span className="font-medium text-center">{mutuelle}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-squash-muted/80 text-center mt-6 italic">
              * Cette liste est donnée à titre indicatif. Veuillez vérifier auprès de votre mutuelle pour plus de détails.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
