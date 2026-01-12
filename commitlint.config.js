export default {
    extends: ['@commitlint/config-conventional'],
    // Ignore semantic-release generated commits
    ignores: [(commit) => commit.includes('chore(release)')],
};
