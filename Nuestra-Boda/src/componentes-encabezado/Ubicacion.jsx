import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIONES
========================================= */

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#E5DED2",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
  warmGray: "#777168",
};

const eventos = [
  {
    tipo: "Ceremonia religiosa",
    titulo: "Santa Misa",
    hora: "12:00",
    periodo: "p. m.",
    lugar: "Catedral de Puebla",
    direccion: "Puebla, Puebla",
    ubicacion: "https://maps.app.goo.gl/ZpJQM6zCAM99FQSP7",
    boton: "Ver Catedral",
    aria: "Abrir ubicación de la Catedral de Puebla en Google Maps",
  },
  {
    tipo: "Recepción",
    titulo: "Nuestra celebración",
    hora: "2:00",
    periodo: "p. m.",
    lugar: "Rancho La Perla",
    direccion: "Cuautinchán, Puebla",
    ubicacion: "https://maps.app.goo.gl/zq4QXebFVJT5H1D79",
    boton: "Ver Rancho La Perla",
    aria: "Abrir ubicación de Rancho La Perla en Google Maps",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemAnimation = {
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
   SEPARADOR
========================================= */

function DecorativeDivider({ compact = false, light = false }) {
  const lineColor = light
    ? "rgba(251,249,244,0.35)"
    : "rgba(164,134,84,0.72)";

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background: `linear-gradient(to right, transparent, ${lineColor})`,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: lineColor,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background: `linear-gradient(to left, transparent, ${lineColor})`,
        }}
      />
    </div>
  );
}

/* =========================================
   ÍCONO DE UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   TARJETA DE EVENTO
========================================= */

