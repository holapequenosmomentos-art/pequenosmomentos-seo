export interface Evento {
  id: number;
  nombre: string;
  tematica: string;
  fecha: string; // YYYY-MM-DD
  ubicacion: string;
  video?: string;
  imagen?: string;
  descripcion: string;
  serviciosIncluidos: string[];
  asistentes?: number;
}

export const eventos: Evento[] = [
  {
    id: 1,
    nombre: "Brunch día de las madres",
    tematica: "",
    fecha: "2025-05-11",
    ubicacion: "Terraza Interlomas G25",
    video: "/videos/brunch-madres.mp4",
    descripcion: "Un brunch especial para celebrar a mamá, con momentos divertidos en la Alberca de Pelotas para los más pequeños.",
    serviciosIncluidos: ["Alberca de Pelotas"],
    asistentes: 25,
  },
   {
    id: 2,
    nombre: "Ana Regina | 4 años",
    tematica: "Temática de la película de encanto",
    fecha: "2025-04-12",
    ubicacion: "Satélite",
    video: "/videos/ana-regina.mp4",
    descripcion: "Diversión y creatividad con el paquete Duo y la Estación de Arte, en una celebración única.",
    serviciosIncluidos: ["Duo", "Estación de Arte"],
    asistentes: 25,
  },
   {
    id: 3,
    nombre: "Teddy Bear Picnic | Nevada Turns 2",
    tematica: "",
    fecha: "2025-03-31",
    ubicacion: "Bosque de Chapultepec",
    video: "/videos/bosque.mp4",
    descripcion: "Una celebración mágica con temática de ositos.",
    serviciosIncluidos: ["Mobiliario Rejita Blanco"],
    asistentes: 25,
  },
   {
    id: 4,
    nombre: "Augusto’s First Rodeo",
    tematica: "Temática de Vaqueros",
    fecha: "2025-07-19",
    ubicacion: "Cuernavaca",
    video: "/videos/cumpleanos-7.mp4",
    descripcion: "Un primer rodeo inolvidable con temática vaquera, diversión en Bumper Cars, inflables y mobiliario especial para la ocasión.",
    serviciosIncluidos: ["Bumper Cars", "Duo", "Mobiliario rejita blanco"],
    asistentes: 25,
  },
    {
    id: 5,
    nombre: "RAINBOW of fun !",
    tematica: "Temática arcoíris",
    fecha: "2025-06-30",
    ubicacion: "Villa Florence, Interlomas",
    video: "/videos/cumpleanos-6.mp4",
    descripcion: "Diversión sin límites con temática arcoíris, inflables espectaculares, estación de arte y mobiliario especial para una fiesta colorida",
    serviciosIncluidos: ["The bouncy bubble", "Mobiliario rejita pastel", "Dúo con resbaladilla", "Estación de arte"],
    asistentes: 25,
  },
   {
    id: 6,
    nombre: "Ayrton’s 1st Lap",
    tematica: "Temática de Carreras",
    fecha: "2025-03-09",
    ubicacion: "Hacienda de Valle Escondido, Atizapan de Zaragoza",
    video: "/videos/carreras.mp4",
    descripcion: "Una celebración mágica con temática de carreras.",
    serviciosIncluidos: ["Mobiliario Infantil Rejita Blanca"],
    asistentes: 25,
  },
  {
    id: 7,
    nombre: "Camila primer año",
    tematica: "Temática de unicornio",
    fecha: "2025-05-30",
    ubicacion: "Jardín Palmetto",
    video: "/videos/cumpleanos-5.mp4",
    descripcion: "Una fiesta llena de color y alegría con temática de unicornio, donde los pequeños disfrutaron la Alberca de Pelotas con resbaladilla.",
    serviciosIncluidos: ["Alberca de pelotas con resbaladilla"],
    asistentes: 25,
  },
  {
    id: 8,
    nombre: "My berry first BIRTHDAY Loretta | It’s berry sweet TO BE 2 Martina",
    tematica: "",
    fecha: "2025-04-09",
    ubicacion: "Lomas Anahuac, Hiuxquilucan",
    video: "/videos/cumpleanos-2.mp4",
    descripcion: "Una celebración mágica con temática de princesas, castillo inflable y estación de arte.",
    serviciosIncluidos: ["White Bounce House", "Mobiliario Rejita Pastel"],
    asistentes: 25,
  },

];


export function formatFecha(fechaStr: string): { mes: string; dia: string } {
  const fecha = new Date(fechaStr + "T12:00:00");
  const mes = fecha.toLocaleDateString("es-MX", { month: "short" })
    .toUpperCase()
    .replace(".", "");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return { mes, dia };
}