import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ─── Colección: Renta de inflables ───────────────────────────────────────────

const rentaCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/renta" }),
  schema: z.object({
    // SEO & meta
    titulo: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaDescription: z.string().max(160, "metaDescription no debe superar 160 caracteres"),

    // Media
    imageBanner: z.string().optional(), 
    video: z.string().optional(), 

    // Taxonomía
    icon: z.string().optional(), 
    categoria: z.enum([
      "castillos",
      "Inflables",
      "Servicio",
      "Mobiliario",
      "Actividades",
      "Paquetes",
      "albercas",
      "toboganes",
      "combos",
      "temáticos",
      "otros",
    ]),

    // Logística
    duration: z.string(), 
    capacidad: z.number().int().positive(), 
    disponibilidad: z.boolean().default(true),

    // Contenido estructurado
    requisitos: z.array(z.string()).default([]),

    faqs: z
      .array(
        z.object({
          pregunta: z.string(),
          respuesta: z.string(),
        })
      )
      .default([]),
    tieneVenta: z.boolean().default(false),
  }),
});

// ─── Colección: Venta de inflables ───────────────────────────────────────────

const ventaCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/venta" }),
  schema: z.object({
    // SEO & meta
    titulo: z.string(),
    metaTitle: z.string().max(60, "metaTitle no debe superar 60 caracteres"),
    description: z.string(),
    metaDescription: z.string().max(160, "metaDescription no debe superar 160 caracteres"),

    // Media
    imageBanner: z.string(), 

    dimensiones: z.object({
      largo: z.number().positive(), 
      ancho: z.number().positive(), 
      alto: z.number().positive(), 
    }),
    capacidad: z.number().int().positive(), 
    material: z.string(), 

    categoria: z
      .enum(["castillos", "albercas", "toboganes", "combos", "temáticos", "otros"])
      .optional(),
  }),
});

// ─── Exportar colecciones ─────────────────────────────────────────────────────

export const collections = {
  renta: rentaCollection,
  venta: ventaCollection,
};