export type FieldDependency = "fuel_usage" | "vehicle_make" | "category";

export interface ApiField {
  name: string;
  type: "text" | "number" | "email" | "select";
  fieldType?: "query" | "path" | "form";
  required?: boolean;
  description?: string;
  defaultValue?: string;
  options?: readonly string[];
  dependsOn?: FieldDependency;
}

export interface ApiDefinition {
  name: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  fields?: ApiField[];
  jsonBody?: boolean;
  bodyExample?: string;
}

const demoRequest = {
  request_id: "demo-001",
  input: "Sample input for testing this API",
  options: {},
};

const createDemoApi = (
  name: string,
  description: string,
  endpoint: string,
): ApiDefinition => ({
  name,
  description,
  method: "POST",
  endpoint,
  fields: [],
  jsonBody: true,
  bodyExample: JSON.stringify(demoRequest, null, 2),
});

export const APIs: ApiDefinition[] = [
  createDemoApi(
    "CarbonSutra",
    "Unified APIs for carbon intelligence, sustainability metrics, and environmental data.",
    "/demo/CarbonSutra",
  ),
  createDemoApi(
    "2Markdown",
    "Convert web pages and documents into clean Markdown for AI workflows.",
    "/demo/2markdown",
  ),
  createDemoApi(
    "Scholia",
    "Research-paper processing and scholarly knowledge extraction.",
    "/demo/scholia",
  ),
  createDemoApi(
    "Assessments",
    "Build structured assessments, score submissions, and analyze responses.",
    "/demo/assessments",
  ),
  createDemoApi(
    "Airports & Location Intelligence",
    "Airport lookup, proximity, distance, and location-aware data services.",
    "/demo/airports_location_intelligence",
  ),
  createDemoApi(
    "Clustering",
    "Group records and organize related information.",
    "/demo/clustering",
  ),
  createDemoApi(
    "ContentWeaver",
    "Prepare, transform, and orchestrate content for downstream workflows.",
    "/demo/contentweaver",
  ),
  createDemoApi(
    "DeDuplication",
    "Identify duplicate and near-duplicate records.",
    "/demo/deduplication",
  ),
  createDemoApi(
    "Answerous",
    "Turn knowledge sources into clear, grounded answers.",
    "/demo/answerous",
  ),
  createDemoApi(
    "Gaming",
    "APIs and data utilities for game experiences and player workflows.",
    "/demo/gaming",
  ),
  createDemoApi(
    "Categorization",
    "Classify and label incoming text or records.",
    "/demo/categorization",
  ),
  createDemoApi(
    "Stylos",
    "Analyze text and documents for authorship signals.",
    "/demo/stylos",
  ),
];

// Retained for compatibility with the existing playground component.
// The YAML does not define dependent query or form fields.
export const FUEL_NAMES_BY_USAGE = {} as const;
export const VEHICLE_MODELS_BY_MAKE: Record<string, readonly string[]> = {};
export const SEFR_ACTIVITIES_BY_CATEGORY = {} as const;
