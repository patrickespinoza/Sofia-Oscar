
import { useState } from "react";

/* =========================================
   GENERADOR DE INVITACIONES
   Sofia & Alejandro — WEDLY
========================================= */

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#DED6C8",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
  warmGray: "#777168",
  white: "#FFFFFF",
  line: "#C8BDAA",
};

/* =========================================
   ICONOS
========================================= */

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="11" height="11" rx="1.5" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-10A1.5 1.5 0 0 0 3 5.5v10A1.5 1.5 0 0 0 4.5 17H8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M13 5h6v6" />
      <path d="m19 5-9 9" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#A48654] sm:w-16" />
      <span className="h-1.5 w-1.5 rotate-45 border border-[#A48654]" />
      <span className="h-px w-10 bg-[#A48654] sm:w-16" />
    </div>
  );
}

/* =========================================
   CODIFICAR DATOS
========================================= */

/*
  Compatible con Portada.jsx y Confirmacion.jsx:

  1. Crear JSON { nombre, pases }
  2. Invertir texto
  3. Convertir a Base64
  4. Adaptar Base64 para URL
  5. Colocar en ?id=

  Nota: es una codificación reversible,
  no un cifrado criptográfico.
*/

function crearId(nombreInvitado, numeroPases) {
  const datos = {
    nombre: nombreInvitado,
    pases: numeroPases,
  };

  const textoOriginal = JSON.stringify(datos);

  const textoInvertido = textoOriginal
    .split("")
    .reverse()
    .join("");

  /*
    TextEncoder permite incluir nombres
    con acentos y otros caracteres Unicode.
  */

  const bytes = new TextEncoder().encode(textoInvertido);

  let binario = "";

  bytes.forEach((byte) => {
    binario += String.fromCharCode(byte);
  });

  const base64 = btoa(binario);

  return base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

/* =========================================
   GENERADOR PRINCIPAL
========================================= */

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("1");

  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [linkCopiado, setLinkCopiado] = useState(false);
  const [mensajeCopiado, setMensajeCopiado] = useState(false);

  const [error, setError] = useState("");

  /* =========================================
     REINICIAR RESULTADO
  ========================================= */

  const limpiarResultado = () => {
    setLink("");
    setMensaje("");
    setLinkCopiado(false);
    setMensajeCopiado(false);
    setError("");
  };

  /* =========================================
     GENERAR INVITACIÓN
  ========================================= */

  const generarLink = () => {
    const nombreLimpio = nombre.trim();
    const numeroPases = Number(pases);

    if (!nombreLimpio) {
      setError(
        "Escribe el nombre del invitado o familia."
      );
      return;
    }

    if (
      !Number.isInteger(numeroPases) ||
      numeroPases < 1 ||
      numeroPases > 100
    ) {
      setError(
        "Ingresa un número válido de lugares, entre 1 y 100."
      );
      return;
    }

    try {
      const id = crearId(
        nombreLimpio,
        numeroPases
      );

      /*
        Generamos el enlace hacia la raíz
        de la invitación, igual que antes.
      */

      const url = new URL("/", window.location.origin);

      url.searchParams.set("id", id);

      const enlaceFinal = url.toString();

      setLink(enlaceFinal);

      const textoPases =
        numeroPases === 1
          ? "1 lugar"
          : `${numeroPases} lugares`;

      const mensajeWhatsApp = `✨ *Invitación especial* ✨

Hola ${nombreLimpio} 🤍

Con mucha alegría queremos compartir contigo nuestra invitación de boda.

Hemos reservado especialmente para ti:
🎟️ *${textoPases}*

Puedes consultar todos los detalles de nuestra celebración en el siguiente enlace:

${enlaceFinal}

Será un gusto compartir este momento tan especial contigo.

*Sofia & Alejandro* 🤍`;

      setMensaje(mensajeWhatsApp);

      setLinkCopiado(false);
      setMensajeCopiado(false);
      setError("");
    } catch (err) {
      console.error("Error al generar invitación:", err);

      setError(
        "No se pudo generar la invitación. Inténtalo nuevamente."
      );
    }
  };

  /* =========================================
     COPIAR AL PORTAPAPELES
  ========================================= */

  const copiarTexto = async (texto, tipo) => {
    if (!texto) return;

    try {
      await navigator.clipboard.writeText(texto);

      if (tipo === "link") {
        setLinkCopiado(true);
        setTimeout(() => setLinkCopiado(false), 2000);
      } else {
        setMensajeCopiado(true);
        setTimeout(() => setMensajeCopiado(false), 2000);
      }
    } catch (err) {
      console.error("No se pudo copiar:", err);
      setError(
        "No se pudo copiar automáticamente. Selecciona el texto para copiarlo."
      );
    }
  };

  /* =========================================
     ABRIR WHATSAPP
  ========================================= */

  const abrirWhatsApp = () => {
    if (!mensaje) return;

    const url =
      "https://wa.me/?text=" +
      encodeURIComponent(mensaje);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* =========================================
     VISTA PREVIA DE WHATSAPP
  ========================================= */

  const renderizarMensaje = (texto) => {
    /*
      Muestra los asteriscos de formato tal como
      se escriben en el editor. WhatsApp aplicará
      su propio formato al enviarlo.
    */

    return texto;
  };

  return (
    <main
      className="
        min-h-screen
        w-full
        min-w-0
        max-w-full
        overflow-x-hidden
        px-4
        py-10
        sm:px-6
        sm:py-14
        lg:px-10
      "
      style={{
        backgroundColor: palette.paperLight,
        color: palette.ink,
      }}
    >
      {/* =========================================
          ENCABEZADO
      ========================================= */}

      <header
        className="
          mx-auto
          mb-12
          w-full
          min-w-0
          max-w-6xl
          text-center
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.42em]
            sm:text-[10px]
          "
          style={{
            color: palette.antiqueGoldDark,
          }}
        >
          Sofia & Alejandro
        </p>

        <h1
          className="
            mt-4
            font-serif
            text-3xl
            font-normal
            sm:text-4xl
            lg:text-5xl
          "
        >
          Generador de invitaciones
        </h1>

        <div className="mt-6">
          <DecorativeDivider />
        </div>

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            font-serif
            text-sm
            leading-7
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
        >
          Personaliza el nombre y los lugares reservados
          para cada invitado y comparte su enlace único.
        </p>
      </header>

      {/* =========================================
          CONTENIDO PRINCIPAL
      ========================================= */}

      <div
        className="
          mx-auto
          grid
          w-full
          min-w-0
          max-w-6xl
          grid-cols-1
          gap-9
          lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
          lg:items-start
          lg:gap-12
        "
      >
        {/* =========================================
            FORMULARIO
        ========================================= */}

        <section
          className="
            order-2
            w-full
            min-w-0
            max-w-full
            overflow-hidden
            border
            bg-white
            p-5
            sm:p-8
            lg:order-1
          "
          style={{
            borderColor: "rgba(164,134,84,0.35)",
            boxShadow: "0 18px 45px rgba(29,39,51,0.06)",
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.32em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Datos del invitado
          </p>

          <h2 className="mt-3 font-serif text-2xl">
            Crear invitación
          </h2>

          {/* NOMBRE */}

          <div className="mt-8 w-full min-w-0">
            <label
              htmlFor="generador-nombre"
              className="
                mb-3
                block
                text-[10px]
                uppercase
                tracking-[0.24em]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Nombre o familia
            </label>

            <input
              id="generador-nombre"
              type="text"
              placeholder="Ej. Familia Hernández"
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
                limpiarResultado();
              }}
              className="
                block
                w-full
                min-w-0
                max-w-full
                border
                bg-white
                px-4
                py-4
                font-serif
                text-base
                outline-none
                focus:border-[#A48654]
              "
              style={{
                borderColor: "rgba(164,134,84,0.4)",
              }}
            />
          </div>

          {/* PASES */}

          <div className="mt-6 w-full min-w-0">
            <label
              htmlFor="generador-pases"
              className="
                mb-3
                block
                text-[10px]
                uppercase
                tracking-[0.24em]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Número de lugares
            </label>

            <input
              id="generador-pases"
              type="number"
              min="1"
              max="100"
              step="1"
              inputMode="numeric"
              value={pases}
              onChange={(event) => {
                setPases(event.target.value);
                limpiarResultado();
              }}
              className="
                block
                w-full
                min-w-0
                max-w-full
                border
                bg-white
                px-4
                py-4
                font-serif
                text-base
                outline-none
                focus:border-[#A48654]
              "
              style={{
                borderColor: "rgba(164,134,84,0.4)",
              }}
            />
          </div>

          {/* ERROR */}

          {error && (
            <p
              role="alert"
              className="
                mt-5
                max-w-full
                break-words
                border
                px-4
                py-3
                text-sm
                leading-6
              "
              style={{
                color: "#9A3939",
                borderColor: "rgba(154,57,57,0.35)",
              }}
            >
              {error}
            </p>
          )}

          {/* GENERAR */}

          <button
            type="button"
            onClick={generarLink}
            className="
              mt-8
              w-full
              max-w-full
              px-6
              py-4
              text-[10px]
              uppercase
              tracking-[0.26em]
              text-white
              transition
              hover:opacity-90
              active:scale-[0.99]
            "
            style={{
              backgroundColor: palette.ink,
            }}
          >
            Generar invitación
          </button>

          {/* =========================================
              ENLACE PERSONALIZADO
          ========================================= */}

          {link && (
            <div
              className="
                mt-9
                w-full
                min-w-0
                max-w-full
                border-t
                pt-8
              "
              style={{
                borderColor: "rgba(164,134,84,0.3)",
              }}
            >
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
                Enlace personalizado
              </p>

              <div
                className="
                  mt-4
                  w-full
                  min-w-0
                  max-w-full
                  break-all
                  border
                  p-4
                  text-xs
                  leading-6
                "
                style={{
                  backgroundColor: palette.paper,
                  borderColor: "rgba(164,134,84,0.3)",
                  color: palette.inkSoft,
                  overflowWrap: "anywhere",
                  wordBreak: "break-all",
                }}
              >
                {link}
              </div>

              <div
                className="
                  mt-4
                  grid
                  w-full
                  min-w-0
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                <button
                  type="button"
                  onClick={() => copiarTexto(link, "link")}
                  className="
                    flex
                    min-w-0
                    items-center
                    justify-center
                    gap-2
                    border
                    px-4
                    py-3
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    transition
                    hover:bg-[#F5F1E8]
                  "
                  style={{
                    borderColor: palette.ink,
                    color: palette.ink,
                  }}
                >
                  {linkCopiado ? <CheckIcon /> : <CopyIcon />}
                  {linkCopiado
                    ? "Enlace copiado"
                    : "Copiar enlace"}
                </button>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-w-0
                    items-center
                    justify-center
                    gap-2
                    border
                    px-4
                    py-3
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    transition
                    hover:opacity-90
                  "
                  style={{
                    backgroundColor: palette.ink,
                    borderColor: palette.ink,
                    color: palette.white,
                  }}
                >
                  <ExternalIcon />
                  Abrir invitación
                </a>
              </div>

              <p
                className="
                  mt-4
                  font-serif
                  text-xs
                  italic
                  leading-6
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                Este enlace incluye el nombre y los pases
                asignados para la confirmación de asistencia.
              </p>
            </div>
          )}

          {/* =========================================
              MENSAJE PARA WHATSAPP
          ========================================= */}

          {link && (
            <div
              className="
                mt-9
                w-full
                min-w-0
                max-w-full
                border-t
                pt-8
              "
              style={{
                borderColor: "rgba(164,134,84,0.3)",
              }}
            >
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
                Mensaje para WhatsApp
              </p>

              <p
                className="
                  mt-3
                  text-xs
                  leading-6
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                Puedes personalizar el texto antes de
                copiarlo o enviarlo.
              </p>

              <textarea
                value={mensaje}
                onChange={(event) => {
                  setMensaje(event.target.value);
                  setMensajeCopiado(false);
                }}
                rows={14}
                className="
                  mt-4
                  block
                  w-full
                  min-w-0
                  max-w-full
                  resize-y
                  border
                  bg-white
                  p-4
                  text-sm
                  leading-6
                  outline-none
                  focus:border-[#A48654]
                "
                style={{
                  borderColor: "rgba(164,134,84,0.4)",
                  color: palette.ink,
                  overflowWrap: "anywhere",
                }}
              />

              <button
                type="button"
                onClick={() => copiarTexto(mensaje, "mensaje")}
                className="
                  mt-4
                  flex
                  w-full
                  min-w-0
                  items-center
                  justify-center
                  gap-3
                  px-4
                  py-4
                  text-center
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition
                  hover:opacity-90
                  sm:px-6
                  sm:tracking-[0.22em]
                "
                style={{
                  backgroundColor: palette.antiqueGoldDark,
                }}
              >
                {mensajeCopiado ? <CheckIcon /> : <CopyIcon />}
                <span className="min-w-0">
                  {mensajeCopiado
                    ? "Mensaje copiado"
                    : "Copiar mensaje para WhatsApp"}
                </span>
              </button>

              <button
                type="button"
                onClick={abrirWhatsApp}
                className="
                  mt-3
                  flex
                  w-full
                  min-w-0
                  items-center
                  justify-center
                  gap-3
                  border
                  px-6
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  transition
                  hover:bg-[#F5F1E8]
                "
                style={{
                  borderColor: palette.ink,
                  color: palette.ink,
                }}
              >
                <ExternalIcon />
                Abrir en WhatsApp
              </button>
            </div>
          )}
        </section>

        {/* =========================================
            VISTA PREVIA
        ========================================= */}

        <section
          className="
            order-1
            flex
            w-full
            min-w-0
            max-w-full
            flex-col
            items-center
            lg:order-2
          "
        >
          <div className="mb-6 text-center">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Invitación
            </p>

            <h2 className="mt-3 font-serif text-2xl">
              Sofia & Alejandro
            </h2>
          </div>

          {/* =========================================
              VISTA PREVIA DE WHATSAPP
          ========================================= */}

          {link && (
            <div
              className="
                mt-10
                w-full
                min-w-0
                max-w-[430px]
              "
            >
              <p
                className="
                  mb-4
                  text-center
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Vista previa de WhatsApp
              </p>

              <div
                className="
                  w-full
                  min-w-0
                  max-w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D6D0C6]
                "
                style={{
                  backgroundColor: "#EFEAE2",
                  boxShadow: "0 15px 35px rgba(29,39,51,0.08)",
                }}
              >
                {/* ENCABEZADO SIMULADO */}

                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    border-b
                    px-4
                    py-3
                  "
                  style={{
                    backgroundColor: "#F7F6F3",
                    borderColor: "#DDD8D0",
                  }}
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      font-serif
                      text-lg
                    "
                    style={{
                      backgroundColor: palette.ink,
                      color: palette.paperLight,
                    }}
                  >
                    W
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        break-words
                        text-sm
                        font-semibold
                        text-[#1D2733]
                      "
                    >
                      Vista previa del mensaje
                    </p>

                    <p
                      className="
                        break-words
                        text-[11px]
                        text-[#777168]
                      "
                    >
                      Así se verá el texto al compartirlo
                    </p>
                  </div>
                </div>

                {/* BURBUJA */}

                <div
                  className="
                    w-full
                    min-w-0
                    max-w-full
                    p-3
                    sm:p-4
                  "
                >
                  <div
                    className="
                      ml-auto
                      w-fit
                      min-w-0
                      max-w-[94%]
                      rounded-xl
                      rounded-tr-sm
                      px-3
                      py-3
                      sm:px-4
                    "
                    style={{
                      backgroundColor: "#D9FDD3",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                    }}
                  >
                    <p
                      className="
                        whitespace-pre-wrap
                        break-words
                        text-[13px]
                        leading-6
                        text-[#1D2733]
                      "
                      style={{
                        overflowWrap: "anywhere",
                        wordBreak: "break-word",
                      }}
                    >
                      {renderizarMensaje(mensaje)}
                    </p>

                    <p
                      className="
                        mt-2
                        text-right
                        text-[10px]
                      "
                      style={{
                        color: "#6F8270",
                      }}
                    >
                      Vista previa ✓✓
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-sm
                  text-center
                  font-serif
                  text-xs
                  italic
                  leading-6
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                La vista previa muestra el mensaje que
                podrás copiar o compartir con cada invitado.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* =========================================
          PIE DEL GENERADOR
      ========================================= */}

      <footer
        className="
          mx-auto
          mt-16
          w-full
          min-w-0
          max-w-6xl
          border-t
          pt-7
          text-center
        "
        style={{
          borderColor: "rgba(164,134,84,0.3)",
        }}
      >
        <p
          className="
            break-words
            text-[9px]
            uppercase
            tracking-[0.35em]
          "
          style={{
            color: palette.antiqueGoldDark,
          }}
        >
          Sofia & Alejandro · Invitaciones personalizadas
        </p>
      </footer>
    </main>
  );
}
