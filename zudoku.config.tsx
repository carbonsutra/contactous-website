import type { ZudokuConfig } from "zudoku";
import LandingPage from "./src/components/LandingPage";

const PRODUCT_LINKS = [
  ["Emission Estimation", "/carbonsutra"],
  // ["Markdown Converter", "/2markdown"],
  // ["MetaData Extraction", "/scholia"],
  // ["Adaptive Assessments", "/assessments"],
  ["Location Intelligence", "/aeropoint"],
  // ["Dynamic Clustering", "/clustering"],
  // ["Content Generation", "/contentweaver"],
  ["Data DeDuplication", "/deduplication"],
  ["RAG-as-a-Service", "/answerous"],
  // ["AI Detection", "/stylos"],
  ["Master Classifier", "/taxonic"],
];
const SOLUTION_LINKS = [
  ["Self-Service Analytics", "/self-service-analytics"],
  // ["Data DeDuplication", "/deduplication"],
  ["Contact Management", "/contact-management"],
  ["Sustainability Reporting", "https://carbonsutra.com/"],
  ["Content Creation", "https://syllabuild.com/"],
  ["MetaData Extraction", "/metadata-extraction"],
  // ["Mastery-based Assessment", "/mastery-based-assessment"], - do later
  ["Automated Classification", "/automated-classification"],
];

const PRODUCT_NAV = PRODUCT_LINKS.map(([label, href]) => ({
  type: "doc" as const,
  file: `${href.split("/").pop()}`,
  label,
}));

const SOLUTION_NAV = SOLUTION_LINKS.map(([label, href]) => {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return {
      type: "link" as const,
      label,
      to: href,
      target: "_blank" as const,
    };
  }

  return {
    type: "doc" as const,
    file: href.replace(/^\/+/, ""),
    label,
  };
});

const config: ZudokuConfig = {
  // plugins: [googleAnalyticsPlugin],
  metadata: {
    title: "Contactous | APIs, Solutions & Playground",
    description:
      "Explore Contactous APIs and solutions for enterprise, education, publishers, sustainability, content workflows, research, and data intelligence.",
    favicon: "/favicon.jpeg",
    applicationName: "Contactous",
    keywords: [
      "Contactous",
      "APIs",
      "enterprise",
      "education",
      "publishers",
      "sustainability",
      "AI",
      "data intelligence",
      "playground",
    ],
  },
  canonicalUrlOrigin: "https://contactous.com",
  sitemap: { siteUrl: "https://contactous.com" },
  site: {
    logo: {
      src: {
        light: "/images/Contactous-Logo+Name_BIG_InBlack.png",
        dark: "/images/Contactous-Logo+Name_BIG_InWhite.png",
      },
      alt: "Contactous",
      width: "150px",
    },
    showPoweredBy: false,
  },
  docs: { defaultOptions: { toc: false, fullWidth: true, copyPage: false } },
  search: { type: "pagefind", maxSubResults: 3 },
  navigation: [
    {
      type: "custom-page",
      path: "/",
      element: (
        <>
          <LandingPage />
        </>
      ),
    },
    {
      type: "category",
      label: "APIs",
      collapsible: false,
      items: [
        { type: "doc", file: "/apis", label: "All APIs" },
        ...PRODUCT_NAV,
      ],
    },
    {
      type: "category",
      label: "Solutions",
      collapsible: false,
      items: [
        { type: "doc", file: "/solutions", label: "All Solutions" },
        ...SOLUTION_NAV,
      ],
    },
    {
      type: "link",
      label: "Playground",
      to: "https://carbonsutra.com/api-playground",
    },
  ],
  apis: [
    { type: "file", input: "./apis/Contactous-openapi.yaml", path: "/api" },
  ],
};

export default config;
