# Changelog
All notable changes to this project will be documented in this file.
## [1.2.0] - 2020-07-07
### Changed
- Sal.js styles are not imported when scroll animation is disabled
### Added 
- Added extra options to enable/disable smooth scroll, scroll animations & jquery + October's Ajax framework
- Moved sal.js initialization to its own file scrollAnimation.js
- Added settings js to check extras settings
- sal.css in dist folder for conditional use
### Removed
- Removed eventbus.js
## [1.1.2] - 2020-06-25
### Fixed
- Fixed missing anchor tag in hero CTA button
## [1.1.1] - 2020-06-07
### Changed
- Updated Tailwindcss version to 1.4.6
- Moved purgecss settings from webpack.mix.js to tailwind.config.js. Tailwindcss now supports purgecss settings
- favicon renamed into a generic name
### Added
- added cross-env dependency
### Removed
- removed @fullhuman/postcss-purgecss dependecy
### Fixed
- Hero image reponsiveness
- Fixed glider.js dots hardcoded values

## [1.1.0] - 2020-04-21
### Added
- Added theme color picker
- Added settings defaults
### Changed
- Moved pricing styles from layouts to components
## [1.0.0] - 2020-04-10