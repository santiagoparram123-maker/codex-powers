#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const requiredSupportDirs = ["examples", "checklists", "templates"];

export function validateSkills(skillsDir) {
  const errors = [];
  const warnings = [];

  if (!fs.existsSync(skillsDir)) {
    return {
      ok: false,
      skills: [],
      errors: [`Skills directory not found: ${skillsDir}`],
      warnings
    };
  }

  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  const skillDirs = entries.filter((entry) => entry.isDirectory());

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      warnings.push(`Ignoring non-directory entry in skills/: ${entry.name}`);
    }
  }

  for (const entry of skillDirs) {
    const skillPath = path.join(skillsDir, entry.name);
    const skillFile = path.join(skillPath, "SKILL.md");

    if (!fs.existsSync(skillFile)) {
      errors.push(`${entry.name} is missing SKILL.md`);
      continue;
    }

    const contents = fs.readFileSync(skillFile, "utf8");
    if (!contents.trim()) {
      errors.push(`${entry.name}/SKILL.md is empty`);
    }

    for (const dir of requiredSupportDirs) {
      const supportPath = path.join(skillPath, dir);
      if (!fs.existsSync(supportPath) || !fs.statSync(supportPath).isDirectory()) {
        errors.push(`${entry.name} is missing ${dir}/`);
      }
    }
  }

  return {
    ok: errors.length === 0,
    skills: skillDirs.map((entry) => entry.name).sort(),
    errors,
    warnings
  };
}

function runCli() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const skillsDir = path.join(repoRoot, "skills");
  const result = validateSkills(skillsDir);

  for (const warning of result.warnings) {
    console.warn(`Warning: ${warning}`);
  }

  if (!result.ok) {
    console.error("Skill validation failed:");
    for (const error of result.errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Validated ${result.skills.length} skills.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runCli();
}
