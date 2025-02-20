import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

export default function CertificationsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-squash-text mb-4">
            Certifications et Affiliations
          </h2>
          <p className="text-squash-muted text-lg">
            Formation et adhésion aux organismes professionnels reconnus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative w-full h-24 mb-4">
            <Link href="https://www.reflexobreton.fr/" target="_blank" rel="noopener noreferrer" passHref>
              <Image
                src="/logo-centre-de-formation-elisabeth-breton.jpg"
                alt="Centre de formation Elisabeth Breton"
                fill
                style={{ objectFit: 'contain' }}
              />
              </Link>
            </div>
            {/* <p className="text-squash-muted text-center mt-4">
              Formation certifiante en réflexologie auprès du Centre Elisabeth Breton,
              reconnu pour son excellence dans la formation des praticiens en réflexologie.
            </p>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative w-full h-24 mb-4">
            <Link href="https://syndicat-reflexologues.com/" target="_blank" rel="noopener noreferrer"passHref>
              <Image
                src="/logo-syndicat-reflexologue.jpg"
                alt="Syndicat Professionnel des Réflexologues"
                fill
                style={{ objectFit: 'contain' }}
              /></Link>
            </div>
            {/* <p className="text-squash-muted text-center mt-4">
              Membre du Syndicat Professionnel des Réflexologues (SPR),
              garantissant une pratique éthique et professionnelle de la réflexologie.
            </p>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative w-full h-24 mb-4">
            <Link href="https://mutuellesante.fr/medecine-douce/reflexologie-plantaire" target="_blank" rel="noopener noreferrer"passHref>
    <Image
                src="/logo-mutuelle-sante.jpg"
                alt="Mutuelle Santé"
                fill
                style={{ objectFit: 'contain' }}
              />  </Link>
            </div>
            {/* <p className="text-squash-muted text-center mt-4">
              Référencé sur mutuellesante.fr, portail de référence pour les remboursements
              de soins alternatifs et de bienveillance.
            </p>*/}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
