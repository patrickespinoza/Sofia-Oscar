
import React, { useState } from "react";
import { motion } from "framer-motion";

/* =========================================
   REGALOS — ESTILO CLÁSICO WEDLY
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

const datosBancarios = {
  banco: "Banco Azteca",
  tarjeta: "5263 5401 6037 1767",
  titular: "Nombre del titular pendiente",
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
      <circle cx="15" cy="15" r="2" fill="currentColor" />
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
        style={{ backgroundColor: palette.antiqueGold }}
      />
      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{ borderColor: palette.antiqueGold }}
      />
      <span
        className="h-px w-10 sm:w-16"
        style={{ backgroundColor: palette.antiqueGold }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
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
      <rect x="7" y="16" width="50" height="34" rx="2" />
      <path d="M8 19L32 37L56 19" />
      <path d="M8 48L24 34" />
      <path d="M56 48L40 34" />
      <path d="M27 12C27 9.8 29 8 32 8C35 8 37 9.8 37 12" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <path d="M7 24L32 9L57 24" />
      <path d="M10 27H54" />
      <path d="M13 52H51" />
      <path d="M8 57H56" />
      <path d="M17 29V50" />
      <path d="M27 29V50" />
      <path d="M37 29V50" />
      <path d="M47 29V50" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

/* =========================================
   ILUSTRACIÓN ORIGINAL DEL SOBRE
========================================= */

