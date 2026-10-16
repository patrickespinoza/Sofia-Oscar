
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./encabeza-cuenta";

/* =========================================
   PALETA ORIGINAL
========================================= */

const palette = {
  ink: "#1D2733",
  inkSoft: "#35404B",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#DED6C8",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#755E39",
  warmGray: "#777168",
  line: "#C8BDAA",
};

const transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

/* =========================================
   ORNAMENTOS ORIGINALES
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 76V25C4 13.4 13.4 4 25 4h51"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M13 64V29c0-8.8 7.2-16 16-16h35"
        stroke="currentColor"
        strokeWidth="0.65"
      />
      <path
        d="M25 4c0 11.6-9.4 21-21 21"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <circle cx="13" cy="13" r="1.8" fill="currentColor" />
      <path
        d="M18 18c10 3 17 10 20 20"
        stroke="currentColor"
        strokeWidth="0.65"
      />
    </svg>
  );
}

function DecorativeDivider({ dark = false }) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background: dark
            ? "linear-gradient(to right, transparent, rgba(164,134,84,0.8))"
            : "linear-gradient(to right, transparent, rgba(164,134,84,0.65))",
        }}
      />
      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: dark
            ? "rgba(164,134,84,0.85)"
            : "rgba(164,134,84,0.7)",
        }}
      />
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background: dark
            ? "linear-gradient(to left, transparent, rgba(164,134,84,0.8))"
            : "linear-gradient(to left, transparent, rgba(164,134,84,0.65))",
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [procesandoApertura, setProcesandoApertura] = useState(false);

  const [invitados, setInvitados] = useState("Invitado");
  const [pases, setPases] = useState(1);

  /* =========================================
     DATOS PERSONALIZADOS DESDE LA URL
     SIN CAMBIOS
  ========================================= */

  
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    setInvitados("Invitado");
    setPases(1);
    return;
  }

  try {
    const idNormalizado = id
      .trim()
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const paddingFaltante = idNormalizado.length % 4;

    const idConPadding =
      paddingFaltante === 0
        ? idNormalizado
        : idNormalizado + "=".repeat(4 - paddingFaltante);

    // Convertir Base64 a bytes.
    const binario = atob(idConPadding);

    const bytes = Uint8Array.from(
      binario,
      (caracter) => caracter.charCodeAt(0)
    );

    let datos;

    try {
      // Decodificación UTF-8 para nombres con acentos y ñ.
      const textoInvertido = new TextDecoder("utf-8", {
        fatal: true,
      }).decode(bytes);

      const textoOriginal = textoInvertido
        .split("")
        .reverse()
        .join("");

      datos = JSON.parse(textoOriginal);
    } catch (errorUTF8) {
      // Compatibilidad con enlaces anteriores.
      const textoOriginal = binario
        .split("")
        .reverse()
        .join("");

      datos = JSON.parse(textoOriginal);
    }

    const nombreDecodificado =
      typeof datos.nombre === "string"
        ? datos.nombre.trim()
        : "";

    const pasesDecodificados = Number.parseInt(
      datos.pases,
      10
    );

    if (nombreDecodificado) {
      setInvitados(nombreDecodificado);
    } else {
      setInvitados("Invitado");
    }

    if (
      !Number.isNaN(pasesDecodificados) &&
      pasesDecodificados > 0
    ) {
      setPases(pasesDecodificados);
    } else {
      setPases(1);
    }
  } catch (error) {
    console.error(
      "No se pudieron decodificar los datos de la invitación:",
      error
    );

    setInvitados("Invitado");
    setPases(1);
  }
}, []);

  /* =========================================
     APERTURA ORIGINAL DEL SOBRE
  ========================================= */

  const iniciarExperiencia = () => {
    if (procesandoApertura || abrirSobre) return;

    setProcesandoApertura(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setAbrirSobre(true);

    window.setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;

        audioRef.current.play().catch((error) => {
          console.warn("No se pudo reproducir el audio:", error);
        });
      }
    }, 400);

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      setIntroActiva(false);
      setMostrarContenido(true);
      setProcesandoApertura(false);
    }, 1900);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: palette.paperLight,
        color: palette.ink,
      }}
    >
      {/* AUDIO ORIGINAL */}

      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* =========================================
          INTRO ORIGINAL DEL SOBRE
      ========================================= */}

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
            key="intro-clasica"
            className="
              fixed inset-0 z-[9999]
              flex h-[100dvh] w-full
              items-center justify-center
              overflow-hidden overscroll-none
              px-4 py-3 sm:px-8 lg:px-12
            "
            style={{
              backgroundColor: palette.paperLight,
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  rgba(53,64,75,0.018) 0px,
                  rgba(53,64,75,0.018) 1px,
                  transparent 1px,
                  transparent 5px
                )
              `,
              touchAction: "none",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* MARCOS DEL SOBRE */}

            <div
              className="
                pointer-events-none absolute
                inset-4 border
                sm:inset-7 lg:inset-9
              "
              style={{
                borderColor: "rgba(164,134,84,0.3)",
              }}
            />

            <div
              className="
                pointer-events-none absolute
                inset-[21px] border
                sm:inset-[34px] lg:inset-[42px]
              "
              style={{
                borderColor: "rgba(164,134,84,0.12)",
              }}
            />

            <CornerOrnament
              className="
                pointer-events-none absolute
                left-5 top-5 h-16 w-16
                text-[#A48654]/50
                sm:left-8 sm:top-8 sm:h-20 sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none absolute
                right-5 top-5 h-16 w-16 rotate-90
                text-[#A48654]/50
                sm:right-8 sm:top-8 sm:h-20 sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none absolute
                bottom-5 left-5 h-16 w-16 -rotate-90
                text-[#A48654]/50
                sm:bottom-8 sm:left-8 sm:h-20 sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none absolute
                bottom-5 right-5 h-16 w-16 rotate-180
                text-[#A48654]/50
                sm:bottom-8 sm:right-8 sm:h-20 sm:w-20
              "
            />

            <div
              className="
                relative z-10 mx-auto grid
                w-full max-w-6xl items-center
                gap-4 sm:gap-8
                lg:grid-cols-[0.95fr_1.05fr]
                lg:gap-16 xl:gap-24
              "
            >
              {/* PRESENTACIÓN ORIGINAL */}

              <motion.div
                className="
                  order-1 flex flex-col
                  items-center text-center
                  lg:items-start lg:text-left
                "
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...transition,
                  delay: 0.1,
                }}
              >
                <p
                  className="
                    text-[9px] uppercase
                    tracking-[0.42em] sm:text-[10px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  Invitación de boda
                </p>

                <div
                  className="
                    mt-3 h-px w-16
                    sm:mt-6 lg:w-20
                  "
                  style={{
                    backgroundColor: "rgba(164,134,84,0.7)",
                  }}
                />

                <p
                  className="
                    mt-3 font-serif text-[10px]
                    uppercase tracking-[0.22em]
                    sm:mt-7 sm:text-sm
                  "
                  style={{ color: palette.warmGray }}
                >
                  Junto con nuestras familias
                </p>

                <h1
                  className="
                    mt-3 font-serif
                    text-[30px] font-normal
                    leading-[0.95] tracking-[-0.025em]
                    sm:mt-6 sm:text-[56px]
                    md:text-[64px]
                    lg:text-[58px] xl:text-[72px]
                  "
                  style={{ color: palette.ink }}
                >
                  Sofía Luz Sánchez Zavaleta
                </h1>

                <span
                  className="
                    my-1 font-cursiveDancing
                    text-2xl sm:my-2 sm:text-4xl
                  "
                  style={{ color: palette.antiqueGold }}
                >
                  &
                </span>

                <h1
                  className="
                    font-serif text-[30px]
                    font-normal leading-[0.95]
                    tracking-[-0.025em]
                    sm:text-[56px] md:text-[64px]
                    lg:text-[58px] xl:text-[72px]
                  "
                  style={{ color: palette.ink }}
                >
                  Oscar Alejandro Orea Cuanalo
                </h1>

                <div
                  className="
                    mt-4 w-full max-w-[220px]
                    sm:mt-8 sm:max-w-[260px]
                  "
                >
                  <DecorativeDivider />
                </div>

                <p
                  className="
                    mt-3 font-serif text-[10px]
                    uppercase tracking-[0.32em]
                    sm:mt-6 sm:text-sm
                  "
                  style={{ color: palette.inkSoft }}
                >
                  19 · Diciembre · 2026
                </p>

                <p
                  className="
                    mt-3 max-w-md font-serif
                    text-[12px] italic leading-5
                    sm:mt-5 sm:text-base sm:leading-7
                  "
                  style={{ color: palette.warmGray }}
                >
                  Hay momentos que cambian nuestra historia para siempre.
                  Queremos compartir este con ustedes.
                </p>
              </motion.div>

              {/* SOBRE E INFORMACIÓN DEL INVITADO */}

              <motion.div
                className="
                  order-2 flex w-full flex-col
                  items-center justify-center
                "
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...transition,
                  delay: 0.25,
                }}
              >
                <div
                  onClick={iniciarExperiencia}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      iniciarExperiencia();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir invitación"
                  className="
                    group relative
                    aspect-[350/235]
                    w-[76vw] max-w-[300px]
                    cursor-pointer outline-none
                    sm:w-[88vw] sm:max-w-[420px]
                    lg:w-full lg:max-w-[430px]
                  "
                  style={{ perspective: 2200 }}
                >
                  {/* SOMBRA DEL SOBRE */}

                  <div
                    className="
                      absolute -bottom-7 left-1/2
                      h-12 w-[72%]
                      -translate-x-1/2
                      rounded-full bg-black/15 blur-2xl
                    "
                  />

                  {/* CARTA INTERIOR */}

                  <motion.div
                    className="
                      absolute left-1/2 top-[9%] z-10
                      flex h-[78%] w-[82%]
                      -translate-x-1/2
                      flex-col items-center justify-center
                      overflow-hidden border
                      px-5 py-5 text-center
                    "
                    style={{
                      backgroundColor: palette.paperLight,
                      borderColor: "rgba(164,134,84,0.32)",
                      boxShadow:
                        "0 14px 30px rgba(29,39,51,0.13)",
                    }}
                    animate={
                      abrirSobre
                        ? { y: -82, scale: 1.015 }
                        : { y: 0, scale: 1 }
                    }
                    transition={{
                      duration: 1.15,
                      delay: abrirSobre ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CornerOrnament
                      className="
                        absolute left-2 top-2
                        h-10 w-10 text-[#A48654]/35
                      "
                    />

                    <CornerOrnament
                      className="
                        absolute bottom-2 right-2
                        h-10 w-10 rotate-180
                        text-[#A48654]/35
                      "
                    />

                    <p
                      className="
                        text-[7px] uppercase
                        tracking-[0.38em] sm:text-[8px]
                      "
                      style={{
                        color: palette.antiqueGoldDark,
                      }}
                    >
                      The wedding of
                    </p>

                    <div
                      className="my-4 h-px w-12"
                      style={{
                        backgroundColor:
                          "rgba(164,134,84,0.65)",
                      }}
                    />

                    <p
                      className="
                        font-serif text-[21px]
                        leading-tight sm:text-[25px]
                      "
                      style={{ color: palette.ink }}
                    >
                      Sofia
                    </p>

                    <span
                      className="
                        my-0.5 font-cursiveDancing
                        text-lg sm:text-xl
                      "
                      style={{ color: palette.antiqueGold }}
                    >
                      &
                    </span>

                    <p
                      className="
                        font-serif text-[21px]
                        leading-tight sm:text-[25px]
                      "
                      style={{ color: palette.ink }}
                    >
                      Alejandro
                    </p>

                    <p
                      className="
                        mt-4 text-[7px]
                        uppercase tracking-[0.25em]
                        sm:text-[8px]
                      "
                      style={{ color: palette.warmGray }}
                    >
                      11 · 06 · 2027
                    </p>
                  </motion.div>

                  {/* CUERPO ORIGINAL DEL SOBRE */}

                  <motion.div
                    className="
                      absolute inset-0
                      overflow-hidden border
                    "
                    style={{
                      background: `
                        linear-gradient(
                          145deg,
                          #E8E0D2 0%,
                          #DCD2C1 52%,
                          #CFC3B0 100%
                        )
                      `,
                      borderColor:
                        "rgba(117,94,57,0.25)",
                      boxShadow: `
                        0 28px 55px rgba(29,39,51,0.16),
                        inset 0 1px 0 rgba(255,255,255,0.65)
                      `,
                    }}
                    animate={
                      abrirSobre
                        ? { scale: 1.012, y: 6 }
                        : { scale: 1, y: 0 }
                    }
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* TEXTURA DEL PAPEL */}

                    <div
                      className="
                        absolute inset-0 opacity-[0.15]
                      "
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(
                            90deg,
                            rgba(53,64,75,0.08) 0px,
                            rgba(53,64,75,0.08) 1px,
                            transparent 1px,
                            transparent 5px
                          )
                        `,
                      }}
                    />

                    {/* SOLAPA INFERIOR IZQUIERDA */}

                    <div
                      className="
                        absolute bottom-0 left-0
                        h-[72%] w-[53%] border-t
                      "
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 100%, 0 100%)",
                        borderColor:
                          "rgba(117,94,57,0.15)",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.16), transparent)",
                      }}
                    />

                    {/* SOLAPA INFERIOR DERECHA */}

                    <div
                      className="
                        absolute bottom-0 right-0
                        h-[72%] w-[53%] border-t
                      "
                      style={{
                        clipPath:
                          "polygon(100% 0, 100% 100%, 0 100%)",
                        borderColor:
                          "rgba(117,94,57,0.15)",
                        background:
                          "linear-gradient(215deg, rgba(255,255,255,0.12), transparent)",
                      }}
                    />
                  </motion.div>

                  {/* TAPA ORIGINAL DEL SOBRE */}

                  <motion.div
                    className="
                      absolute left-0 top-0 z-20
                      h-[54%] w-full
                      origin-top overflow-hidden
                    "
                    style={{
                      clipPath:
                        "polygon(0 0, 50% 100%, 100% 0)",
                      background: `
                        linear-gradient(
                          180deg,
                          #E6DDCE 0%,
                          #D5C9B7 100%
                        )
                      `,
                      boxShadow:
                        "0 13px 24px rgba(29,39,51,0.12)",
                      backfaceVisibility: "hidden",
                    }}
                    animate={
                      abrirSobre
                        ? { rotateX: -182, y: -3 }
                        : { rotateX: 0, y: 0 }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* SELLO ORIGINAL */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute inset-0 z-30
                      flex items-center justify-center
                    "
                    animate={
                      abrirSobre
                        ? {
                            scale: 0.7,
                            opacity: 0,
                            y: -16,
                          }
                        : {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{ duration: 0.55 }}
                  >
                    <div
                      className="
                        relative flex
                        h-[72px] w-[72px]
                        items-center justify-center
                        rounded-full
                        sm:h-[86px] sm:w-[86px]
                      "
                      style={{
                        background: `
                          radial-gradient(
                            circle at 35% 28%,
                            #B59A68 0%,
                            #927545 45%,
                            #6D5532 100%
                          )
                        `,
                        boxShadow: `
                          inset 0 2px 4px rgba(255,255,255,0.24),
                          inset 0 -5px 9px rgba(45,34,19,0.28),
                          0 10px 18px rgba(29,39,51,0.17)
                        `,
                      }}
                    >
                      <div
                        className="
                          absolute inset-[7px]
                          rounded-full border
                        "
                        style={{
                          borderColor:
                            "rgba(245,241,232,0.28)",
                        }}
                      />

                      <div
                        className="
                          relative z-10 font-serif
                          text-lg italic sm:text-2xl
                        "
                        style={{
                          color: "#E8DDCA",
                          textShadow:
                            "0 1px 2px rgba(29,39,51,0.35)",
                        }}
                      >
                        V
                        <span
                          className="
                            mx-1 text-[11px] sm:text-sm
                          "
                        >
                          &
                        </span>
                        A
                      </div>
                    </div>
                  </motion.div>

                  {/* TEXTO ABRIR */}

                  <motion.p
                    className="
                      pointer-events-none
                      absolute inset-x-0 top-4 z-40
                      text-center text-[8px]
                      uppercase tracking-[0.4em]
                      sm:text-[9px]
                    "
                    style={{ color: palette.inkSoft }}
                    animate={{
                      opacity: abrirSobre ? 0 : 0.75,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    Abrir
                  </motion.p>
                </div>

                <motion.p
                  className="
                    mt-3 text-center text-[8px]
                    uppercase tracking-[0.28em]
                    sm:mt-7 sm:text-[10px]
                  "
                  style={{ color: palette.warmGray }}
                  animate={{
                    opacity: abrirSobre ? 0 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  Toca el sobre para comenzar
                </motion.p>

                {/* DATOS ORIGINALES DEL INVITADO */}

                <motion.div
                  className="
                    mt-3 w-full max-w-[330px]
                    border-y px-3 py-3 text-center
                    sm:mt-10 sm:max-w-[390px]
                    sm:px-7 sm:py-5
                  "
                  style={{
                    borderColor: "rgba(164,134,84,0.35)",
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...transition,
                    delay: 0.45,
                  }}
                >
                  <p
                    className="
                      text-[8px] uppercase
                      tracking-[0.33em]
                      sm:text-[9px]
                    "
                    style={{ color: palette.warmGray }}
                  >
                    Reservado especialmente para
                  </p>

                  <p
                    className="
                      mt-2 break-words font-serif
                      text-lg sm:mt-3 sm:text-2xl
                    "
                    style={{ color: palette.ink }}
                  >
                    {invitados}
                  </p>

                  <div
                    className="
                      mx-auto my-2 h-px w-12
                      sm:my-4
                    "
                    style={{
                      backgroundColor:
                        "rgba(164,134,84,0.6)",
                    }}
                  />

                  <p
                    className="
                      font-serif text-xs
                      tracking-[0.08em] sm:text-base
                    "
                    style={{ color: palette.inkSoft }}
                  >
                    {pases}{" "}
                    {pases === 1
                      ? "lugar reservado"
                      : "lugares reservados"}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =========================================
          NUEVA PORTADA SIN FOTOGRAFÍA
          ESTILO EDITORIAL / MARFIL / DORADO
      ========================================= */}

      <section
        className="
          relative isolate
          flex min-h-[100dvh] w-full
          items-center justify-center
          overflow-hidden
          px-5 py-12
          sm:px-10 sm:py-16
        "
        style={{
          backgroundColor: palette.paper,
          color: palette.ink,
          backgroundImage: `
            radial-gradient(
              circle at 15% 12%,
              rgba(164,134,84,0.10),
              transparent 34%
            ),
            radial-gradient(
              circle at 85% 88%,
              rgba(222,214,200,0.62),
              transparent 40%
            ),
            repeating-linear-gradient(
              0deg,
              rgba(53,64,75,0.018) 0px,
              rgba(53,64,75,0.018) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      >
        {/* MARCOS DECORATIVOS */}

        <motion.div
          className="
            pointer-events-none
            absolute inset-4 border
            sm:inset-7 lg:inset-10
          "
          style={{
            borderColor: "rgba(164,134,84,0.42)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
        />

        <div
          className="
            pointer-events-none
            absolute inset-[22px] border
            sm:inset-[36px] lg:inset-[49px]
          "
          style={{
            borderColor: "rgba(164,134,84,0.15)",
          }}
        />

        {/* ESQUINAS DORADAS */}

        <CornerOrnament
          className="
            pointer-events-none absolute
            left-5 top-5 h-14 w-14
            text-[#A48654]/60
            sm:left-9 sm:top-9 sm:h-20 sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none absolute
            right-5 top-5 h-14 w-14
            rotate-90 text-[#A48654]/60
            sm:right-9 sm:top-9 sm:h-20 sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none absolute
            bottom-5 left-5 h-14 w-14
            -rotate-90 text-[#A48654]/60
            sm:bottom-9 sm:left-9 sm:h-20 sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none absolute
            bottom-5 right-5 h-14 w-14
            rotate-180 text-[#A48654]/60
            sm:bottom-9 sm:right-9 sm:h-20 sm:w-20
          "
        />

        {/* CONTENIDO DE LA NUEVA PORTADA */}

        <motion.div
          className="
            relative z-10 mx-auto
            flex w-full max-w-3xl
            flex-col items-center
            py-10 text-center sm:py-14
          "
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
            y: mostrarContenido ? 0 : 28,
          }}
          transition={{
            duration: 1.15,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* SUBTÍTULO */}

          <p
            className="
              text-[9px] uppercase
              tracking-[0.42em] sm:text-xs
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Nuestra boda
          </p>

          <div className="mt-5 w-44 sm:mt-7 sm:w-56">
            <DecorativeDivider />
          </div>

          {/* FRASE SUPERIOR */}

          <p
            className="
              mt-7 font-serif text-sm italic
              sm:mt-10 sm:text-lg
            "
            style={{ color: palette.warmGray }}
          >
            Dos almas, una misma historia
          </p>

          {/* NOMBRES */}

          <h1
            className="
              mt-6 font-serif
              text-[clamp(3.7rem,11vw,7.5rem)]
              font-normal leading-[0.95]
              tracking-[-0.055em]
            "
            style={{ color: palette.ink }}
          >
            Sofía
          </h1>

          <div
            className="
              my-2 flex items-center gap-5
              sm:my-4
            "
          >
            <span
              className="h-px w-12 sm:w-20"
              style={{
                backgroundColor: palette.line,
              }}
            />

            <span
              className="
                font-cursiveDancing
                text-4xl sm:text-6xl
              "
              style={{
                color: palette.antiqueGold,
              }}
            >
              &
            </span>

            <span
              className="h-px w-12 sm:w-20"
              style={{
                backgroundColor: palette.line,
              }}
            />
          </div>

          <h1
            className="
              font-serif
              text-[clamp(3.7rem,11vw,7.5rem)]
              font-normal leading-[0.95]
              tracking-[-0.055em]
            "
            style={{ color: palette.ink }}
          >
            Alejandro
          </h1>

          {/* SEPARADOR DORADO */}

          <div
            className="
              mt-9 flex items-center gap-3
              sm:mt-12
            "
          >
            <span
              className="h-px w-10 sm:w-16"
              style={{
                backgroundColor: palette.antiqueGold,
              }}
            />

            <span
              className="h-2 w-2 rotate-45 border"
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

          {/* FECHA */}

          <p
            className="
              mt-6 font-serif text-sm
              uppercase tracking-[0.18em]
              sm:text-xl sm:tracking-[0.28em]
            "
            style={{
              color: palette.inkSoft,
            }}
          >
            19 · Diciembre · 2026
          </p>

          {/* MENSAJE */}

          <p
            className="
              mt-5 max-w-md px-3
              font-serif text-sm italic
              leading-7 sm:text-lg
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Hay momentos que cambian nuestra historia para siempre.
            Queremos compartir este contigo.
          </p>

          {/* CUENTA REGRESIVA */}

          <div
            className="
              mt-9 w-full max-w-xl
              border-y px-2 py-6
              sm:mt-12 sm:py-8
            "
            style={{
              borderColor: "rgba(164,134,84,0.35)",
            }}
          >
            <Countdown targetDate="2026-12-19T12:00:00" />
          </div>

          {/* INDICADOR DE DESLIZAMIENTO */}

          <motion.div
            className="
              mt-8 flex flex-col
              items-center gap-3
              sm:mt-10
            "
            initial={{ opacity: 0 }}
            animate={{
              opacity: mostrarContenido ? 1 : 0,
            }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
          >
            <span
              className="
                text-[9px] uppercase
                tracking-[0.3em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Desliza para continuar
            </span>

            <motion.span
              className="block h-9 w-px"
              style={{
                backgroundColor: palette.antiqueGold,
              }}
              animate={{
                scaleY: [0.5, 1, 0.5],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
