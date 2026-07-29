

import { Home, Book, BarChart } from "lucide-react";

export const PAGE_ITEMS = {
  home: "home",
  stats: "stats",
  Clients: "Clients",
  "Accredian Edge": "Accredian Edge",
  "CAT": "CAT",
  "How It Works": "How It Works",
  FAQs: "FAQs",
  Testimonials: "Testimonials"
} as const;

export const NAVIGATION_ITEMS: {
  id: (typeof PAGE_ITEMS)[keyof typeof PAGE_ITEMS];
}[] = [
    { id: PAGE_ITEMS.home },
    { id: PAGE_ITEMS.stats },
    { id: PAGE_ITEMS.Clients },
    { id: PAGE_ITEMS['Accredian Edge']},
    { id: PAGE_ITEMS.CAT },
    { id: PAGE_ITEMS['How It Works'] },
    { id: PAGE_ITEMS.FAQs },
    { id: PAGE_ITEMS['Testimonials'] },
  ];