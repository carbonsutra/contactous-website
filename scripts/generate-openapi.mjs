import fs from "node:fs";
import dotenv from "dotenv";

dotenv.config();
const input = "./apis/Contactous-openapi.yaml";
const output = "./apis/generated-openapi.yaml";
const apiUrl = process.env.API_URL || "https://api.example.com";
let yaml = fs.readFileSync(input, "utf8");
yaml = yaml.replace(
  /servers:\n(?:[ \t]+.*\n)+/,
  `servers:\n  - url: ${apiUrl}\n    description: ${apiUrl.includes("example.com") ? "Placeholder server — configure API_URL" : "Contactous API"}\n`,
);
fs.writeFileSync(output, yaml);
console.log(`OpenAPI generated with API_URL: ${apiUrl}`);
