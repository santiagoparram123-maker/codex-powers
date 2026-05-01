#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function readDescription(skillFile) {
  const contents = fs.readFileSync(skillFile, "utf8");
  const match = contents.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return "";

  const descriptionLine = match[1]
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith("description:"));

  if (!descriptionLine) return "";
  return descriptionLine.replace(/^description:\s*/, "").replace(/^["']|["']$/g, "").trim();
}

function buildIndex(repoRoot) {
  const skillsDir = path.join(repoRoot, "skills");
  const docsDir = path.join(repoRoot, "docs");
  const outputFile = path.join(docsDir, "skill-index.md");

  const skills = fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const skillFile = path.join(skillsDir, entry.name, "SKILL.md");
      return {
        name: entry.name,
        description: fs.existsSync(skillFile) ? readDescription(skillFile) : ""
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const lines = [
    "# Skill Index",
    "",
    "Generated from the folders in `skills/`.",
    "",
    "| Skill | Description |",
    "| --- | --- |",
    ...skills.map((skill) => {
      const description = skill.description || "No description found.";
      return `| \`${skill.name}\` | ${description.replace(/\|/g, "\\|")} |`;
    }),
    ""
  ];

  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(outputFile, lines.join("\n"), "utf8");
  return outputFile;
}

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputFile = buildIndex(repoRoot);
console.log(`Wrote ${path.relative(repoRoot, outputFile)}`);
