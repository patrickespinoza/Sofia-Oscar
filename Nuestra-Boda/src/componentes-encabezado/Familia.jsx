import { motion } from "framer-motion";

const padres = [
  {
    categoria: "Familia de la novia",
    titulo: "Papás de la novia",
    nombres: [
      "María De La Luz Zavaleta Hernandez",
      "Luis Eleazar Sánchez Padilla",
    ],
  },
  {
    categoria: "Familia del novio",
    titulo: "Papás del novio",
    nombres: [
      "Maria Alejandra Cuanalo Huitzil",
      "Antonio Orea De Jesús",
    ],
  },
];

const padrinos = [
  "Eugenio Montiel Mendoza",
  "Boscardin González Domínguez",
];

const contenedor = {
  oculto: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const elemento = {
  oculto: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function EsquinaDecorativa({ posicion }) {
  const posiciones = {
    superiorIzquierda:
      "left-5 top-5 border-l border-t sm:left-8 sm:top-8",
    superiorDerecha:
      "right-5 top-5 border-r border-t sm:right-8 sm:top-8",
    inferiorIzquierda:
      "bottom-5 left-5 border-b border-l sm:bottom-8 sm:left-8",
    inferiorDerecha:
      "bottom-5 right-5 border-b border-r sm:bottom-8 sm:right-8",
  };

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-10 w-10 border-[#A48654]/40 sm:h-14 sm:w-14 ${posiciones[posicion]}`}
    />
  );
}

function UnionNombres({ nombres, colorClaro = false }) {
  return (
    <div className="space-y-4">
      {nombres.map((nombre, index) => (
        <div key={nombre}>
          <p
            className={`font-serif text-[1.05rem] font-normal leading-8 sm:text-lg ${
              colorClaro ? "text-[#FBF9F4]" : "text-[#1D2733]"
            }`}
          >
            {nombre}
          </p>

          {index < nombres.length - 1 && (
            <div className="my-3 flex items-center justify-center gap-3">
              <span
                className={`h-px w-7 ${
                  colorClaro ? "bg-[#A48654]/60" : "bg-[#A48654]/45"
                }`}
              />

              <span
                className={`font-serif text-sm italic ${
                  colorClaro ? "text-[#A48654]" : "text-[#725B37]"
                }`}
              >
                y
              </span>

              <span
                className={`h-px w-7 ${
                  colorClaro ? "bg-[#A48654]/60" : "bg-[#A48654]/45"
                }`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Familia() {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F4] px-5 py-24 sm:px-8 sm:py-32">
      {/* Marco decorativo exterior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-[#A48654]/25 sm:inset-7"
      />

      <EsquinaDecorativa posicion="superiorIzquierda" />
      <EsquinaDecorativa posicion="superiorDerecha" />
      <EsquinaDecorativa posicion="inferiorIzquierda" />
      <EsquinaDecorativa posicion="inferiorDerecha" />

      {/* Decoraciones sutiles */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-20 w-px bg-[#A48654]/20"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-px bg-[#A48654]/20"
      />

      <motion.div
        variants={contenedor}
        initial="oculto"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Encabezado */}
        <motion.header
          variants={elemento}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#A48654]/60 sm:w-16" />

            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.34em] text-[#725B37] sm:text-xs">
              Con la bendición de
            </p>

            <span className="h-px w-10 bg-[#A48654]/60 sm:w-16" />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight text-[#1D2733] sm:text-5xl md:text-6xl">
            Nuestras familias
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-sans text-sm font-light leading-7 text-[#777168] sm:text-base sm:leading-8">
            Nos sentimos profundamente agradecidos de comenzar esta nueva
            etapa acompañados por quienes nos han brindado su amor, ejemplo
            y bendición.
          </p>
        </motion.header>

        {/* Padres de los novios */}
        <div className="grid gap-px overflow-hidden border border-[#A48654]/30 bg-[#A48654]/30 md:grid-cols-2">
          {padres.map((grupo) => (
            <motion.article
              key={grupo.titulo}
              variants={elemento}
              className="relative bg-[#FBF9F4] px-6 py-12 text-center sm:px-10 sm:py-14"
            >

              <p className="mb-4 font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-[#725B37] sm:text-[10px]">
                {grupo.categoria}
              </p>

              <h3 className="font-serif text-2xl font-normal text-[#1D2733] sm:text-3xl">
                {grupo.titulo}
              </h3>

              <div className="mx-auto my-7 h-px w-14 bg-[#A48654]/60" />

              <UnionNombres nombres={grupo.nombres} />
            </motion.article>
          ))}
        </div>

        {/* Padrinos */}
        <motion.article
          variants={elemento}
          className="relative mt-8 overflow-hidden border border-[#1D2733] bg-[#1D2733] px-6 py-14 text-center sm:mt-10 sm:px-12 sm:py-16"
        >
          {/* Líneas decorativas interiores */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border border-[#A48654]/30 sm:inset-4"
          />


          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-9 bg-[#A48654]/60 sm:w-14" />

              <p className="font-sans text-[9px] font-medium uppercase tracking-[0.32em] text-[#A48654] sm:text-[10px]">
                Nos acompañan como
              </p>

              <span className="h-px w-9 bg-[#A48654]/60 sm:w-14" />
            </div>

            <h3 className="font-serif text-3xl font-normal text-[#FBF9F4] sm:text-4xl">
              Padrinos
            </h3>

            <div className="mx-auto my-8 h-px w-16 bg-[#A48654]/70" />

            <UnionNombres
              nombres={padrinos}
              colorClaro
            />
          </div>
        </motion.article>

        {/* Cierre */}
        <motion.div
          variants={elemento}
          className="mx-auto mt-14 max-w-2xl text-center sm:mt-16"
        >
          <p className="font-serif text-xl italic leading-8 text-[#39434D] sm:text-2xl">
            Gracias por guiarnos y caminar a nuestro lado
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#A48654]/45" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#A48654]" />
            <span className="h-px w-12 bg-[#A48654]/45" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}