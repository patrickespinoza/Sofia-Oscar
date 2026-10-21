
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Landmark, Copy, Check, X } from "lucide-react";

// ==========================================
// REGALOS — ESTILO CLÁSICO WEDLY
// ==========================================

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  champagne: "#F5F1E8",
  white: "#FFFFFF",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
  warmGray: "#777168",
};

// ==========================================
// DATOS BANCARIOS EDITABLES
// ==========================================

const datosBancarios = {
  banco: "Banco Azteca",
  titular: "Alejandro Orea",
  numero: "5263 5401 6037 1767",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTOS
// ==========================================

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#A48654] sm:w-16" />
      <span className="h-[5px] w-[5px] rotate-45 border border-[#A48654]" />
      <span className="h-px w-10 bg-[#A48654] sm:w-16" />
    </div>
  );
}

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
      {[
        "M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z",
        "M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z",
        "M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z",
        "M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}

// ==========================================
// ILUSTRACIÓN DE SOBRE
// ==========================================

function DecorativeEnvelope() {
  return (
    <svg
      viewBox="0 0 320 230"
      fill="none"
      aria-hidden="true"
      className="mx-auto h-auto w-full max-w-[260px]"
    >
      <rect
        x="74"
        y="24"
        width="172"
        height="146"
        rx="2"
        fill="#FFFFFF"
        stroke="#A48654"
      />
      <rect
        x="85"
        y="35"
        width="150"
        height="124"
        stroke="#A48654"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M160 82C148 69 130 83 160 106C190 83 172 69 160 82Z"
        stroke="#A48654"
        strokeWidth="1.3"
      />
      <path
        d="M130 120H190M143 129H177"
        stroke="#A48654"
        strokeWidth="0.8"
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
      <circle cx="160" cy="179" r="19" fill="#A48654" />
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

// ==========================================
// TARJETA REUTILIZABLE
// ==========================================

function TarjetaRegalo({
  numero,
  titulo,
  descripcion,
  children,
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        h-full
        min-w-0
        flex-col
        items-center
        border
        border-[#A48654]/45
        bg-white
        px-5
        py-10
        text-center
        shadow-[0_15px_35px_rgba(29,39,51,0.05)]
        sm:px-7
        sm:py-12
      "
    >
      {/* MARCO INTERIOR */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[7px]
          border
          border-[#A48654]/15
        "
      />

      {/* NÚMERO */}

      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-[#725B37]
        "
      >
        Opción {numero}
      </p>

      {/* TÍTULO */}

      <h3
        className="
          mt-5
          font-serif
          text-[26px]
          font-normal
          leading-tight
          text-[#1D2733]
          sm:text-[30px]
        "
      >
        {titulo}
      </h3>

      <div className="mt-5">
        <DecorativeDivider />
      </div>

      {/* CONTENIDO VISUAL */}

      <div
        className="
          flex
          min-h-[190px]
          w-full
          items-center
          justify-center
          py-6
        "
      >
        {children}
      </div>

      {/* DESCRIPCIÓN */}

      <p
        className="
          mx-auto
          max-w-sm
          font-serif
          text-[14px]
          leading-7
          text-[#39434D]
          sm:text-[15px]
        "
      >
        {descripcion}
      </p>
    </motion.article>
  );
}

// ==========================================
// MODAL BANCARIO
// ==========================================

function ModalBancario({ abierto, cerrar }) {
  const [copiado, setCopiado] = useState(false);
  const [errorCopia, setErrorCopia] = useState(false);
  const botonCerrarRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!abierto) {
      setCopiado(false);
      setErrorCopia(false);
      return;
    }

    const scrollAnterior = document.body.style.overflow;
    const focoAnterior = document.activeElement;

    document.body.style.overflow = "hidden";
    botonCerrarRef.current?.focus();

    const manejarTeclado = (event) => {
      if (event.key === "Escape") {
        cerrar();
        return;
      }

      if (event.key !== "Tab") return;

      const elementos = Array.from(
        modalRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], input:not([disabled])'
        ) || []
      );

      if (!elementos.length) return;

      const primero = elementos[0];
      const ultimo = elementos[elementos.length - 1];

      if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault();
        ultimo.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === ultimo
      ) {
        event.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", manejarTeclado);

    return () => {
      document.body.style.overflow = scrollAnterior;
      document.removeEventListener("keydown", manejarTeclado);
      focoAnterior?.focus?.();
    };
  }, [abierto, cerrar]);

  const copiarNumero = async () => {
    const numeroLimpio = datosBancarios.numero.replace(/\s/g, "");

    try {
      await navigator.clipboard.writeText(numeroLimpio);
      setCopiado(true);
      setErrorCopia(false);
    } catch (error) {
      setCopiado(false);
      setErrorCopia(true);
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {abierto && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-[#111820]/75
            px-4
            py-8
            sm:px-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              cerrar();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-banco"
            className="
              relative
              my-auto
              w-full
              max-w-[490px]
              min-w-0
              border
              border-[#A48654]
              bg-[#F5F1E8]
              px-5
              pb-10
              pt-12
              text-center
              shadow-2xl
              sm:px-10
              sm:pb-12
              sm:pt-14
            "
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35 }}
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[7px]
                border
                border-[#A48654]/25
              "
            />

            {/* CERRAR */}

            <button
              ref={botonCerrarRef}
              type="button"
              onClick={cerrar}
              aria-label="Cerrar datos bancarios"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-[#A48654]/40
                text-[#1D2733]
                transition
                hover:opacity-60
              "
            >
              <X size={18} />
            </button>

            {/* ENCABEZADO */}

            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#A48654]/50
                text-[#725B37]
              "
            >
              <Landmark size={34} strokeWidth={1.2} />
            </div>

            <p
              className="
                mt-6
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#725B37]
              "
            >
              Un detalle con cariño
            </p>

            <h2
              id="titulo-modal-banco"
              className="
                mt-4
                font-serif
                text-[30px]
                text-[#1D2733]
                sm:text-[38px]
              "
            >
              Datos bancarios
            </h2>

            <div className="mt-5">
              <DecorativeDivider />
            </div>

            {/* BANCO */}

            <div className="mt-9">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#725B37]">
                Institución bancaria
              </p>

              <p className="mt-3 font-serif text-[25px] text-[#1D2733] sm:text-[29px]">
                {datosBancarios.banco}
              </p>
            </div>

            {/* TITULAR */}

            <div className="mt-7">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#725B37]">
                Nombre del titular
              </p>

              <p className="mt-3 break-words font-serif text-[19px] leading-7 text-[#39434D] sm:text-[22px]">
                {datosBancarios.titular}
              </p>
            </div>

            <div className="mx-auto my-8 h-px w-full max-w-[330px] bg-[#A48654]/45" />

            {/* NÚMERO */}

            <div className="w-full min-w-0">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#725B37]">
                Número de tarjeta
              </p>

              <div
                className="
                  mx-auto
                  mt-5
                  flex
                  w-full
                  min-w-0
                  items-center
                  justify-between
                  gap-2
                  border
                  border-[#A48654]/45
                  bg-white
                  px-3
                  py-3
                  sm:gap-3
                  sm:px-4
                "
              >
                <span
                  className="
                    min-w-0
                    break-all
                    text-left
                    font-serif
                    text-[15px]
                    text-[#1D2733]
                    sm:text-[19px]
                  "
                >
                  {datosBancarios.numero}
                </span>

                <button
                  type="button"
                  onClick={copiarNumero}
                  className="
                    inline-flex
                    min-h-[40px]
                    shrink-0
                    items-center
                    justify-center
                    gap-1.5
                    bg-[#1D2733]
                    px-3
                    text-[10px]
                    text-white
                    transition
                    hover:opacity-85
                  "
                >
                  {copiado ? (
                    <Check size={15} />
                  ) : (
                    <Copy size={15} />
                  )}

                  {copiado ? "Copiado" : "Copiar"}
                </button>
              </div>

              {errorCopia && (
                <p role="alert" className="mt-3 text-xs text-[#777168]">
                  No se pudo copiar automáticamente.
                  Selecciona el número para copiarlo.
                </p>
              )}
            </div>

            <p
              className="
                mx-auto
                mt-8
                max-w-xs
                font-serif
                text-[14px]
                italic
                leading-7
                text-[#777168]
              "
            >
              Agradecemos de corazón cualquier
              detalle que desees compartir con nosotros.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Regalos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const botonAbrirRef = useRef(null);

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <motion.section
        id="mesa-de-regalos"
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
          bg-[#F5F1E8]
          px-5
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >
        {/* MARCOS EXTERIORES */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-5
            border
            border-[#A48654]/35
            sm:inset-8
            lg:inset-10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[26px]
            border
            border-[#A48654]/15
            sm:inset-[38px]
            lg:inset-[46px]
          "
        />

        {/* ORNAMENTOS DE ESQUINA */}

        <CornerOrnament
          className="pointer-events-none absolute left-6 top-6 h-16 w-16 text-[#A48654]/35 sm:left-9 sm:top-9 sm:h-20 sm:w-20"
        />

        <CornerOrnament
          className="pointer-events-none absolute right-6 top-6 h-16 w-16 rotate-90 text-[#A48654]/35 sm:right-9 sm:top-9 sm:h-20 sm:w-20"
        />

        <CornerOrnament
          className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 -rotate-90 text-[#A48654]/35 sm:bottom-9 sm:left-9 sm:h-20 sm:w-20"
        />

        <CornerOrnament
          className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 rotate-180 text-[#A48654]/35 sm:bottom-9 sm:right-9 sm:h-20 sm:w-20"
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
            max-w-6xl
            flex-col
            items-center
            text-center
          "
        >
          {/* ICONO PRINCIPAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#A48654]/45
              text-[#725B37]
              sm:h-20
              sm:w-20
            "
          >
            <Gift size={33} strokeWidth={1.2} />
          </motion.div>

          {/* TEXTO SUPERIOR */}

          <p
            className="
              mt-7
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-[#725B37]
              sm:text-[10px]
              sm:tracking-[0.5em]
            "
          >
            Un detalle con mucho cariño
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          {/* TÍTULO */}

          <h2
            className="
              mt-8
              font-serif
              text-[40px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              text-[#1D2733]
              sm:text-[54px]
              md:text-[64px]
            "
          >
            Mesa de regalos
          </h2>

          {/* DESCRIPCIÓN ACTUALIZADA */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              font-serif
              text-[15px]
              italic
              leading-7
              text-[#777168]
              sm:text-[17px]
              sm:leading-8
            "
          >
            Tu presencia en este día tan especial es nuestro
            mayor regalo. Si deseas obsequiarnos un detalle
            adicional, hemos preparado tres opciones para ti.
          </p>

          {/* ==================================
              TRES OPCIONES DE REGALO
          ================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              min-w-0
              grid-cols-1
              gap-6
              md:grid-cols-3
              md:gap-5
              lg:gap-7
            "
          >
            {/* ==================================
                OPCIÓN 01 — LLUVIA DE SOBRES
            ================================== */}

            <TarjetaRegalo
              numero="01"
              titulo="Lluvia de sobres"
              delay={0.1}
              descripcion="
                El día de nuestra celebración podrás
                depositar tu regalo en efectivo dentro
                de un sobre y entregarlo en el espacio
                destinado para nuestra lluvia de sobres.
              "
            >
              <DecorativeEnvelope />
            </TarjetaRegalo>

            {/* ==================================
                OPCIÓN 02 — TRANSFERENCIA
            ================================== */}

            <TarjetaRegalo
              numero="02"
              titulo="Transferencia bancaria"
              delay={0.2}
              descripcion="
                Si deseas tener un detalle con nosotros,
                también puedes hacerlo mediante una
                transferencia bancaria.
              "
            >
              <div
                className="
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A48654]/45
                  text-[#725B37]
                "
              >
                <Landmark size={54} strokeWidth={1.1} />
              </div>

              <span className="sr-only">
                Transferencia bancaria
              </span>
            </TarjetaRegalo>

            {/* ==================================
                OPCIÓN 03 — REGALOS FÍSICOS
            ================================== */}

            <TarjetaRegalo
              numero="03"
              titulo="Regalos físicos"
              delay={0.3}
              descripcion="
                Si deseas obsequiarnos un detalle de
                manera personal, también recibiremos
                con mucho cariño regalos físicos el
                día de nuestra celebración.
              "
            >
              <div
                className="
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A48654]/45
                  text-[#725B37]
                "
              >
                <Gift size={58} strokeWidth={1.1} />
              </div>
            </TarjetaRegalo>
          </div>

          {/* ==================================
              BOTÓN BANCARIO
          ================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-9"
          >
            <button
              ref={botonAbrirRef}
              type="button"
              onClick={() => setModalAbierto(true)}
              className="
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-3
                border
                border-[#1D2733]
                bg-[#1D2733]
                px-6
                py-3.5
                text-[10px]
                uppercase
                tracking-[0.14em]
                text-white
                transition
                duration-300
                hover:bg-[#39434D]
                sm:px-9
                sm:tracking-[0.2em]
              "
            >
              <Landmark size={17} strokeWidth={1.4} />
              Ver datos bancarios
            </button>
          </motion.div>

          {/* ==================================
              MENSAJE FINAL
          ================================== */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="
              mx-auto
              mt-12
              max-w-xl
              text-center
              sm:mt-16
            "
          >
            <p
              className="
                font-serif
                text-[19px]
                italic
                leading-8
                text-[#1D2733]
                sm:text-[22px]
              "
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

      {/* ==================================
          VENTANA EMERGENTE BANCARIA
      ================================== */}

      <ModalBancario
        abierto={modalAbierto}
        cerrar={cerrarModal}
      />
    </>
  );
}
