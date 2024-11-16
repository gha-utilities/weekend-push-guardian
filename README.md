# Weekend Push Guardian
[heading__top]:
  #weekend-push-guardian
  "&#x2B06; Block client-side `git push` to `INPUT_GIT_PROTECTED_BRANCHES` listed branches on Friday or weekend days"


Block client-side `git push` to `INPUT_GIT_PROTECTED_BRANCHES` listed branches on Friday or weekend days

## [![Byte size of Weekend Push Guardian][badge__main__weekend_push_guardian__source_code]][weekend_push_guardian__main__source_code] [![Open Issues][badge__issues__weekend_push_guardian]][issues__weekend_push_guardian] [![Open Pull Requests][badge__pull_requests__weekend_push_guardian]][pull_requests__weekend_push_guardian] [![Latest commits][badge__commits__weekend_push_guardian__main]][commits__weekend_push_guardian__main] [![License][badge__license]][branch__current__license]


---


- [:arrow_up: Top of Document][heading__top]
- [:building_construction: Requirements][heading__requirements]
- [:zap: Quick Start][heading__quick_start]
- [&#x1F9F0; Usage][heading__usage]
- [&#x1F5D2; Notes][heading__notes]
  - [Git Hooks][heading__git_hooks]
- [:chart_with_upwards_trend: Contributing][heading__contributing]
  - [:trident: Forking][heading__forking]
  - [:currency_exchange: Sponsor][heading__sponsor]
- [:card_index: Attribution][heading__attribution]
- [:balance_scale: Licensing][heading__license]


---



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS dependencies may be installed via NPM...


```Bash
npm install
```


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."




## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; How to utilize this repository"


Reference the code of this repository within your own `workflow`...


```YAML
on:
  push:


jobs:
  build:
    runs-on: ubuntu-latest
      - name: Checkout source branch for building Pages
        uses: actions/checkout@v4
        with:
          fetch-depth: 10

      - name: Weekend Push Guardian
        id: weekend-push-guardian
        with: gha-utilities/weekend-push-guardian@v0.0.1
          message: Updates Git Submodules
          options: '--depth 10 --init --merge --recursive --remote'

      # - name: Do things on weekdays
      #   if: outputs.weekend-push-guardian.passed && success()
```


______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull
Requests that add features or fix bugs are certainly welcomed.


---


### Git Hooks
[heading__git_hooks]: #git-hooks


For that want to mitigate pushing to GitHub on Friday or weekend days in the
first place, this repository also provides Git Hooks written in pure Bash
script for client, and private server(s)!  Simply clone this repository and
consult the official Git documentation for how to use;

- **`hooks/pre-push`** documentation: `man --pager='less --pattern="^\s+pre-push"' githooks`
- **`hooks/pre-receive`** documentation: `man --pager='less --pattern="^\s+pre-receive"' githooks`


______


## Contributing
[heading__contributing]:
  #contributing
  "&#x1F4C8; Options for contributing to weekend-push-guardian and gha-utilities"


Options for contributing to weekend-push-guardian and gha-utilities


---


### Forking
[heading__forking]:
  #forking
  "&#x1F531; Tips for forking weekend-push-guardian"


Start making a [Fork][weekend_push_guardian__fork_it] of this repository to an
account that you have write permissions for.


- Add remote for fork URL. The URL syntax is
  _`git@github.com:<NAME>/<REPO>.git`_...

```Bash
cd ~/git/hub/gha-utilities/weekend-push-guardian

git remote add fork git@github.com:<NAME>/weekend-push-guardian.git
```

- Commit your changes and push to your fork, eg. to fix an issue...

```Bash
cd ~/git/hub/gha-utilities/weekend-push-guardian


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```

> Note, the `-u` option may be used to set `fork` as the default remote, eg.
> _`git push -u fork main`_ however, this will also default the `fork` remote
> for pulling from too! Meaning that pulling updates from `origin` must be done
> explicitly, eg. _`git pull origin main`_

- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is
  _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications
> before being accepted, please check the
> [dot-github](https://github.com/gha-utilities/.github) repository for
> detailed contributing guidelines.


---


### Sponsor
  [heading__sponsor]:
  #sponsor
  "&#x1F4B1; Methods for financially supporting gha-utilities that maintains weekend-push-guardian"


Thanks for even considering it!

Via Liberapay you may
<sub>[![sponsor__shields_io__liberapay]][sponsor__link__liberapay]</sub> on a
repeating basis.

Regardless of if you're able to financially support projects such as
weekend-push-guardian that gha-utilities maintains, please consider sharing
projects that are useful with others, because one of the goals of maintaining
Open Source repositories is to provide value to the community.


______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Block client-side `git push` to `INPUT_GIT_PROTECTED_BRANCHES` listed branches on Friday or weekend days
Copyright (C) 2024 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


For further details review full length version of
[AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"

[badge__license]:
  https://img.shields.io/github/license/gha-utilities/weekend-push-guardian

[badge__commits__weekend_push_guardian__main]:
  https://img.shields.io/github/last-commit/gha-utilities/weekend-push-guardian/main.svg

[commits__weekend_push_guardian__main]:
  https://github.com/gha-utilities/weekend-push-guardian/commits/main
  "&#x1F4DD; History of changes on this branch"


[weekend_push_guardian__community]:
  https://github.com/gha-utilities/weekend-push-guardian/community
  "&#x1F331; Dedicated to functioning code"


[issues__weekend_push_guardian]:
  https://github.com/gha-utilities/weekend-push-guardian/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[weekend_push_guardian__fork_it]:
  https://github.com/gha-utilities/weekend-push-guardian/fork
  "&#x1F531; Fork it!"

[pull_requests__weekend_push_guardian]:
  https://github.com/gha-utilities/weekend-push-guardian/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[weekend_push_guardian__main__source_code]:
  https://github.com/gha-utilities/weekend-push-guardian/
  "&#x2328; Project source!"

[badge__issues__weekend_push_guardian]:
  https://img.shields.io/github/issues/gha-utilities/weekend-push-guardian.svg

[badge__pull_requests__weekend_push_guardian]:
  https://img.shields.io/github/issues-pr/gha-utilities/weekend-push-guardian.svg

[badge__main__weekend_push_guardian__source_code]:
  https://img.shields.io/github/repo-size/gha-utilities/weekend-push-guardian




[vim__home]:
  https://www.vim.org
  "Home page for the Vim text editor"

[vim__github]:
  https://github.com/vim/vim
  "Source code for Vim on GitHub"


[sponsor__shields_io__liberapay]:
  https://img.shields.io/static/v1?logo=liberapay&label=Sponsor&message=gha-utilities

[sponsor__link__liberapay]:
  https://liberapay.com/gha-utilities
  "&#x1F4B1; Sponsor developments and projects that gha-utilities maintains via Liberapay"



[badge__github_actions]:
  https://github.com/gha-utilities/weekend-push-guardian/actions/workflows/.yaml/badge.svg?branch=main

[activity_log__github_actions]:
  https://github.com/gha-utilities/weekend-push-guardian/deployments/activity_log

