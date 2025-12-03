// Año en el footer
const spanAnio = document.getElementById("anioActual");
if (spanAnio) {
  spanAnio.textContent = new Date().getFullYear();
}

// Menú móvil
const botonMenuMovil = document.getElementById("botonMenuMovil");
const navegacion = document.getElementById("navegacion");

if (botonMenuMovil && navegacion) {
  botonMenuMovil.addEventListener("click", () => {
    navegacion.classList.toggle("activo");
  });

  // Cerrar menú si se hace clic en un enlace
  navegacion.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navegacion.classList.remove("activo");
    });
  });
}

// Scroll suave con compensación del header
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const destinoId = enlace.getAttribute("href");
    if (!destinoId || destinoId === "#") return;

    const destino = document.querySelector(destinoId);
    if (!destino) return;

    e.preventDefault();

    const header = document.querySelector(".encabezado-principal");
    const alturaHeader = header ? header.offsetHeight : 70;

    const y = destino.getBoundingClientRect().top + window.scrollY - (alturaHeader + 8);

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  });
});

// Animaciones de fade-in al hacer scroll
const elementosAnimacion = document.querySelectorAll(".animacion-scroll");

if ("IntersectionObserver" in window && elementosAnimacion.length) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("animacion-visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  elementosAnimacion.forEach((el) => observador.observe(el));
} else {
  // Fallback: mostrar todo si no hay IntersectionObserver
  elementosAnimacion.forEach((el) => el.classList.add("animacion-visible"));
}

// Formulario: abrir correo con datos de la reserva
const formReserva = document.getElementById("formReserva");

if (formReserva) {
  formReserva.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value || "";
    const telefono = document.getElementById("telefono")?.value || "";
    const correo = document.getElementById("correo")?.value || "";
    const personas = document.getElementById("personas")?.value || "";
    const fecha = document.getElementById("fecha")?.value || "";
    const hora = document.getElementById("hora")?.value || "";
    const mensaje = document.getElementById("mensaje")?.value || "";

    const destinatario = "reservas@raconetdecadeu.com"; // cámbialo si quieres otro correo
    const asunto = encodeURIComponent(`Reserva web - ${nombre} (${personas} personas)`);
    const cuerpo = encodeURIComponent(
      `Solicitud de reserva desde la web:\n\n` +
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono}\n` +
      `Correo: ${correo}\n` +
      `Personas: ${personas}\n` +
      `Fecha: ${fecha}\n` +
      `Hora: ${hora}\n\n` +
      `Comentarios:\n${mensaje}\n`
    );

    const enlaceMailto = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

    window.location.href = enlaceMailto;
  });
  /* LIGHTBOX DE GALERÍA */
const galeriaItems = document.querySelectorAll(".galeria-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (galeriaItems && lightbox && lightboxImg) {
  galeriaItems.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("activo");
    });
  });

  // Cerrar si se hace clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("activo");
      lightboxImg.src = "";
    }
  });
}

}