function DecorativeEnvelope() {
  return (
    <svg
      viewBox="0 0 320 230"
      fill="none"
      aria-hidden="true"
      className="mx-auto h-auto w-full max-w-[290px] sm:max-w-[320px]"
    >
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

      <path
        d="M160 82C148 69 130 83 160 106C190 83 172 69 160 82Z"
        stroke="#A48654"
        strokeWidth="1.3"
        fill="none"
      />

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

      <path
        d="M34 100H286V204C286 210 281 215 275 215H45C39 215 34 210 34 204V100Z"
        fill="#E5DED2"
        stroke="#A48654"
        strokeWidth="1.4"
      />

      <path
        d="M34 100L160 187L286 100"
        fill="#F5F1E8"
        stroke="#A48654"
        strokeWidth="1.2"
      />

      <path
        d="M34 210L139 142C152 134 168 134 181 142L286 210"
        fill="#F5F1E8"
        stroke="#A48654"
        strokeWidth="1.2"
      />

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
  const [copiado, setCopiado] = useState(false);
  const [errorCopia, setErrorCopia] = useState(false);

  const copiarTarjeta = async () => {
    const numero = datosBancarios.tarjeta.replace(/\s/g, "");

    try {
      await navigator.clipboard.writeText(numero);
      setCopiado(true);
      setErrorCopia(false);
    } catch (error) {
      console.error("Error al copiar la tarjeta:", error);
      setCopiado(false);
      setErrorCopia(true);
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="
        relative
        flex
        min-h-[680px]
        w-full
        min-w-0
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
      {/* MARCOS EXTERIORES */}

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
          min-w-0
          max-w-5xl
          flex-col
          items-center
          text-center
        "
      >
        {/* ÍCONO PRINCIPAL */}

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
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          Un detalle con mucho cariño
        </motion.p>

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
          style={{ color: palette.ink }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          Mesa de regalos
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
          style={{ color: palette.warmGray }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.18 }}
        >
          Tu presencia en este día tan especial es nuestro
          mayor regalo. Si deseas obsequiarnos un detalle
          adicional, hemos preparado dos opciones para ti.
        </motion.p>

        {/* =========================================
            OPCIONES DE REGALO
        ========================================= */}

        <div
          className="
            mt-12
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-7
            md:grid-cols-2
            md:gap-8
          "
        >
          {/* OPCIÓN 1: LLUVIA DE SOBRES */}

          <motion.article
            className="
              relative
              flex
              w-full
              min-w-0
              flex-col
              items-center
              border
              px-5
              py-10
              text-center
              sm:px-8
              sm:py-12
            "
            style={{
              backgroundColor: palette.white,
              borderColor: "rgba(164,134,84,0.45)",
              boxShadow: "0 15px 35px rgba(29,39,51,0.05)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.12 }}
          >
            <div
              className="pointer-events-none absolute inset-[7px] border"
              style={{
                borderColor: "rgba(164,134,84,0.15)",
              }}
            />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Opción 01
            </p>

            <h3
              className="
                mt-5
                font-serif
                text-[29px]
                font-normal
                sm:text-[34px]
              "
              style={{ color: palette.ink }}
            >
              Lluvia de sobres
            </h3>

            <div className="mt-5">
              <DecorativeDivider />
            </div>

            <div className="mt-5 w-full">
              <DecorativeEnvelope />
            </div>

            <p
              className="
                mx-auto
                mt-5
                max-w-sm
                font-serif
                text-[14px]
                leading-7
                sm:text-[15px]
              "
              style={{ color: palette.inkSoft }}
            >
              El día de nuestra celebración podrás
              depositar tu regalo en efectivo dentro
              de un sobre y entregarlo en el espacio
              destinado para nuestra lluvia de sobres.
            </p>
          </motion.article>

          {/* OPCIÓN 2: TRANSFERENCIA BANCARIA */}

          <motion.article
            className="
              relative
              flex
              w-full
              min-w-0
              flex-col
              items-center
              border
              px-5
              py-10
              text-center
              sm:px-8
              sm:py-12
            "
            style={{
              backgroundColor: palette.white,
              borderColor: "rgba(164,134,84,0.45)",
              boxShadow: "0 15px 35px rgba(29,39,51,0.05)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.22 }}
          >
            <div
              className="pointer-events-none absolute inset-[7px] border"
              style={{
                borderColor: "rgba(164,134,84,0.15)",
              }}
            />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Opción 02
            </p>

            <h3
              className="
                mt-5
                font-serif
                text-[27px]
                font-normal
                sm:text-[34px]
              "
              style={{ color: palette.ink }}
            >
              Transferencia bancaria
            </h3>

            <div className="mt-5">
              <DecorativeDivider />
            </div>

            {/* ICONO DEL BANCO */}

            <div
              className="
                mt-7
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
              "
              style={{
                color: palette.antiqueGoldDark,
                borderColor: "rgba(164,134,84,0.4)",
              }}
            >
              <BankIcon />
            </div>

            {/* DATOS BANCARIOS */}

            <div className="mt-7 w-full min-w-0">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Institución bancaria
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[24px]
                  sm:text-[28px]
                "
                style={{ color: palette.ink }}
              >
                {datosBancarios.banco}
              </p>
            </div>

            <div
              className="
                mt-6
                w-full
                min-w-0
                max-w-full
                border-y
                px-1
                py-6
              "
              style={{
                borderColor: "rgba(164,134,84,0.3)",
              }}
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Número de tarjeta
              </p>

              <p
                className="
                  mt-4
                  break-words
                  font-serif
                  text-[20px]
                  tracking-[0.04em]
                  sm:text-[24px]
                  sm:tracking-[0.08em]
                "
                style={{
                  color: palette.ink,
                  overflowWrap: "anywhere",
                }}
              >
                {datosBancarios.tarjeta}
              </p>

              {/* BOTÓN PARA COPIAR */}

              <button
                type="button"
                onClick={copiarTarjeta}
                className="
                  relative
                  mt-5
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  gap-2
                  border
                  px-6
                  py-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  transition
                  hover:opacity-85
                "
                style={{
                  backgroundColor: palette.ink,
                  borderColor: palette.ink,
                  color: palette.white,
                }}
              >
                {!copiado && <CopyIcon />}
                {copiado ? "Número copiado ✓" : "Copiar número"}
              </button>

              {errorCopia && (
                <p
                  role="alert"
                  className="mt-3 text-xs"
                  style={{ color: palette.warmGray }}
                >
                  No se pudo copiar automáticamente.
                  Puedes seleccionar el número y copiarlo.
                </p>
              )}
            </div>

            {/* NOMBRE DEL TITULAR */}

            <div className="mt-6 w-full min-w-0">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Nombre del titular
              </p>

              <p
                className="
                  mt-3
                  break-words
                  font-serif
                  text-[18px]
                  leading-7
                  sm:text-[20px]
                "
                style={{
                  color: palette.inkSoft,
                }}
              >
                {datosBancarios.titular}
              </p>
            </div>

            <p
              className="
                mx-auto
                mt-7
                max-w-sm
                font-serif
                text-[13px]
                italic
                leading-6
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Si lo prefieres, puedes enviarnos
              tu detalle mediante transferencia
              bancaria.
            </p>
          </motion.article>
        </div>

        {/* MENSAJE FINAL */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            sm:mt-16
          "
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3 }}
        >
          <p
            className="
              font-serif
              text-[19px]
              italic
              leading-8
              sm:text-[22px]
            "
            style={{ color: palette.ink }}
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
