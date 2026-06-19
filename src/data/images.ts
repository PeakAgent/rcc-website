/**
 * Curated ATMOSPHERE imagery (Unsplash CDN).
 *
 * IMPORTANT (imagery rules): these are mood/texture only — warm desert-modern
 * architecture and interiors. They are NEVER presented as Renovation Consulting
 * Co.'s own completed projects. Real project photography goes in <ImageSlot>
 * components marked "REAL PHOTO SLOT".
 *
 * The build sandbox cannot reach image hosts, so these are referenced from the
 * Unsplash CDN at runtime (visitors' browsers load them) and every usage has a
 * branded gradient fallback via <Figure>, so nothing ever renders broken.
 * To localize later: download each into /public/images/atmosphere/ and swap src.
 */

export type Fallback = "dusk" | "sand" | "clay" | "ink" | "blush";

export interface Img {
  src: string;
  alt: string;
  fallback: Fallback;
}

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const images = {
  // Hero — warm modern desert architecture
  heroExterior: {
    src: U("photo-1512917774080-9991f1c4c750", 2400),
    alt: "A modern desert home with clean lines, a pool, and palm trees at dusk",
    fallback: "dusk",
  },
  // Warm modern interior living space
  interiorWarm: {
    src: U("photo-1600607687939-ce8a6c25118c"),
    alt: "A warm, minimal modern living room with natural light",
    fallback: "sand",
  },
  // Modern architectural exterior detail
  exteriorDetail: {
    src: U("photo-1600585154340-be6161a56a0c"),
    alt: "Clean modernist white architecture against a clear sky",
    fallback: "blush",
  },
  // Modern kitchen / interior craft
  interiorKitchen: {
    src: U("photo-1600566753086-00f18fb6b3ea"),
    alt: "A considered modern kitchen with quality materials",
    fallback: "sand",
  },
  // Construction / structure in progress
  construction: {
    src: U("photo-1503387762-592deb58ef4e"),
    alt: "Timber and steel structure of a building under construction",
    fallback: "ink",
  },
  // Material / texture (concrete, plaster, warmth)
  texture: {
    src: U("photo-1600566752355-35792bedcfea"),
    alt: "Warm architectural materials and texture in a modern space",
    fallback: "clay",
  },
  // Desert landscape / Palm Springs context
  desert: {
    src: U("photo-1469854523086-cc02fe5d8800", 2000),
    alt: "Open desert landscape near Palm Springs",
    fallback: "clay",
  },
  // Architectural stair / line study
  lines: {
    src: U("photo-1600573472592-401b489a3cdc"),
    alt: "Strong architectural lines and shadow in a modern interior",
    fallback: "ink",
  },
  // Pool / indoor-outdoor desert living
  pool: {
    src: U("photo-1505691938895-1758d7feb511"),
    alt: "Indoor-outdoor modern living opening to a desert pool",
    fallback: "blush",
  },
} satisfies Record<string, Img>;
