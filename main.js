#!/usr/bin/env node

import { exec } from 'node:child_process';

/**
 * @file
 * @description Block client-side `git push` to `INPUT_GIT_PROTECTED_BRANCHES` listed branches on Friday or weekend days
 * @author S0AndS0
 * @license AGPL-3.0
 */


/**
 * Returns `process.env` variable of given name
 * @param {string} name - Workflow variable name
 * @return {string?}
 */
function get_gha_input(name) {
	return process.env[`INPUT_${name.toUpperCase()}`];
}

/**
 * Set Action Output or Environment variable by name to `JSON.stringify(value)`
 * @param {string} name
 * @param {any} value
 * @example
 * set_gha_output('result') = 'nifty'
 * console.log(process.env.OUTPUT_RESULT);
 * //> "nifty"
 */
const set_gha_output = (name, value) => {
	process.env[`OUTPUT_${name.toUpperCase()}`] = JSON.stringify(value);
};

const INPUT_GIT_PROTECTED_BRANCHES = get_gha_input('GIT_PROTECTED_BRANCHES');
if (!INPUT_GIT_PROTECTED_BRANCHES || !Object.keys(INPUT_GIT_PROTECTED_BRANCHES).length) {
	const error_message = [
		'Undefined or empty environment variable!',
		'',
		'Re-run via CLI with:',
		'  INPUT_GIT_PROTECTED_BRANCHES="main,master" node main.js',
		'',
		'Or define a GitHub Action input:',
		'```yaml',
		'      - name: Weekend Push Guardian',
		'        uses: gha-utilities/weekend-push-guardian',
		'        with:',
		'          git_protected_branches: "main,master"',
		'```',
	];
	throw new Error(error_message.join('\n'));
}

exec('git branch --show-current', (error, stdout, stderr) => {
	if (!!stderr || Object.keys(stderr).length) {
		console.error(stderr);
	}
	if (error) {
		throw error;
	}

	if (!stdout || !Object.keys(stdout).length) {
		throw new Error('Failed to get output from: `git branch --show-current`');
	}

	const currentBranch = stdout.split('\n').at(0);
	if (!currentBranch || !Object.keys(currentBranch).length) {
		throw new Error('Failed to get output from: `git branch --show-current`');
	}

	const numberOfToday = (new Date()).getDay();
	if (numberOfToday >= 5) {
		const regexp_GIT_PROTECTED_BRANCHES = new RegExp(`^(${INPUT_GIT_PROTECTED_BRANCHES.split(',').join('|')})$`);
		if (regexp_GIT_PROTECTED_BRANCHES.test(currentBranch)) {
			set_gha_output('passed', false);
			const error_message = [
				'It is Friday or a weekend day and you are pushing to a protected branch!',
				'',
				'Contact your repository mantainor if changes are critical.',
				'...  or if changes are not critical go touch grass!'
			];
			throw new Error(error_message.join('\n'));
		}
	}

	/* TODO: maybe add feature for allowed authors */
	set_gha_output('passed', true);
});


