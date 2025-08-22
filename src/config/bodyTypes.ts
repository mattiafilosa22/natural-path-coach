// Configurazione per i tipi di corpo con immagini e caratteristiche

import mesomorphMale from "@/assets/body-types/mesomorph-male.jpg";
import skinnyFatMale from "@/assets/body-types/skinny-fat-male.jpg";
import gynoidFemale from "@/assets/body-types/gynoid-female.jpg";
import androidFemale from "@/assets/body-types/gynoid-female.jpg";
import endomorphMale from "@/assets/body-types/endomorfo.png";
import ectomorphMale from "@/assets/body-types/ectomorph.png";
import { BodyTypeMale, BodyTypeFemale, Gender } from "@/constants/chatbot";

export interface BodyTypeConfig {
  type: BodyTypeMale | BodyTypeFemale;
  shortDescription: string;
  characteristics: string[];
  image: string;
}

export const MALE_BODY_TYPES: BodyTypeConfig[] = [
  {
    type: BodyTypeMale.MESOMORFO,
    shortDescription: "Fisico atletico e naturalmente muscoloso",
    characteristics: [
      "Bassa percentuale di massa grassa",
      "Elevata percentuale di massa muscolare",
      "Spalle larghe, vita e fianchi stretti",
      "Ottima struttura scheletrica"
    ],
    image: mesomorphMale,
  },
  {
    type: BodyTypeMale.ECTOMORFO,
    shortDescription: "Fisico snello e longilinea",
    characteristics: [
      "Struttura esile con arti lunghi",
      "Difficoltà ad aumentare massa",
      "Spalle strette e metabolismo veloce",
      "Naturalmente magro"
    ],
    image: ectomorphMale,
  },
  {
    type: BodyTypeMale.ENDOMORFO,
    shortDescription: "Fisico robusto con tendenza ad ingrassare",
    characteristics: [
      "Struttura rotondeggiante",
      "Spalle strette rispetto ai fianchi",
      "Alta percentuale di massa grassa",
      "Tessuti molli e struttura ossea robusta"
    ],
    image: endomorphMale,
  },
  {
    type: BodyTypeMale.SKINNY_FAT,
    shortDescription: "Magro ma con poca definizione muscolare",
    characteristics: [
      "Peso normale ma grasso alto",
      "Bassa massa muscolare",
      "Aspetto magro ma poco definito",
      "Metabolismo rallentato"
    ],
    image: skinnyFatMale,
  },
];

export const FEMALE_BODY_TYPES: BodyTypeConfig[] = [
  {
    type: BodyTypeFemale.GINOIDE,
    shortDescription: "Corpo a pera - accumulo nella parte inferiore",
    characteristics: [
      "Distribuzione del grasso predominante da ombelico in giù",
      "Fianchi, glutei e cosce sempre più ampi rispetto alla parte superiore",
      "Silhouette a pera con parte inferiore più voluminosa",
      "Maggiore tendenza a cellulite, ritenzione idrica e gambe pesanti",
      "Profilo estrogenico con sensibilità ai recettori nella parte inferiore",
      "Tendenza ad accumulare massa muscolare su cosce e glutei"
    ],
    image: gynoidFemale,
  },
  {
    type: BodyTypeFemale.ANDROIDE,
    shortDescription: "Corpo a mela - accumulo nella parte superiore",
    characteristics: [
      "Distribuzione del grasso su addome, petto, schiena e braccia",
      "Gambe tendono a rimanere più magre",
      "Forma a 'mela' o 'triangolo inverso' con spalle più larghe",
      "Maggiore circonferenza vita e fianchi",
      "Punto vita meno definito rispetto ad altri tipi di corporatura",
      "Gambe appaiono più snelle e sottili rispetto al resto del corpo"
    ],
    image: androidFemale,
  }
];

/**
 * Ottiene i tipi di corpo in base al genere
 */
export const getBodyTypesByGender = (gender?: Gender): BodyTypeConfig[] => {
  return gender === Gender.UOMO ? MALE_BODY_TYPES : FEMALE_BODY_TYPES;
};
