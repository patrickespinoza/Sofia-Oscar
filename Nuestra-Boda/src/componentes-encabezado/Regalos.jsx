
import { motion } from "framer-motion";

/* =========================================
   LLUVIA DE SOBRES — ESTILO CLÁSICO
========================================= */

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  champagne: "#F5F1E8",
  white: "#FFFFFF",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
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

      <circle
        cx="15"
        cy="15"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

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
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
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

/* =========================================
   SEPARADOR DECORATIVO
========================================= */

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
   ÍCONO DE SOBRE
========================================= */

function EnvelopeIcon({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="7"
        y="16"
        width="50"
        height="34"
        rx="2"
      />

      <path d="M8 19L32 37L56 19" />

      <path d="M8 48L24 34" />

      <path d="M56 48L40 34" />

      <path d="M27 12C27 9.8 29 8 32 8C35 8 37 9.8 37 12" />
    </svg>
  );
}

/* =========================================
   ILUSTRACIÓN DEL SOBRE
========================================= */

function DecorativeEnvelope() {
  return (
    <svg
      viewBox="0 0 320 230"
      fill="none"
      aria-hidden="true"
      className="mx-auto h-auto w-full max-w-[290px] sm:max-w-[320px]"
    >
      {/* Tarjeta interior */}
      <rect
        x="74"
        y="24"
        width="172"
        height="146"
        rx="2"
        fill="#FFFFFF"
        stroke="#A48654"
        strokeWidth="1"
      />

      {/* Marco de la tarjeta */}
      <rect
        x="85"
        y="35"
        width="150"
        height="124"
        rx="1"
        stroke="#A48654"
        strokeWidth="0.6"
        opacity="0.5"
      />

      {/* Corazón */}
      <path
        d="M160 82C148 69 130 83 160 106C190 83 172 69 160 82Z"
        stroke="#A48654"
        strokeWidth="1.3"
        fill="none"
      />

      {/* Línea decorativa */}
      <path
        d="M130 120H190"
        stroke="#A48654"
        strokeWidth="0.8"
      />

      <path
        d="M143 129H177"
        stroke="#A48654"
        strokeWidth="0.6"
      />

      {/* Cuerpo del sobre */}
      <path
        d="M34 100H286V204C286 210 281 215 275 215H45C39 215 34 210 34 204V100Z"
        fill="#E5DED2"
        stroke="#A48654"
        strokeWidth="1.4"
      />

      {/* Solapa interior */}
      <path
        d="M34 100L160 187L286 100"
        fill="#F5F1E8"
        stroke="#A48654"
        strokeWidth="1.2"
      />

      {/* Solapa frontal */}
      <path
        d="M34 210L139 142C152 134 168 134 181 142L286 210"
        fill="#F5F1E8"
        stroke="#A48654"
        strokeWidth="1.2"
      />

      {/* Sello central */}
      <circle
        cx="160"
        cy="179"
        r="19"
        fill="#A48654"
      />

      <circle
        cx="160"
        cy="179"
        r="15"
        stroke="#F5F1E8"
        strokeWidth="0.7"
      />

      <path
        d="M160 184C151 177 154 172 160 176C166 172 169 177 160 184Z"
        fill="#F5F1E8"
      />
    </svg>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const Regalos = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        relative
        flex
        min-h-[680px]
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
        backgroundColor: palette.champagne,
      }}
    >
      {/* MARCO EXTERIOR */}

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
          borderColor: "rgba(164,134,84,0.35)",
        }}
      />

      {/* MARCO INTERIOR */}

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
          borderColor: "rgba(164,134,84,0.14)",
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
          text-[#A48654]/35
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
          text-[#A48654]/35
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
          text-[#A48654]/35
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
          text-[#A48654]/35
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* RAMAS BOTÁNICAS */}

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
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >
        {/* ÍCONO */}

        <motion.div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            sm:h-20
            sm:w-20
          "
          style={{
            color: palette.antiqueGoldDark,
            borderColor: "rgba(164,134,84,0.42)",
          }}
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <EnvelopeIcon />
        </motion.div>

        {/* TEXTO SUPERIOR */}

        <motion.p
          className="
            mt-7
            text-[8px]
            uppercase
            tracking-[0.44em]
            sm:text-[10px]
            sm:tracking-[0.55em]
          "
          style={{
            color: palette.antiqueGoldDark,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.08,
          }}
        >
          Un detalle con mucho cariño
        </motion.p>

        {/* SEPARADOR */}

        <div className="mt-5">
          <DecorativeDivider />
        </div>

        {/* TÍTULO */}

        <motion.h2
          className="
            mt-8
            font-serif
            text-[40px]
            font-normal
            leading-tight
            tracking-[-0.025em]
            sm:text-[54px]
            md:text-[64px]
          "
          style={{
            color: palette.ink,
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
            duration: 0.9,
            delay: 0.12,
          }}
        >
          Lluvia de sobres
        </motion.h2>

        {/* DESCRIPCIÓN */}

        <motion.p
          className="
            mx-auto
            mt-6
            max-w-2xl
            font-serif
            text-[15px]
            italic
            leading-7
            sm:text-[17px]
            sm:leading-8
          "
          style={{
            color: palette.warmGray,
          }}
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
            duration: 0.9,
            delay: 0.18,
          }}
        >
          Tu presencia en este día tan especial es nuestro mayor regalo.
          Si deseas obsequiarnos un detalle adicional, tendremos
          lluvia de sobres durante nuestra celebración.
        </motion.p>

        {/* ILUSTRACIÓN */}

        <motion.div
          className="mt-9 w-full"
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
            delay: 0.22,
          }}
        >
          <DecorativeEnvelope />
        </motion.div>

        {/* INFORMACIÓN */}

        <motion.div
          className="
            mx-auto
            mt-8
            w-full
            max-w-xl
            border-y
            px-5
            py-8
            sm:mt-10
            sm:px-10
          "
          style={{
            borderColor: "rgba(164,134,84,0.35)",
          }}
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
            delay: 0.24,
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.32em]
              sm:text-[10px]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            ¿Cómo funciona?
          </p>

          <p
            className="
              mt-5
              font-serif
              text-[15px]
              leading-8
              sm:text-[17px]
            "
            style={{
              color: palette.inkSoft,
            }}
          >
            El día del evento podrás depositar tu regalo en efectivo
            dentro de un sobre y entregarlo en el espacio destinado
            para nuestra lluvia de sobres.
          </p>
        </motion.div>

        {/* MENSAJE FINAL */}

        <motion.div
          className="mx-auto mt-10 max-w-xl text-center"
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.3,
          }}
        >
          <p
            className="
              font-serif
              text-[19px]
              italic
              leading-8
              sm:text-[22px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Gracias por acompañarnos y ser parte
            del comienzo de nuestra historia.
          </p>

          <div className="mt-7">
            <DecorativeDivider />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Regalos;
