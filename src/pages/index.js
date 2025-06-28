import React from 'react';
import Layout from '../components/layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CtaSection from '../components/CtaSection';
import ProblemSection from '../components/ProblemSection';
import ContactFormSection from '../components/ContactFormSection';
import PartnerLogosSection from '../components/PartnerLogoSection';
import notebook from '../images/notebook-1.png'; 
import firma from '../images/clavefirmagob.png';
import mobile from '../images/edmovil.png';

// Importa todos los iconos necesarios para las FeatureSections
import {  PiggyBank, ScanText, CloudCheck, FileSearch, LockIcon, Cog, Users2, Blend, Scale, Landmark, ShieldUserIcon, BanknoteArrowUp, Lightbulb, FolderLock } from 'lucide-react';

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <CtaSection />

      {/* Feature Section 1: Funcionalidades Clave */}
      <FeatureSection
      sectionId="caracteristicas"
        title="Funcionalidades Clave de Escritorio Digital"
        description="Escritorio Digital ofrece un conjunto robusto de funcionalidades diseñadas para optimizar su gestión documental."
        features={[
          { icon: ScanText, text: "Digitalización Inteligente con OCR." },
          { icon: CloudCheck, text: "Almacenamiento Seguro en la Nube." },
          { icon: FileSearch, text: "Búsqueda Avanzada de Documentos." },
          { icon: LockIcon, text: "Seguridad y Control de Acceso."},
          { icon: Cog, text: "Automatización de Flujos de Trabajo." },
          {icon: Users2, text: "Herramientas de Colaboración."}

        ]}
        imageSrc={notebook}
        imageAlt="escritorio digital en un notebook"
        bgColor="bg-white"
        reverseLayout={false}
        iconColorClass="text-indigo-500"
      />

      {/* Feature Section 2: Sistema de Gestión Documental */}
      <FeatureSection
        title="Escritorio Digital para el Sector Público"
        description="Las instituciones públicas enfrentan desafíos únicos en la gestión documental, desde la transparencia hasta el cumplimiento normativo. Escritorio Digital está diseñado para apoyar sus objetivos y optimizar tus flujos de trabajo."
        features={[
          { icon: Blend, text: "Fomente la Transparencia y el Acceso a la Información Pública." },
          { icon: Scale, text: "Asegure el Cumplimiento Normativo y la Trazabilidad de Expedientes." },
          { icon: Landmark, text: "Optimice Procesos Administrativos y Reduzca la Burocracia." },
          { icon: ShieldUserIcon, text: "Proteja la Información Sensible y Garantice la Seguridad de Datos." }
        ]}
        imageSrc={firma}
        imageAlt="integrables con el gobierno"
        bgColor="bg-gray-50"
        reverseLayout={true} // Cambia el orden de la imagen y el texto
        iconColorClass="text-purple-500"
      />

      {/* Feature Section 3: Procesamiento de Documentos */}
      <FeatureSection
        title="Escritorio Digital para la Empresa Privada"
        description="En el competitivo mundo empresarial, la eficiencia y el control son clave. Escritorio Digital impulsa la productividad y la rentabilidad de su negocio."
        features={[
          { icon: BanknoteArrowUp, text: "Impulse la Agilidad y el Crecimiento Empresarial." },
          { icon: PiggyBank, text: "Reduzca Costos Operativos y Maximice la Rentabilidad." },
          { icon: Lightbulb, text: "Fomente la Colaboración y la Innovación en su Equipo." },
          { icon: FolderLock, text: "Proteja sus Activos de Información y Datos Confidenciales."}
        ]}
        imageSrc={mobile}
        imageAlt="escritorio digital en un móvil"
        bgColor="bg-white"
        reverseLayout={false}
        iconColorClass="text-indigo-500"
      />
      <PartnerLogosSection />
      <ContactFormSection />
    </Layout>
  );
};

export default IndexPage;