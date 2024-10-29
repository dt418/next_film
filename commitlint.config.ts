import type { UserConfig } from "@commitlint/types";

/**
 * Commitlint configuration.
 *
 * @see https://commitlint.js.org/#/configuration
 */
const config: UserConfig = {
  /**
   * Extends the base configuration.
   *
   * @see https://commitlint.js.org/#/references/configuration?id=extends
   */
  extends: ["@commitlint/config-conventional"],

  /**
   * Rules to enforce.
   *
   * @see https://commitlint.js.org/#/references/configuration?id=rules
   */
  rules: {
    /**
     * Enforce valid commit types.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=type-enum
     */
    "type-enum": [
      2,
      "always",
      [
        // Build related changes
        "build",
        // Chores related to maintenance and management of the project
        "chore",
        // Changes related to Continuous Integration and Continuous Deployment (CI/CD)
        "ci",
        // Documentation-only changes
        "docs",
        // New feature development
        "feat",
        // Bugfixes and hotfixes
        "fix",
        // Code performance improvements
        "perf",
        // Code refactoring, no functional changes implied
        "refactor",
        // Reverts changes from previous commit
        "revert",
        // Code style, formatting, and other visual changes
        "style",
        // Changes related to testing and/or the testing framework
        "test",
      ],
    ],
    /**
     * Enforce valid commit types to be in lower case.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=type-case
     */
    "type-case": [2, "always", "lower-case"],
    /**
     * Enforce commit type to be present.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=type-empty
     */
    "type-empty": [2, "never"],
    /**
     * Enforce commit scope to be in lower case.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=scope-case
     */
    "scope-case": [2, "always", "lower-case"],
    /**
     * Enforce commit subject to be present.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=subject-empty
     */
    "subject-empty": [2, "never"],
    /**
     * Enforce commit subject to end with a full stop.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=subject-full-stop
     */
    "subject-full-stop": [2, "never", "."],
    /**
     * Enforce commit subject to be in sentence case.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=subject-case
     */
    "subject-case": [2, "never", "sentence-case"],
    /**
     * Enforce commit header length.
     *
     * @see https://commitlint.js.org/#/references/configuration?id=header-max-length
     */
    "header-max-length": [2, "always", 72],
  },
};

export default config;