function EventCard({ evento, dark = false }) {
  const background = dark
    ? palette.ink
    : "rgba(251,249,244,0.9)";

  const primaryColor = dark
    ? palette.paperLight
    : palette.ink;

  const secondaryColor = dark
    ? "rgba(251,249,244,0.7)"
    : palette.warmGray;

  const borderColor = dark
    ? "rgba(164,134,84,0.48)"
    : "rgba(164,134,84,0.3)";

  return (
    <motion.article
      variants={itemAnimation}
      className="
        relative
        flex
        min-h-[520px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        border
        px-6
        py-14
        text-center
        sm:min-h-[550px]
        sm:px-10
        sm:py-16
        lg:min-h-[590px]
        lg:px-12
      "
      style={{
        backgroundColor: background,
        borderColor,
        boxShadow: dark
          ? "0 24px 55px rgba(29,39,51,0.18)"
          : "0 20px 50px rgba(29,39,51,0.07)",
      }}
    >
      {/* Borde interior */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[7px] border"
        style={{
          borderColor: dark
            ? "rgba(164,134,84,0.2)"
            : "rgba(164,134,84,0.13)",
        }}
      />




      <div className="relative z-10 w-full">
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.38em]
            sm:text-[9px]
            sm:tracking-[0.46em]
          "
          style={{
            color: dark
              ? palette.antiqueGold
              : palette.antiqueGoldDark,
          }}
        >
          {evento.tipo}
        </p>

        <h3
          className="
            mx-auto
            mt-5
            max-w-sm
            font-serif
            text-[32px]
            font-normal
            leading-tight
            tracking-[-0.02em]
            sm:text-[40px]
          "
          style={{
            color: primaryColor,
          }}
        >
          {evento.titulo}
        </h3>

        <div className="my-7 sm:my-8">
          <DecorativeDivider
            compact
            light={dark}
          />
        </div>

        {/* Hora */}

        <div>
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.36em]
              sm:text-[9px]
            "
            style={{
              color: secondaryColor,
            }}
          >
            Hora
          </p>

          <div className="mt-3 flex items-end justify-center gap-3">
            <p
              className="
                font-serif
                text-[56px]
                font-normal
                leading-none
                tracking-[-0.045em]
                sm:text-[68px]
              "
              style={{
                color: primaryColor,
              }}
            >
              {evento.hora}
            </p>

            <p
              className="
                mb-2
                font-serif
                text-sm
                italic
                sm:text-base
              "
              style={{
                color: dark
                  ? palette.antiqueGold
                  : palette.antiqueGoldDark,
              }}
            >
              {evento.periodo}
            </p>
          </div>
        </div>

        {/* Lugar */}

        <div className="mt-9">
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.36em]
              sm:text-[9px]
            "
            style={{
              color: secondaryColor,
            }}
          >
            Lugar
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-sm
              font-serif
              text-[23px]
              font-normal
              leading-relaxed
              sm:text-[26px]
            "
            style={{
              color: primaryColor,
            }}
          >
            {evento.lugar}
          </p>

          <p
            className="
              mt-1
              text-[10px]
              uppercase
              tracking-[0.18em]
              sm:text-[11px]
            "
            style={{
              color: dark
                ? "rgba(251,249,244,0.58)"
                : palette.warmGray,
            }}
          >
            {evento.direccion}
          </p>
        </div>

        {/* Botón de ubicación */}

        <motion.a
          href={evento.ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={evento.aria}
          className="
            group
            mt-9
            inline-flex
            min-w-[220px]
            items-center
            justify-center
            gap-3
            border
            px-6
            py-4
            sm:min-w-[245px]
            sm:px-8
          "
          style={{
            backgroundColor: dark
              ? palette.paperLight
              : palette.ink,
            borderColor: dark
              ? palette.paperLight
              : palette.ink,
            color: dark
              ? palette.ink
              : palette.paperLight,
            boxShadow: dark
              ? "0 12px 28px rgba(0,0,0,0.16)"
              : "0 12px 28px rgba(29,39,51,0.12)",
          }}
          whileHover={{
            y: -2,
            backgroundColor: dark
              ? palette.paper
              : palette.inkSoft,
            transition: {
              duration: 0.25,
            },
          }}
          whileTap={{
            scale: 0.985,
          }}
        >
          <LocationIcon />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.24em]
              sm:text-[10px]
              sm:tracking-[0.28em]
            "
          >
            {evento.boton}
          </span>
        </motion.a>
      </div>
    </motion.article>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function EventoDireccion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paper} 58%,
            ${palette.paperDark} 100%
          )
        `,
      }}
    >
      {/* Textura de papel */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(29,39,51,0.025) 0px,
              rgba(29,39,51,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* Marcos generales */}

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
          borderColor: "rgba(164,134,84,0.25)",
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
          borderColor: "rgba(164,134,84,0.1)",
        }}
      />

      {/* Ornamentos de esquina */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#A48654]/25
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
          text-[#A48654]/25
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
          text-[#A48654]/25
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
          text-[#A48654]/25
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* Ramas decorativas */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#A48654]/10
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
          text-[#A48654]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Encabezado */}

        <motion.header
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
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-16
            lg:mb-20
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Nuestra celebración
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
              tracking-[-0.02em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Un día para recordar
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Nos hará muy felices compartir con ustedes el comienzo de este
            nuevo capítulo.
          </p>
        </motion.header>

        {/* Fecha principal */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.95,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mb-8
            overflow-hidden
            border
            px-6
            py-12
            text-center
            sm:mb-10
            sm:px-10
            sm:py-14
          "
          style={{
            backgroundColor: "rgba(251,249,244,0.82)",
            borderColor: "rgba(164,134,84,0.34)",
            boxShadow: "0 20px 50px rgba(29,39,51,0.07)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[7px] border"
            style={{
              borderColor: "rgba(164,134,84,0.12)",
            }}
          />

          <div className="relative z-10">
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.42em]
                sm:text-[10px]
                sm:tracking-[0.52em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Reserva la fecha
            </p>

            <div className="mt-5">
              <DecorativeDivider compact />
            </div>

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                sm:flex-row
                sm:gap-7
              "
            >
              <p
                className="
                  font-serif
                  text-xl
                  uppercase
                  tracking-[0.2em]
                  sm:text-2xl
                "
                style={{
                  color: palette.inkSoft,
                }}
              >
                Sábado
              </p>

              <span
                aria-hidden="true"
                className="
                  my-4
                  h-px
                  w-14
                  sm:my-0
                  sm:h-12
                  sm:w-px
                "
                style={{
                  backgroundColor: "rgba(164,134,84,0.5)",
                }}
              />

              <p
                className="
                  font-serif
                  text-[76px]
                  font-normal
                  leading-none
                  tracking-[-0.05em]
                  sm:text-[94px]
                "
                style={{
                  color: palette.ink,
                }}
              >
                19
              </p>

              <span
                aria-hidden="true"
                className="
                  my-4
                  h-px
                  w-14
                  sm:my-0
                  sm:h-12
                  sm:w-px
                "
                style={{
                  backgroundColor: "rgba(164,134,84,0.5)",
                }}
              />

              <div className="text-center sm:text-left">
                <p
                  className="
                    font-serif
                    text-xl
                    uppercase
                    tracking-[0.18em]
                    sm:text-2xl
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Diciembre
                </p>

                <p
                  className="
                    mt-2
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    sm:text-xs
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dos ubicaciones */}

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {eventos.map((evento, index) => (
            <EventCard
              key={evento.titulo}
              evento={evento}
              dark={index === 1}
            />
          ))}
        </motion.div>

        {/* Cierre */}

        <motion.p
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
            duration: 0.9,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-14
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
        >
          Esperamos contar con su presencia en un día que guardaremos para
          siempre en nuestra memoria.
        </motion.p>
      </div>
    </motion.section>
  );
}