
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbwsaI4xEtRRhfscMbNJGF7Dqy2X4KjgVzHWyv0A0hNc2p0NIu8InFkLdHRKGcHxsYcI/exec";

// WhatsApp con código de país de México.
const NUMERO_NOVIA = "522212524729";
const NUMERO_NOVIO = "526694341659";

// Nombres que aparecen en los botones y mensajes.
const NOMBRE_NOVIA = "Sofia";
const NOMBRE_NOVIO = "Alejandro";

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
  mutedGold: "#D7C49F",
  error: "#A33F3F",
  success: "#49644D",
};

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

/* =========================================
   DECODIFICAR ENLACES DEL GENERADOR
========================================= */

/*
  Compatible con:

  JSON.stringify({ nombre, pases })
    -> invertir texto
    -> btoa()
    -> reemplazar + por -
    -> reemplazar / por _
    -> quitar =
    -> ?id=...
*/


function decodificarInvitacion(id) {
  if (!id) return null;

  const base64 = id
    .trim()
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const relleno = "=".repeat(
    (4 - (base64.length % 4)) % 4
  );

  const binario = window.atob(base64 + relleno);

  const bytes = Uint8Array.from(
    binario,
    (caracter) => caracter.charCodeAt(0)
  );

  let datos;

  try {
    // Decodificación UTF-8: conserva á, é, í, ó, ú, ñ.
    const textoInvertido = new TextDecoder("utf-8", {
      fatal: true,
    }).decode(bytes);

    const textoOriginal = textoInvertido
      .split("")
      .reverse()
      .join("");

    datos = JSON.parse(textoOriginal);
  } catch (errorUTF8) {
    // Permite leer enlaces creados con la versión antigua.
    const textoOriginal = binario
      .split("")
      .reverse()
      .join("");

    datos = JSON.parse(textoOriginal);
  }

  if (
    !datos ||
    typeof datos !== "object" ||
    typeof datos.nombre !== "string" ||
    !datos.nombre.trim()
  ) {
    throw new Error(
      "El enlace no contiene un nombre válido."
    );
  }

  const pases = Number(datos.pases);

  if (
    !Number.isInteger(pases) ||
    pases < 1 ||
    pases > 100
  ) {
    throw new Error(
      "El enlace no contiene pases válidos."
    );
  }

  return {
    nombre: datos.nombre.trim(),
    pases,
  };
}

/* =========================================
   DECORACIONES
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

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#A48654] sm:w-16" />
      <span className="h-1.5 w-1.5 rotate-45 border border-[#A48654]" />
      <span className="h-px w-10 bg-[#A48654] sm:w-16" />
    </div>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.2 7.8c.3-.4.6-.4.9-.1l1.1 1.5c.2.3.2.6 0 .9l-.6.8c-.2.3 0 .7.3 1.1.7 1 1.5 1.8 2.6 2.4.4.2.8.3 1.1 0l.8-.8c.3-.3.6-.3.9-.1l1.5 1c.4.2.4.6.2.9-.5 1-1.4 1.6-2.5 1.6-1.6 0-3.8-1.2-5.6-3-1.7-1.7-2.9-3.9-2.9-5.4 0-.9.4-1.9 1.2-2.8Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="5" y="10" width="14" height="10" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/* =========================================
   OPCIÓN DE ASISTENCIA
========================================= */

