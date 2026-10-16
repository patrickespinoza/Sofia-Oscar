
import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA — WEDLY
   Formal
========================================= */

const palette = {
  ink: "#1D2733",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  antiqueGold: "#A48654",
  mutedGold: "#D7C49F",
};

/* =========================================
   ANIMACIONES
========================================= */

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
   ORNAMENTOS
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
      <circle
        cx="15"
        cy="15"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: palette.antiqueGold,
        }}
      />
      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: palette.antiqueGold,
        }}
      />
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: palette.antiqueGold,
        }}
      />
    </div>
  );
}

/* =========================================
   ÍCONO DE EVENTO PARA ADULTOS
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
      {/* MARCOS EXTERIORES */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: "rgba(164,134,84,0.35)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(164,134,84,0.13)",
        }}
      />

      {/* ORNAMENTOS DE ESQUINA */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#A48654]/40
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
          text-[#A48654]/40
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
          text-[#A48654]/40
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
          text-[#A48654]/40
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* DETALLES BOTÁNICOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#A48654]/15
          sm:h-[310px]
          sm:w-[180px]
          lg:left-2
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[250px]
          w-[145px]
          rotate-[168deg]
          text-[#A48654]/15
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          min-w-0
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
            lg:mb-20
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
              tracking-[0.3em]
              sm:text-[10px]
              sm:tracking-[0.5em]
            "
            style={{
              color: palette.mutedGold,
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
              mt-5
              font-serif
              text-[17px]
              italic
              sm:text-[20px]
            "
            style={{
              color: palette.mutedGold,
            }}
          >
            Formal
          </p>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-serif
              text-[14px]
              leading-7
              sm:text-base
            "
            style={{
              color: palette.paper,
            }}
          >
            Queremos que disfruten nuestra celebración
            con un estilo cómodo, auténtico y acorde
            con la ocasión.
          </p>
        </motion.div>

        {/* =========================================
            IMAGEN DE CÓDIGO DE VESTIMENTA
            Archivo: public/dresscode.png
        ========================================= */}

        <motion.div
          className="
            mx-auto
            w-full
            min-w-0
            max-w-4xl
          "
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              border
              p-1.5
              sm:p-2
            "
            style={{
              borderColor: "rgba(164,134,84,0.45)",
            }}
          >
            <img
              src="/dresscode.png"
              alt="Código de vestimenta formal"
              loading="lazy"
              decoding="async"
              className="
                block
                h-auto
                w-full
                max-w-full
                object-contain
              "
            />
          </div>
        </motion.div>

        {/* CELEBRACIÓN EXCLUSIVA PARA ADULTOS */}

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
              borderColor: "rgba(164,134,84,0.55)",
              color: palette.mutedGold,
            }}
          >
            <AdultEventIcon />
          </div>

          <p
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.3em]
              sm:text-[10px]
            "
            style={{
              color: palette.mutedGold,
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
              leading-snug
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
              color: palette.paper,
            }}
          >
            Deseamos que esta noche sea una oportunidad
            para celebrar, conversar y disfrutar juntos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;
