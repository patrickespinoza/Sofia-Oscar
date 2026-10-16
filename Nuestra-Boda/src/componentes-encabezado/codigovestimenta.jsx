
import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA
   ESTILO VAQUERO — FONDO SÓLIDO
========================================= */

const palette = {
  ink: "#1D2733",
  inkSoft: "#35404B",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#755E39",
  warmGray: "#777168",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />
      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   SEPARADOR DORADO
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          backgroundColor: palette.antiqueGold,
          opacity: 0.7,
        }}
      />

      <span
        className="h-[6px] w-[6px] rotate-45 border"
        style={{
          borderColor: palette.antiqueGold,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          backgroundColor: palette.antiqueGold,
          opacity: 0.7,
        }}
      />
    </div>
  );
}

/* =========================================
   ÍCONO DE SOMBRERO VAQUERO
========================================= */

function CowboyHatIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-12 w-12 sm:h-14 sm:w-14"
    >
      <path d="M18 37 23 16c1-4 5-6 9-3 4-3 8-1 9 3l5 21" />
      <path d="M20 31c7 5 17 5 24 0" />
      <path d="M8 35c3 6 11 9 24 9s21-3 24-9" />
      <path d="M8 35c-3 0-5 3-3 6 4 7 15 11 27 11s23-4 27-11c2-3 0-6-3-6" />
      <path d="M19 36c8 5 18 5 26 0" />
    </svg>
  );
}

/* =========================================
   ÍCONO DE BOTAS VAQUERAS
========================================= */

function CowboyBootIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-12 w-12 sm:h-14 sm:w-14"
    >
      <path d="M22 9h18v26c0 5 4 9 9 11l8 3v7H18c-5 0-9-4-9-9v-5h13V9Z" />
      <path d="M22 17h18" />
      <path d="M22 25h18" />
      <path d="M28 29c2 3 4 4 6 5 2-1 4-2 6-5" />
      <path d="M18 56v3h12v-3" />
      <path d="M45 56v3h12v-3" />
      <path d="M9 47h15" />
    </svg>
  );
}

/* =========================================
   ÍCONO DE CELEBRACIÓN PARA ADULTOS
========================================= */

function AdultEventIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M7 4h10" />
      <path d="m8.5 4 1.2 6a4.3 4.3 0 0 0 8.5 0l1.2-6" />
      <path d="M14 14v6" />
      <path d="M10.5 20h7" />
      <path d="M9.5 8h9" />
    </svg>
  );
}

/* =========================================
   TARJETA DE VESTIMENTA
========================================= */

