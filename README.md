<div align="center">
<h1>get-next-version</h1>

<p>Getting the semantic next version of your repo using <a href="https://github.com/conventional-changelog/standard-version">standard-version</a></p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## The problem

I want to know what the next semantic version bumb, based on conventional commits would be without doing one.

## This solution

This package checks the current commited version and will show the next logical version number.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module should be installed as one of your project's `devDependencies`:

```
npm install --save-dev get-next-version
```

## Usage

```
get-next-version
get-next-version --source <source>
```

## License
MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/daren-malfait/get-next-version/CI?logo=github&style=flat-square
[build]: https://github.com/daren-malfait/get-next-version/actions?query=workflow
[version-badge]: https://img.shields.io/npm/v/get-next-version.svg?style=flat-square
[package]: https://www.npmjs.com/package/get-next-version
[downloads-badge]: https://img.shields.io/npm/dm/get-next-version.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/get-next-version.svg?style=flat-square
[license]: https://github.com/daren-malfait/get-next-version/blob/main/LICENSE
<!-- prettier-ignore-end -->