function AttendanceOption({
  value,
  selectedValue,
  onChange,
  title,
  description,
}) {
  const selected = value === selectedValue;

  return (
    <label
      className="
        flex cursor-pointer items-start gap-4
        border px-5 py-5 text-left transition-colors
      "
      style={{
        backgroundColor: selected
          ? palette.paper
          : palette.paperLight,
        borderColor: selected
          ? palette.antiqueGold
          : "rgba(164,134,84,0.3)",
      }}
    >
      <input
        type="radio"
        name="asistencia"
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className="
          mt-1 flex h-5 w-5 shrink-0
          items-center justify-center rounded-full border
        "
        style={{
          borderColor: palette.antiqueGold,
        }}
      >
        {selected && (
          <span className="h-2.5 w-2.5 rounded-full bg-[#A48654]" />
        )}
      </span>

      <span>
        <span className="block font-serif text-base text-[#1D2733]">
          {title}
        </span>

        <span className="mt-1 block text-xs leading-5 text-[#777168]">
          {description}
        </span>
      </span>
    </label>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [pasesAsignados, setPasesAsignados] = useState(1);
  const [datosDesdeGenerador, setDatosDesdeGenerador] =
    useState(false);

  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);
  const [mensajeInvitado, setMensajeInvitado] = useState("");

  const [error, setError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [loadingSide, setLoadingSide] = useState("");
  const [aviso, setAviso] = useState("");

  /* =========================================
     RECUPERAR NOMBRE Y PASES DE LA URL
  ========================================= */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    try {
      if (id) {
        const datos = decodificarInvitacion(id);

        setNombreInvitado(datos.nombre);
        setPasesAsignados(datos.pases);
        setInvitados(datos.pases);
        setDatosDesdeGenerador(true);
        setUrlError("");

        return;
      }

      // Compatibilidad con enlaces antiguos.
      const nombre = params.get("nombre");
      const pases = Number(params.get("pases"));

      if (
        nombre?.trim() &&
        Number.isInteger(pases) &&
        pases >= 1 &&
        pases <= 100
      ) {
        setNombreInvitado(nombre.trim());
        setPasesAsignados(pases);
        setInvitados(pases);
        setDatosDesdeGenerador(true);
      }
    } catch (err) {
      console.error("Error al leer la invitación:", err);

      setUrlError(
        "No pudimos leer los datos personalizados del enlace. Solicita un enlace nuevo."
      );

      setDatosDesdeGenerador(false);
    }
  }, []);

  /* =========================================
     PASES DISPONIBLES
  ========================================= */

  const availablePasses = useMemo(
    () =>
      Array.from(
        { length: pasesAsignados },
        (_, index) => index + 1
      ),
    [pasesAsignados]
  );

  const cambiarAsistencia = (valor) => {
    setAsistencia(valor);
    setError("");
    setAviso("");

    if (valor === "No podré asistir") {
      setInvitados(0);
    } else {
      setInvitados((actual) =>
        actual >= 1 && actual <= pasesAsignados
          ? actual
          : pasesAsignados
      );
    }
  };

  /* =========================================
     MENSAJE DE WHATSAPP
  ========================================= */

  const crearMensajeWhatsApp = (destinatario) => {
    const cantidad =
      asistencia === "Sí asistiré" ? invitados : 0;

    const textoAsistencia =
      asistencia === "Sí asistiré"
        ? `Confirmo mi asistencia con ${cantidad} ${
            cantidad === 1 ? "persona" : "personas"
          }.`
        : "Lamentablemente no podré asistir.";

    return [
      `Hola ${destinatario} 👋`,
      "",
      "Quiero confirmar mi asistencia a su boda.",
      "",
      `Nombre: ${nombreInvitado.trim()}`,
      `Pases asignados: ${pasesAsignados}`,
      `Confirmación: ${textoAsistencia}`,
      ...(mensajeInvitado.trim()
        ? ["", `Mensaje: ${mensajeInvitado.trim()}`]
        : []),
      "",
      "¡Muchas gracias por la invitación! ❤️",
    ].join("\n");
  };

  /* =========================================
     VALIDAR Y CONFIRMAR
  ========================================= */

  const enviarConfirmacion = async ({
    side,
    phoneNumber,
    recipientName,
  }) => {
    if (loadingSide) return;

    if (!nombreInvitado.trim()) {
      setError("Por favor, escribe el nombre del invitado.");
      return;
    }

    if (!asistencia) {
      setError("Selecciona si podrás acompañarnos.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (invitados < 1 || invitados > pasesAsignados)
    ) {
      setError(
        `Solo puedes confirmar entre 1 y ${pasesAsignados} ${
          pasesAsignados === 1 ? "persona" : "personas"
        }.`
      );
      return;
    }

    setError("");
    setAviso("");
    setLoadingSide(side);

    const datosConfirmacion = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
      lado: side,
      pasesAsignados,
    };

    const mensajeWhatsApp = crearMensajeWhatsApp(recipientName);

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(mensajeWhatsApp);

    /*
      Abrimos una pestaña desde el clic del usuario
      para reducir los bloqueos de ventanas emergentes.
    */
    const whatsappWindow = window.open(
      "about:blank",
      "_blank"
    );

    let solicitudEnviada = false;

    try {
      /*
        Se conserva el formato del envío original
        para el Google Apps Script existente.

        IMPORTANTE:
        Con mode: "no-cors" no podemos comprobar
        que Google Sheets guardó la fila.
      */

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(datosConfirmacion),
      });

      solicitudEnviada = true;
    } catch (err) {
      console.error("Error al contactar Google Sheets:", err);
    }

    if (solicitudEnviada) {
      setAviso(
        "Se envió la solicitud de registro. Completa tu confirmación enviando el mensaje por WhatsApp."
      );
    } else {
      setAviso(
        "No pudimos contactar la hoja de respuestas. Envía tu confirmación por WhatsApp."
      );
    }

    setLoadingSide("");

    if (whatsappWindow && !whatsappWindow.closed) {
      whatsappWindow.location.replace(whatsappUrl);
    } else {
      window.location.href = whatsappUrl;
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      className="
        relative flex min-h-[820px] w-full
        items-center justify-center overflow-hidden
        px-5 py-24 sm:px-8 sm:py-28
        lg:px-12 lg:py-32
      "
      style={{
        backgroundColor: palette.ink,
      }}
    >
      {/* MARCO EXTERIOR */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-5
          border border-[#A48654]/40
          sm:inset-8 lg:inset-10
        "
      />

      {/* MARCO INTERIOR */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-[26px]
          border border-[#A48654]/15
          sm:inset-[38px] lg:inset-[46px]
        "
      />

      {/* ESQUINAS */}

      <CornerOrnament
        className="
          pointer-events-none absolute left-6 top-6
          h-16 w-16 text-[#A48654]/45
          sm:left-9 sm:top-9 sm:h-20 sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none absolute right-6 top-6
          h-16 w-16 rotate-90 text-[#A48654]/45
          sm:right-9 sm:top-9 sm:h-20 sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none absolute bottom-6 left-6
          h-16 w-16 -rotate-90 text-[#A48654]/45
          sm:bottom-9 sm:left-9 sm:h-20 sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none absolute bottom-6 right-6
          h-16 w-16 rotate-180 text-[#A48654]/45
          sm:bottom-9 sm:right-9 sm:h-20 sm:w-20
        "
      />

      {/* CONTENIDO */}

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* ENCABEZADO */}

        <motion.header
          variants={fadeUp}
          className="
            mx-auto mb-12 flex max-w-3xl
            flex-col items-center text-center sm:mb-16
          "
        >
          <div
            className="
              flex h-16 w-16 items-center justify-center
              rounded-full border border-[#A48654]/60
              text-[#D7C49F]
            "
          >
            <EnvelopeIcon />
          </div>

          <p
            className="
              mt-7 text-[9px] uppercase
              tracking-[0.35em] text-[#D7C49F]
              sm:text-[10px]
            "
          >
            Nos encantará contar contigo
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7 font-serif text-[39px]
              font-normal leading-tight text-[#FBF9F4]
              sm:text-[54px] md:text-[64px]
            "
          >
            Confirmación de asistencia
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl font-serif
              text-sm italic leading-7
              text-[#E5DED2] sm:text-base
            "
          >
            Por favor, confirma tu asistencia y ayúdanos
            a preparar cada detalle de nuestra celebración.
          </p>
        </motion.header>

        {/* FORMULARIO */}

        <motion.div
          variants={fadeUp}
          className="
            relative mx-auto w-full max-w-3xl
            border border-[#A48654]/50
            bg-[#FBF9F4]
            px-6 py-12
            sm:px-10 sm:py-14
            md:px-14
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-[7px]
              border border-[#A48654]/20
            "
          />

          <div className="relative z-10">
            {/* NOMBRE */}

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label
                  htmlFor="confirmation-name"
                  className="
                    text-[9px] uppercase tracking-[0.28em]
                    text-[#725B37]
                  "
                >
                  Nombre del invitado
                </label>

                {datosDesdeGenerador && (
                  <span
                    className="
                      inline-flex items-center gap-2
                      text-[9px] text-[#777168]
                    "
                  >
                    <LockIcon />
                    Invitación personalizada
                  </span>
                )}
              </div>

              <input
                id="confirmation-name"
                type="text"
                value={nombreInvitado}
                onChange={(event) => {
                  if (!datosDesdeGenerador) {
                    setNombreInvitado(event.target.value);
                  }
                }}
                readOnly={datosDesdeGenerador}
                placeholder="Nombre y apellido"
                autoComplete="name"
                className="
                  mt-4 w-full border border-[#A48654]/40
                  bg-white px-5 py-4
                  font-serif text-base text-[#1D2733]
                  outline-none focus:border-[#A48654]
                  sm:text-lg
                "
              />

              <AnimatePresence>
                {urlError && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 text-xs leading-6 text-[#A33F3F]"
                  >
                    {urlError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ASISTENCIA */}

            <div className="mt-9 border-t border-[#A48654]/30 pt-9">
              <p
                className="
                  text-[9px] uppercase tracking-[0.28em]
                  text-[#725B37]
                "
              >
                ¿Podrás acompañarnos?
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={cambiarAsistencia}
                  title="Sí asistiré"
                  description="Será un gusto celebrar juntos."
                />

                <AttendanceOption
                  value="No podré asistir"
                  selectedValue={asistencia}
                  onChange={cambiarAsistencia}
                  title="No podré asistir"
                  description="Agradecemos que nos lo hagas saber."
                />
              </div>
            </div>

            {/* PASES */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-9 border-t border-[#A48654]/30 pt-9">
                    <div
                      className="
                        flex flex-wrap items-center
                        justify-between gap-3
                      "
                    >
                      <label
                        htmlFor="confirmation-passes"
                        className="
                          text-[9px] uppercase
                          tracking-[0.28em] text-[#725B37]
                        "
                      >
                        Personas que asistirán
                      </label>

                      <span
                        className="
                          text-[10px] uppercase
                          tracking-[0.12em] text-[#777168]
                        "
                      >
                        Máximo {pasesAsignados}
                      </span>
                    </div>

                    <select
                      id="confirmation-passes"
                      value={invitados}
                      onChange={(event) =>
                        setInvitados(Number(event.target.value))
                      }
                      className="
                        mt-4 w-full appearance-none
                        border border-[#A48654]/40
                        bg-white px-5 py-4
                        text-center font-serif text-base
                        text-[#1D2733] outline-none
                        focus:border-[#A48654]
                        sm:text-lg
                      "
                    >
                      {availablePasses.map((numero) => (
                        <option key={numero} value={numero}>
                          {numero}{" "}
                          {numero === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>

                    <p
                      className="
                        mt-3 text-center font-serif
                        text-xs italic text-[#777168]
                      "
                    >
                      Esta invitación tiene{" "}
                      {pasesAsignados === 1
                        ? "1 lugar reservado"
                        : `${pasesAsignados} lugares reservados`}.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}

            <div className="mt-9 border-t border-[#A48654]/30 pt-9">
              <label
                htmlFor="confirmation-message"
                className="
                  text-[9px] uppercase tracking-[0.28em]
                  text-[#725B37]
                "
              >
                Mensaje para los novios
              </label>

              <textarea
                id="confirmation-message"
                value={mensajeInvitado}
                onChange={(event) =>
                  setMensajeInvitado(event.target.value)
                }
                placeholder="Escribe un mensaje especial (opcional)"
                rows={4}
                maxLength={500}
                className="
                  mt-4 w-full resize-none
                  border border-[#A48654]/40
                  bg-white px-5 py-4
                  font-serif text-sm leading-7
                  text-[#1D2733] outline-none
                  focus:border-[#A48654]
                  sm:text-base
                "
              />

              <p className="mt-2 text-right text-[10px] text-[#777168]">
                {mensajeInvitado.length}/500
              </p>
            </div>

            {/* ERRORES Y AVISOS */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="
                    mt-7 border border-[#A33F3F]/30
                    px-4 py-3 text-center
                    font-serif text-sm text-[#A33F3F]
                  "
                >
                  {error}
                </motion.p>
              )}

              {!error && aviso && (
                <motion.p
                  key="aviso"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="
                    mt-7 border border-[#A48654]/40
                    px-4 py-3 text-center
                    font-serif text-sm leading-6
                    text-[#39434D]
                  "
                >
                  {aviso}
                </motion.p>
              )}
            </AnimatePresence>

            {/* BOTONES DE CONFIRMACIÓN */}

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <motion.button
                type="button"
                disabled={Boolean(loadingSide)}
                onClick={() =>
                  enviarConfirmacion({
                    side: "Novia",
                    phoneNumber: NUMERO_NOVIA,
                    recipientName: NOMBRE_NOVIA,
                  })
                }
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="
                  inline-flex min-h-[60px]
                  items-center justify-center gap-3
                  border border-[#1D2733]
                  bg-[#1D2733] px-5 py-4
                  text-[#FBF9F4]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <WhatsAppIcon />

                <span
                  className="
                    text-[10px] uppercase
                    tracking-[0.16em]
                  "
                >
                  {loadingSide === "Novia"
                    ? "Preparando confirmación..."
                    : `Confirmar con ${NOMBRE_NOVIA}`}
                </span>
              </motion.button>

              <motion.button
                type="button"
                disabled={Boolean(loadingSide)}
                onClick={() =>
                  enviarConfirmacion({
                    side: "Novio",
                    phoneNumber: NUMERO_NOVIO,
                    recipientName: NOMBRE_NOVIO,
                  })
                }
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="
                  inline-flex min-h-[60px]
                  items-center justify-center gap-3
                  border border-[#1D2733]
                  bg-[#FBF9F4] px-5 py-4
                  text-[#1D2733]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <WhatsAppIcon />

                <span
                  className="
                    text-[10px] uppercase
                    tracking-[0.16em]
                  "
                >
                  {loadingSide === "Novio"
                    ? "Preparando confirmación..."
                    : `Confirmar con ${NOMBRE_NOVIO}`}
                </span>
              </motion.button>
            </div>

            {/* NOTA FINAL */}

            <p
              className="
                mx-auto mt-7 max-w-xl text-center
                font-serif text-xs italic
                leading-6 text-[#777168]
                sm:text-[13px]
              "
            >
              Al confirmar, enviaremos tu respuesta a nuestra
              lista de asistencia y abriremos WhatsApp para que
              puedas enviar tu mensaje a los novios.
            </p>
          </div>
        </motion.div>

        {/* CIERRE */}

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p
            className="
              font-serif text-xl italic
              leading-8 text-[#FBF9F4]
              sm:text-2xl
            "
          >
            Será un honor compartir este día contigo.
          </p>

          <div className="mt-7">
            <DecorativeDivider />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