function DressOption({
  title,
  subtitle,
  description,
  details,
  icon,
  index,
}) {
  return (
    <motion.article
      className="
        relative
        flex
        min-h-[370px]
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        border
        px-7
        py-12
        text-center
        sm:min-h-[410px]
        sm:px-10
        sm:py-14
      "
      style={{
        backgroundColor: palette.paperLight,
        borderColor: palette.antiqueGold,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        delay: 0.12 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* BORDE INTERIOR */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[7px]
          border
        "
        style={{
          borderColor: "rgba(164,134,84,0.25)",
        }}
      />

      {/* NÚMERO EDITORIAL */}

      <p
        className="
          absolute
          left-5
          top-5
          font-serif
          text-xs
          tracking-[0.2em]
          sm:left-7
          sm:top-7
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </p>

      {/* ÍCONO */}

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          sm:h-24
          sm:w-24
        "
        style={{
          borderColor: palette.antiqueGold,
          color: palette.antiqueGoldDark,
        }}
      >
        {icon}
      </div>

      <div className="mt-8">
        <DecorativeDivider compact />
      </div>

      {/* TÍTULO */}

      <h3
        className="
          mt-7
          font-serif
          text-[31px]
          font-normal
          tracking-[-0.02em]
          sm:text-[38px]
        "
        style={{
          color: palette.ink,
        }}
      >
        {title}
      </h3>

      {/* SUBTÍTULO */}

      <p
        className="
          mt-3
          text-[9px]
          uppercase
          tracking-[0.3em]
          sm:text-[10px]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        {subtitle}
      </p>

      {/* DESCRIPCIÓN */}

      <p
        className="
          mx-auto
          mt-6
          max-w-sm
          font-serif
          text-[15px]
          leading-7
          sm:text-base
        "
        style={{
          color: palette.inkSoft,
        }}
      >
        {description}
      </p>

      {/* DETALLE */}

      <p
        className="
          mx-auto
          mt-4
          max-w-xs
          font-serif
          text-[13px]
          italic
          leading-6
          sm:text-[14px]
        "
        style={{
          color: palette.warmGray,
        }}
      >
        {details}
      </p>
    </motion.article>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const DressCodePremium = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        relative
        flex
        min-h-[760px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        backgroundColor: palette.ink,
      }}
    >
      {/* MARCOS DORADOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: "rgba(164,134,84,0.55)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(164,134,84,0.2)",
        }}
      />

      {/* ESQUINAS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#A48654]/60
          sm:left-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          h-16
          w-16
          rotate-90
          text-[#A48654]/60
          sm:right-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          h-16
          w-16
          -rotate-90
          text-[#A48654]/60
          sm:bottom-9
          sm:left-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rotate-180
          text-[#A48654]/60
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-14
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.4em]
              sm:text-[10px]
            "
            style={{
              color: palette.antiqueGold,
            }}
          >
            Detalles de la celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.paperLight,
            }}
          >
            Código de vestimenta
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              font-serif
              text-[19px]
              italic
              leading-8
              sm:text-[24px]
            "
            style={{
              color: palette.paperLight,
            }}
          >
            Vestimenta estilo vaquero
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-serif
              text-[14px]
              leading-7
              sm:text-base
            "
            style={{
              color: "#DED6C8",
            }}
          >
            ¡Prepara tus mejores botas y sombrero!
            Te esperamos para celebrar.
          </p>
        </motion.div>

        {/* OPCIONES DE VESTIMENTA */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            gap-7
            sm:gap-9
            md:grid-cols-2
          "
        >
          <DressOption
            title="Caballeros"
            subtitle="Estilo vaquero"
            description="Camisa, pantalón de mezclilla o de vestir, cinturón y tus mejores botas vaqueras."
            details="El sombrero vaquero será el complemento perfecto para la celebración."
            icon={<CowboyHatIcon />}
            index={0}
          />

          <DressOption
            title="Damas"
            subtitle="Estilo vaquero"
            description="Vestido, falda o conjunto de inspiración western, acompañado de tus botas favoritas."
            details="Puedes complementar tu atuendo con sombrero, cinturón y accesorios vaqueros."
            icon={<CowboyBootIcon />}
            index={1}
          />
        </div>

        {/* MENSAJE ESPECIAL */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-2xl
            border-y
            px-5
            py-9
            text-center
            sm:mt-16
            sm:px-8
          "
          style={{
            borderColor: "rgba(164,134,84,0.55)",
          }}
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.28,
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              sm:text-[10px]
            "
            style={{
              color: palette.antiqueGold,
            }}
          >
            Lo más importante
          </p>

          <p
            className="
              mx-auto
              mt-5
              max-w-lg
              font-serif
              text-[22px]
              italic
              leading-9
              sm:text-[28px]
            "
            style={{
              color: palette.paperLight,
            }}
          >
            ¡Obligatorio tener ganas de bailar y sus botas bien puestas!
          </p>

          <div className="mt-6">
            <DecorativeDivider compact />
          </div>
        </motion.div>

        {/* CELEBRACIÓN SOLO ADULTOS */}

        <motion.div
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            flex-col
            items-center
            text-center
            sm:mt-14
          "
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.36,
          }}
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              borderColor: palette.antiqueGold,
              color: palette.antiqueGold,
            }}
          >
            <AdultEventIcon />
          </div>

          <p
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.4em]
            "
            style={{
              color: palette.antiqueGold,
            }}
          >
            Consideración especial
          </p>

          <p
            className="
              mt-3
              font-serif
              text-[22px]
              italic
              sm:text-[26px]
            "
            style={{
              color: palette.paperLight,
            }}
          >
            Celebración exclusiva para adultos
          </p>

          <p
            className="
              mt-3
              max-w-md
              font-serif
              text-[14px]
              leading-7
              sm:text-[15px]
            "
            style={{
              color: "#DED6C8",
            }}
          >
            Deseamos que esta noche sea una oportunidad para celebrar,
            conversar y disfrutar juntos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;
