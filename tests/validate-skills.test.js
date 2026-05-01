import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { validateSkills } from "../scripts/validate-skills.js";

function makeTempSkillsDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "codex-powers-"));
}

function createSkill(root, name, options = {}) {
  const skillDir = path.join(root, name);
  fs.mkdirSync(skillDir, { recursive: true });

  if (options.skillFile !== false) {
    fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# Test Skill\n", "utf8");
  }

  for (const dir of options.supportDirs || ["examples", "checklists", "templates"]) {
    fs.mkdirSync(path.join(skillDir, dir), { recursive: true });
  }
}

test("validateSkills passes when every skill has required files", () => {
  const root = makeTempSkillsDir();
  createSkill(root, "test-skill");

  const result = validateSkills(root);

  assert.equal(result.ok, true);
  assert.deepEqual(result.skills, ["test-skill"]);
  assert.deepEqual(result.errors, []);
});

test("validateSkills fails when SKILL.md is missing", () => {
  const root = makeTempSkillsDir();
  createSkill(root, "missing-skill", { skillFile: false });

  const result = validateSkills(root);

  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /missing SKILL\.md/);
});

test("validateSkills fails when support directories are missing", () => {
  const root = makeTempSkillsDir();
  createSkill(root, "partial-skill", { supportDirs: ["examples"] });

  const result = validateSkills(root);

  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /missing checklists\//);
  assert.match(result.errors.join("\n"), /missing templates\//);
});
