<!--
Guiding Principles:

Changelogs are for humans, not machines.
There should be an entry for every single version.
The same types of changes should be grouped.
Versions and sections should be linkable.
The latest version comes first.
The release date of each version is displayed.
Mention whether you follow Semantic Versioning.

Usage:

Change log entries are to be added to the Unreleased section under the
appropriate stanza (see below). Each entry should ideally include a tag and
the Github issue reference in the following format:

* (<tag>) \#<issue-number> message

The issue numbers will later be link-ified during the release process so you do
not have to worry about including a link manually, but you can if you wish.

Types of changes:

"Features" for new features.
"Improvements" for changes in existing functionality.
"Bug Fixes" for any bug fixes.
Ref: https://keepachangelog.com/en/1.0.0/
-->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Features

- [#467](https://github.com/alleslabs/celatone-frontend/pull/467) Dynamic wallet by network, add disableAnyofAddress config
- [#322](https://github.com/alleslabs/celatone-frontend/pull/322) Tab url path for account details and public project details pages
- [#449](https://github.com/alleslabs/celatone-frontend/pull/449) Support searching with pool id
- [#419](https://github.com/alleslabs/celatone-frontend/pull/419) Add error message box for tx failed modal and enhance styling
- [#415](https://github.com/alleslabs/celatone-frontend/pull/415) Search by icns names feature and Show registered icns names on account details page
- [#438](https://github.com/alleslabs/celatone-frontend/pull/438) Add new home page
- [#437](https://github.com/alleslabs/celatone-frontend/pull/437) Add first landing prompt for dev mode
- [#436](https://github.com/alleslabs/celatone-frontend/pull/436) Implement merge navigation

### Improvements

- [#468](https://github.com/alleslabs/celatone-frontend/pull/468) Add breadcrumb to pool id page
- [#466](https://github.com/alleslabs/celatone-frontend/pull/466) Fix developer mode alert
- [#457](https://github.com/alleslabs/celatone-frontend/pull/457) Add alert for proposal forum review
- [#389](https://github.com/alleslabs/celatone-frontend/pull/389) Fix modal consistency
- [#381](https://github.com/alleslabs/celatone-frontend/pull/381) Correctly infer output type from snake-camel utils
- [#422](https://github.com/alleslabs/celatone-frontend/pull/422) Create query keys enum
- [#450](https://github.com/alleslabs/celatone-frontend/pull/450) Retrieve asset prices only when necessary (/prices url path)
- [#451](https://github.com/alleslabs/celatone-frontend/pull/451) Add jest test cases for json, date, and number in utils
- [#412](https://github.com/alleslabs/celatone-frontend/pull/412) Refactor contract detail data loading
- [#402](https://github.com/alleslabs/celatone-frontend/pull/402) Add validator image resolver hook (add keybase as a fallback option)
- [#408](https://github.com/alleslabs/celatone-frontend/pull/408) Improve dropdown and combo box interaction
- [#421](https://github.com/alleslabs/celatone-frontend/pull/421) Generate example addresses from a fixed-bytes array
- [#431](https://github.com/alleslabs/celatone-frontend/pull/431) Add new Osmosis v16 tx messages
- [#414](https://github.com/alleslabs/celatone-frontend/pull/414) Add jest test cases for funds and assetValue in utils, and remove isDecimalNumber in utils
- [#435](https://github.com/alleslabs/celatone-frontend/pull/435) Refactor chain's config, add new chain configs

### Bug fixes

- [#465](https://github.com/alleslabs/celatone-frontend/pull/465) Fix wrong access queryKey in validator info
- [#464](https://github.com/alleslabs/celatone-frontend/pull/464) Fix `useFaucetInfo` hook by adding `assetInfos` to its dependencies
- [#463](https://github.com/alleslabs/celatone-frontend/pull/463) Fix event box content clipping and improve animation
- [#462](https://github.com/alleslabs/celatone-frontend/pull/462) Fix validator query dependencies
- [#460](https://github.com/alleslabs/celatone-frontend/pull/460) Fix icns names and contract address alignment
- [#459](https://github.com/alleslabs/celatone-frontend/pull/459) Fix contract txs by using contract account id instead of contract address
- [#456](https://github.com/alleslabs/celatone-frontend/pull/456) Fix pool count chip in pool transaction table
- [#454](https://github.com/alleslabs/celatone-frontend/pull/454) Fix contract selection loading state for other folders
- [#452](https://github.com/alleslabs/celatone-frontend/pull/452) Fix public project data on the account details and code details page still remains when switching network

## v1.1.0

### Features

- [#397](https://github.com/alleslabs/celatone-frontend/pull/397) Implement first version of Osmosis v16 pool
- [#358](https://github.com/alleslabs/celatone-frontend/pull/358) Add Amp for Pool Detail page
- [#355](https://github.com/alleslabs/celatone-frontend/pull/355) Add Amp for Pool List page
- [#294](https://github.com/alleslabs/celatone-frontend/pull/294) Add Pool related txs table
- [#296](https://github.com/alleslabs/celatone-frontend/pull/296) Add pool header and pool assets section for pool details page
- [#295](https://github.com/alleslabs/celatone-frontend/pull/295) Add expand/collapse all for unsupported pool list
- [#277](https://github.com/alleslabs/celatone-frontend/pull/277) Wire up data for pool navigation page
- [#276](https://github.com/alleslabs/celatone-frontend/pull/276) Add Pool navigation and pool detail data
- [#270](https://github.com/alleslabs/celatone-frontend/pull/270) Add Pool navigation and detail page
- [#418](https://github.com/alleslabs/celatone-frontend/pull/418) Add gitignore for new yarn version
- [#406](https://github.com/alleslabs/celatone-frontend/pull/406) add test cases for `utils/formatter/token.ts`
- [#398](https://github.com/alleslabs/celatone-frontend/pull/398) Setup Jest and sample tests
- [#411](https://github.com/alleslabs/celatone-frontend/pull/411) Add override api endpoint
- [#385](https://github.com/alleslabs/celatone-frontend/pull/385) Upgrade cosmos kit major version and replace hooks
- [#380](https://github.com/alleslabs/celatone-frontend/pull/380) Support local network
- [#363](https://github.com/alleslabs/celatone-frontend/pull/363) Add config not found page and rewrite network logic
- [#343](https://github.com/alleslabs/celatone-frontend/pull/343) Apply fetching mechanism and keyboard arrow navigation to searchbar
- [#384](https://github.com/alleslabs/celatone-frontend/pull/384) New pagination style
- [#388](https://github.com/alleslabs/celatone-frontend/pull/388) Save Navbar expand/collapse state in the local state
- [#407](https://github.com/alleslabs/celatone-frontend/pull/407) Add code upload error message under the dropzone
- [#372](https://github.com/alleslabs/celatone-frontend/pull/372) Add code hash to code details and upload section
- [#329](https://github.com/alleslabs/celatone-frontend/pull/329) Add allowed user to store code flow
- [#321](https://github.com/alleslabs/celatone-frontend/pull/321) Add amplitude to proposal to store code page
- [#274](https://github.com/alleslabs/celatone-frontend/pull/274) Add proposal to store code page
- [#279](https://github.com/alleslabs/celatone-frontend/pull/279) Add instantiate permission to msg store code, change error display design, and upgrade cosmjs to version 0.30.1
- [#366](https://github.com/alleslabs/celatone-frontend/pull/366) Add recent contracts

### Improvements

- [#428](https://github.com/alleslabs/celatone-frontend/pull/428) Get all validators from graphql
- [#417](https://github.com/alleslabs/celatone-frontend/pull/417) Support responsive and add new theme
- [#283](https://github.com/alleslabs/celatone-frontend/pull/283) Change unsupported token icon render logic
- [#420](https://github.com/alleslabs/celatone-frontend/pull/420) Unify create proposal page layout
- [#416](https://github.com/alleslabs/celatone-frontend/pull/416) Remove the old redundant useSimulateFee hook
- [#413](https://github.com/alleslabs/celatone-frontend/pull/413) Add jest test cases for date utils
- [#404](https://github.com/alleslabs/celatone-frontend/pull/404) Use internal navigate instead of app link for block navigation
- [#396](https://github.com/alleslabs/celatone-frontend/pull/396) Refactor useConfig, disable wasm related tabs on the public project page
- [#392](https://github.com/alleslabs/celatone-frontend/pull/392) Refactor proposal table and fix empty state of the proposal list table
- [#374](https://github.com/alleslabs/celatone-frontend/pull/374) Remove testnet, mainnet concepts and use permission from params
- [#369](https://github.com/alleslabs/celatone-frontend/pull/369) Implement Wasm feature from config
- [#359](https://github.com/alleslabs/celatone-frontend/pull/359) Remove hardcode constant (length) and use from config
- [#367](https://github.com/alleslabs/celatone-frontend/pull/367) Update osmosis testnet 5 config and use explorer url from config instead
- [#368](https://github.com/alleslabs/celatone-frontend/pull/368) Use chain name from config for Meta instead of env variable
- [#336](https://github.com/alleslabs/celatone-frontend/pull/336) Get address type length from example addresses instead of hardcode
- [#354](https://github.com/alleslabs/celatone-frontend/pull/354) Remove useChainId and use currentChainId from config
- [#341](https://github.com/alleslabs/celatone-frontend/pull/341) Apply faucet info from chain config
- [#338](https://github.com/alleslabs/celatone-frontend/pull/338) Use gas from chain config
- [#333](https://github.com/alleslabs/celatone-frontend/pull/333) Update endpoints including LCD, RPC, Graphql
- [#335](https://github.com/alleslabs/celatone-frontend/pull/335) Refactor hardcoded api route to utils
- [#373](https://github.com/alleslabs/celatone-frontend/pull/373) Add view in Json for assets in account details page
- [#376](https://github.com/alleslabs/celatone-frontend/pull/376) Fix pluralize and capitalize
- [#401](https://github.com/alleslabs/celatone-frontend/pull/401) Add permission chip to code selection box
- [#386](https://github.com/alleslabs/celatone-frontend/pull/386) Handle uppercase address
- [#382](https://github.com/alleslabs/celatone-frontend/pull/382) Add pool manager v15 msgs to tx details
- [#371](https://github.com/alleslabs/celatone-frontend/pull/371) Refactor assign me component and fix color in redelegation page
- [#342](https://github.com/alleslabs/celatone-frontend/pull/342) Add fallback n/a token on asset icon on asset box
- [#331](https://github.com/alleslabs/celatone-frontend/pull/331) Add validation check for builder in proposal to store code page
- [#324](https://github.com/alleslabs/celatone-frontend/pull/324) Add deposit/voting period from gov params and add minimum required alert for proposal to store code
- [#357](https://github.com/alleslabs/celatone-frontend/pull/357) Abstract color, typeface, images to theme config
- [#352](https://github.com/alleslabs/celatone-frontend/pull/352) Refactor/Abstract styling (color system, font weight and more)
- [#347](https://github.com/alleslabs/celatone-frontend/pull/347) Move tx table accordion arrow to the front and refactor block txs table

### Bug fixes

- [#410](https://github.com/alleslabs/celatone-frontend/pull/410) Remove hardcode precision in attach funds dropdown selection and get assets from API, delete microfy and demicrofy function, remove useChainRecordAsset
- [#434](https://github.com/alleslabs/celatone-frontend/pull/434) Fix stepper item bg color
- [#429](https://github.com/alleslabs/celatone-frontend/pull/429) Fix duration formatter, type and add migrate tab to balancer pool
- [#427](https://github.com/alleslabs/celatone-frontend/pull/427) Fix upload access endpoint, Public project searchbar bug, account tx bug
- [#425](https://github.com/alleslabs/celatone-frontend/pull/425) Fix reset past tx filter state and permission alert on migration page
- [#365](https://github.com/alleslabs/celatone-frontend/pull/365) Fix pool page UI including helper text gap, icon alignment in pool asset table, empty state border, add message type, input selection icon, and accordion alignment
- [#362](https://github.com/alleslabs/celatone-frontend/pull/362) Fix missed out hard-coded osmosis testnet 4 in code
- [#361](https://github.com/alleslabs/celatone-frontend/pull/361) Fix incorrect assigned message index for each pool message in pool tx tables
- [#360](https://github.com/alleslabs/celatone-frontend/pull/360) Fix supported pool list cannot be searched with token ID and should not show pagination when data is less than 10
- [#403](https://github.com/alleslabs/celatone-frontend/pull/403) Retrieve faucet information from api and use api instead of lcd to prevent CORS
- [#400](https://github.com/alleslabs/celatone-frontend/pull/400) Fallback explorer link for validator/proposal and gov params token symbol
- [#395](https://github.com/alleslabs/celatone-frontend/pull/395) Disable wasm related tabs on the account detail page
- [#392](https://github.com/alleslabs/celatone-frontend/pull/392) Fix format denom function
- [#390](https://github.com/alleslabs/celatone-frontend/pull/390) Fix minor styling
- [#391](https://github.com/alleslabs/celatone-frontend/pull/391) Fix incorrect empty state for past txs table
- [#383](https://github.com/alleslabs/celatone-frontend/pull/383) Fix title input field and navigation in sticky bar in proposal to store code, redirect path for wasm flag
- [#379](https://github.com/alleslabs/celatone-frontend/pull/379) Able to access txs tab when count query timeout, change tabs to lazy load mode for better performance
- [#387](https://github.com/alleslabs/celatone-frontend/pull/387) Fix reseting proposal table when applying filters
- [#375](https://github.com/alleslabs/celatone-frontend/pull/375) Fix incorrect display resolve height in proposals page
- [#356](https://github.com/alleslabs/celatone-frontend/pull/356) Fix store code out of gas error by gzipping file before submitting tx
- [#344](https://github.com/alleslabs/celatone-frontend/pull/344) Fix enable tx bug in proposal to store code

## v1.0.5

### Features

- [#346](https://github.com/alleslabs/celatone-frontend/pull/346) Apply initial condition to my stored codes upload button
- [#327](https://github.com/alleslabs/celatone-frontend/pull/327) Update logic to enable upload wasm code
- [#317](https://github.com/alleslabs/celatone-frontend/pull/317) Add amplitude for proposal list page and pagination

### Improvements

- [#364](https://github.com/alleslabs/celatone-frontend/pull/364) (Contract Details) use instantiated height and time from indexer as fallback
- [#323](https://github.com/alleslabs/celatone-frontend/pull/323) Revise back button and breadcrumb components
- [#339](https://github.com/alleslabs/celatone-frontend/pull/339) Update all routes to plural form, and patch all codes
- [#334](https://github.com/alleslabs/celatone-frontend/pull/334) Change `osmo-test-4` to `osmo-test-5`, fix tx service when accountId is undefined
- [#311](https://github.com/alleslabs/celatone-frontend/pull/311) Refine css styling
- [#328](https://github.com/alleslabs/celatone-frontend/pull/328) Add proposal and pool page in sidebar navigation
- [#298](https://github.com/alleslabs/celatone-frontend/pull/298) Show deposit/voting period from gov params and add minimum required alert

### Bug fixes

- [#370](https://github.com/alleslabs/celatone-frontend/pull/370) Fix ContractResponse type
- [$348](https://github.com/alleslabs/celatone-frontend/pull/348) Workaround for the issue that walletManager local storage is not cleared when switching networks
- [$340](https://github.com/alleslabs/celatone-frontend/pull/340) Remove resend and redo button in accordion if relation is related (Past txs page)
- [#337](https://github.com/alleslabs/celatone-frontend/pull/337) Fix beforeunload keep showing up Leave modal
- [#330](https://github.com/alleslabs/celatone-frontend/pull/330) Fix proposal table component propagation

## v1.0.4

### Bug fixes

- [#316](https://github.com/alleslabs/celatone-frontend/pull/316) Stop propagation when clicking on ContractRowCTA menu

## v1.0.3

### Features

- [#310](https://github.com/alleslabs/celatone-frontend/pull/310) Add amplitude for landing on the following pages - blocks, block detail, txs, network overview
- [#268](https://github.com/alleslabs/celatone-frontend/pull/268) Wireup create proposal to whitelisting
- [#266](https://github.com/alleslabs/celatone-frontend/pull/250) Add proposal whitelisting page
- [#286](https://github.com/alleslabs/celatone-frontend/pull/286) Add block proposer
- [#275](https://github.com/alleslabs/celatone-frontend/pull/275) Searching can now be determined by chain
- [#273](https://github.com/alleslabs/celatone-frontend/pull/273) Add subheader and network overview
- [#278](https://github.com/alleslabs/celatone-frontend/pull/278) Fully wired block details page
- [#272](https://github.com/alleslabs/celatone-frontend/pull/272) Add blocks page and table component
- [#287](https://github.com/alleslabs/celatone-frontend/pull/287) Add app default human address for each chain
- [#271](https://github.com/alleslabs/celatone-frontend/pull/271) Create transaction list page
- [#245](https://github.com/alleslabs/celatone-frontend/pull/245) Add amplitude for account detail page
- [#232](https://github.com/alleslabs/celatone-frontend/pull/232) Add delegation data and section for the account detail page
- [#261](https://github.com/alleslabs/celatone-frontend/pull/261) Add Relation column to transaction tables and refactor transaction table components
- [#265](https://github.com/alleslabs/celatone-frontend/pull/265) Add filter by status and type to proposal list page, and change Inactive proposal status to DepositFailed
- [#263](https://github.com/alleslabs/celatone-frontend/pull/263) Wireup search bar and my proposal switch in proposal list page
- [#260](https://github.com/alleslabs/celatone-frontend/pull/260) Add proposal list table to proposal list page
- [#255](https://github.com/alleslabs/celatone-frontend/pull/255) Get data for proposal list page
- [#250](https://github.com/alleslabs/celatone-frontend/pull/250) Add skeleton, route, and amp for proposal list page
- [#262](https://github.com/alleslabs/celatone-frontend/pull/262) Add amplitude tracking for tx page components
- [#224](https://github.com/alleslabs/celatone-frontend/pull/224) Support search by tx and internal tx link
- [#226](https://github.com/alleslabs/celatone-frontend/pull/226) Add fully functional transaction details page
- [#254](https://github.com/alleslabs/celatone-frontend/pull/254) Add GiHub link to public code and contract detail pages
- [#230](https://github.com/alleslabs/celatone-frontend/pull/230) Add cw2info to code table

### Improvements

- [#309](https://github.com/alleslabs/celatone-frontend/pull/309) Add public account name and description in account detail page
- [#289](https://github.com/alleslabs/celatone-frontend/pull/289) Add public accounts to public projects
- [#308](https://github.com/alleslabs/celatone-frontend/pull/308) Adjust view more button to full width and fix empty state layout in contract history
- [#304](https://github.com/alleslabs/celatone-frontend/pull/304) Remove suffix for token card
- [#282](https://github.com/alleslabs/celatone-frontend/pull/282) Change details page top section explorer link to copy link
- [#293](https://github.com/alleslabs/celatone-frontend/pull/293) Add comma separator to pagination and total blocks
- [#291](https://github.com/alleslabs/celatone-frontend/pull/291) Update tx count query
- [#285](https://github.com/alleslabs/celatone-frontend/pull/285) Add data fetching error state, and empty state to blocks page
- [#292](https://github.com/alleslabs/celatone-frontend/pull/292) Handle format token with M and show only 2 decimal points when more than 1,000
- [#284](https://github.com/alleslabs/celatone-frontend/pull/284) Add data fetching error state to txs page
- [#281](https://github.com/alleslabs/celatone-frontend/pull/281) Change Osmosis mainnet GraphQL
- [#251](https://github.com/alleslabs/celatone-frontend/pull/251) Refactor Code and Contract tables into general components
- [#252](https://github.com/alleslabs/celatone-frontend/pull/252) Refactor Empty State image source logic
- [#249](https://github.com/alleslabs/celatone-frontend/pull/249) Change code table format in select code draw and add CW2 info
- [#247](https://github.com/alleslabs/celatone-frontend/pull/247) Refactor hover logic of copier icon
- [#246](https://github.com/alleslabs/celatone-frontend/pull/246) Show edit button when code name is set, and align button section to top
- [#240](https://github.com/alleslabs/celatone-frontend/pull/240) Change modals containing tables to drawers for easier exploration
- [#239](https://github.com/alleslabs/celatone-frontend/pull/239) Add code description and code name for public code in code details page
- [#237](https://github.com/alleslabs/celatone-frontend/pull/237) Change unsupported tokens layout and style

### Bug fixes

- [#306](https://github.com/alleslabs/celatone-frontend/pull/306) Fix react query function timeout and retries, minor ui bugs
- [#307](https://github.com/alleslabs/celatone-frontend/pull/307) Remove minor ui in account detail
- [#297](https://github.com/alleslabs/celatone-frontend/pull/297) Fix open new tab on tx modal link clicked
- [#303](https://github.com/alleslabs/celatone-frontend/pull/303) Fix pagination problem when using filter
- [#301](https://github.com/alleslabs/celatone-frontend/pull/301) Fix whitelist revalidation trigger
- [#305](https://github.com/alleslabs/celatone-frontend/pull/305) Fix UI avatar for validator not shown when encounter special chars
- [#302](https://github.com/alleslabs/celatone-frontend/pull/302) Fix token card width, text size for unsupported token button in account details page and tx count color when equal to zero
- [#300](https://github.com/alleslabs/celatone-frontend/pull/300) Fix search bar's placeholder text and remove separator in latest block height
- [#290](https://github.com/alleslabs/celatone-frontend/pull/290) Fix spacing and styling in account detail
- [#280](https://github.com/alleslabs/celatone-frontend/pull/280) Fix begin unlocking optional coins field causing crash
- [#269](https://github.com/alleslabs/celatone-frontend/pull/269) Fix array value json string format and receipt row text color
- [#257](https://github.com/alleslabs/celatone-frontend/pull/257) Fix proposal resolved height query, resolved height rendering, and move ResolvedHeight and VotingEndTime to their own file
- [#264](https://github.com/alleslabs/celatone-frontend/pull/264) Fix txhash uppercase query
- [#258](https://github.com/alleslabs/celatone-frontend/pull/258) Fix address type render for contract admin address
- [#253](https://github.com/alleslabs/celatone-frontend/pull/253) Fix public code logo shown when switching from mainnet to testnet
- [#248](https://github.com/alleslabs/celatone-frontend/pull/248) Fix table padding bottom for editable cells
- [#241](https://github.com/alleslabs/celatone-frontend/pull/241) Fix NAToken size
- [#244](https://github.com/alleslabs/celatone-frontend/pull/244) Fix json funds instantiate cannot edit
- [#243](https://github.com/alleslabs/celatone-frontend/pull/243) Fix Json viewer and view more btn
- [#299](https://github.com/alleslabs/celatone-frontend/pull/299) Fix validator identity url

## v1.0.2

### Features

- [#233](https://github.com/alleslabs/celatone-frontend/pull/233) Disable account detail page
- [#228](https://github.com/alleslabs/celatone-frontend/pull/228) Add Faucet testnet page
- [#79](https://github.com/alleslabs/celatone-frontend/pull/79) Add dropdown menu and wireup up json attach funds
- [#225](https://github.com/alleslabs/celatone-frontend/pull/225) Add assets section in account details page
- [#220](https://github.com/alleslabs/celatone-frontend/pull/220) Add transactions table for account details page
- [#222](https://github.com/alleslabs/celatone-frontend/pull/222) Add proposals of an account
- [#221](https://github.com/alleslabs/celatone-frontend/pull/221) Add codes of an account
- [#223](https://github.com/alleslabs/celatone-frontend/pull/223) Newer version of token card and format mechanism
- [#214](https://github.com/alleslabs/celatone-frontend/pull/214) Show code permission helper text in save new code modal
- [#218](https://github.com/alleslabs/celatone-frontend/pull/218) Add instantiated and admin contracts of an account
- [#192](https://github.com/alleslabs/celatone-frontend/pull/192) Add alternative sidebar with only icons
- [#210](https://github.com/alleslabs/celatone-frontend/pull/210) New design for token card, currently support price
- [#189](https://github.com/alleslabs/celatone-frontend/pull/189) Add skeleton for the account details page
- [#193](https://github.com/alleslabs/celatone-frontend/pull/193) Get data for account details page

### Improvements

- [#234](https://github.com/alleslabs/celatone-frontend/pull/234) Fix faucet wording
- [#216](https://github.com/alleslabs/celatone-frontend/pull/216) Change icon to Alles Labs icon set
- [#227](https://github.com/alleslabs/celatone-frontend/pull/227) Refactor directory structure and components e.g. various tables
- [#207](https://github.com/alleslabs/celatone-frontend/pull/207) Add cta to submit public project in list page
- [#206](https://github.com/alleslabs/celatone-frontend/pull/206) Refactor copy functionality into one component

### Bug fixes

- [#238](https://github.com/alleslabs/celatone-frontend/pull/238) Fix incorrect isCurrentPage for overview page
- [#235](https://github.com/alleslabs/celatone-frontend/pull/235) Fix css bugs and aesthetics improvement
- [#236](https://github.com/alleslabs/celatone-frontend/pull/236) Add alphabetically sorting to JSON attach funds
- [#231](https://github.com/alleslabs/celatone-frontend/pull/231) Fix double slash for endpoint, disable calling endpoint when there is no contract addr in contract details page
- [#229](https://github.com/alleslabs/celatone-frontend/pull/229) Disable Sentry debug to prevent "logger.info is not a function" error
- [#219](https://github.com/alleslabs/celatone-frontend/pull/219) Fix asset value and price formatter
- [#217](https://github.com/alleslabs/celatone-frontend/pull/217) Fix state reset in Save New Code modal and no permission in migration

## v1.0.1

### Bug fixes

- [#195](https://github.com/alleslabs/celatone-frontend/pull/195) Make code name cell for migration table to be editable in contract detail page
- [#213](https://github.com/alleslabs/celatone-frontend/pull/213) Fix `window.crypto.randomUUID()` in old safari version (< 15.4) and `at()` of array

## v1.0.0

### Features

- [#199](https://github.com/alleslabs/celatone-frontend/pull/199) Final prelaunch cleanup
- [#202](https://github.com/alleslabs/celatone-frontend/pull/202) Reorder absolute and relative timestmap in stored block height
- [#201](https://github.com/alleslabs/celatone-frontend/pull/201) Add GPLv3 license
- [#170](https://github.com/alleslabs/celatone-frontend/pull/170) Add Google Analytics 4 for website analytics
- [#169](https://github.com/alleslabs/celatone-frontend/pull/169) Add amplitude for website analytics
- [#133](https://github.com/alleslabs/celatone-frontend/pull/133) Add OG and default SEO with next-seo
- [#160](https://github.com/alleslabs/celaotne-frontend/pull/160) Add remaining public codes and contracts info
- [#162](https://github.com/alleslabs/celatone-frontend/pull/162) Add sentry.io for error logging and stack tracing
- [#178](https://github.com/alleslabs/celatone-frontend/pull/178) Add close modal button when update admin succeed and reset states on close
- [#167](https://github.com/alleslabs/celatone-frontend/pull/167) Show public projects only on mainnet networks and change all codes to recent codes
- [#152](https://github.com/alleslabs/celatone-frontend/pull/152) Change default network to mainnet and refactor logic
- [#150](https://github.com/alleslabs/celatone-frontend/pull/150) Add Osmosis mainnet GraphQl, LCD, RPC
- [#149](https://github.com/alleslabs/celatone-frontend/pull/149) Apply new branding
- [#93](https://github.com/alleslabs/celatone-frontend/pull/93) Add filter code by instantiate permission in all codes page
- [#141](https://github.com/alleslabs/celatone-frontend/pull/141) Add 404 not found page, catch network params error
- [#134](https://github.com/alleslabs/celatone-frontend/pull/134) Fix un-align sub-page with sidebar
- [#144](https://github.com/alleslabs/celatone-frontend/pull/144) Add `Assign me` for admin address on instantiate form
- [#131](https://github.com/alleslabs/celatone-frontend/pull/131) Add CW2-related information to contract details page
- [#120](https://github.com/alleslabs/celatone-frontend/pull/120) Add simulate migrate fee and the final migration step
- [#108](https://github.com/alleslabs/celatone-frontend/pull/108) Add migrate options on migrate page and upload new code for migration
- [#130](https://github.com/alleslabs/celatone-frontend/pull/130) Add support for Terra public projects
- [#112](https://github.com/alleslabs/celatone-frontend/pull/112) Refactor past transactions page, support new messages including Migration, Instantiate2, Update Admin, Clear Admin, and change filter actions to dropdown selection. Add redo modal for instantiate2 and create component for tokens used in past tx page.
- [#113](https://github.com/alleslabs/celatone-frontend/pull/113) Update admin page ui and wireup
- [#98](https://github.com/alleslabs/celatone-frontend/pull/98) Add migrate, update admin, clear admin menu on contract list and detail
- [#102](https://github.com/alleslabs/celatone-frontend/pull/102) Add quick menu in overview and add highlighted in left sidebar
- [#125](https://github.com/alleslabs/celatone-frontend/pull/125) Add connect wallet alert in instantiate page
- [#126](https://github.com/alleslabs/celatone-frontend/pull/126) Add port id copier for IBC port id
- [#76](https://github.com/alleslabs/celatone-frontend/pull/76) Add Public projects page
- [#116](https://github.com/alleslabs/celatone-frontend/pull/116) Support Terra2.0 mainnet and testnet
- [#94](https://github.com/alleslabs/celatone-frontend/pull/94) Add unsupported assets in contract details page
- [#106](https://github.com/alleslabs/celatone-frontend/pull/106) Add sort alphabetically to query and execute shortcuts
- [#88](https://github.com/alleslabs/celatone-frontend/pull/88) Add code snippet for query and execute
- [#107](https://github.com/alleslabs/celatone-frontend/pull/107) Remove osmosis mainnet from chain list
- [#99](https://github.com/alleslabs/celatone-frontend/pull/99) Validate label and codeId field in instantiate page
- [#103](https://github.com/alleslabs/celatone-frontend/pull/103) Add check mark to selected network
- [#92](https://github.com/alleslabs/celatone-frontend/pull/92) Create select contract component for admin and migrate pages
- [#97](https://github.com/alleslabs/celatone-frontend/pull/97) Change label style to always afloat
- [#95](https://github.com/alleslabs/celatone-frontend/pull/95) Add network to url path
- [#89](https://github.com/alleslabs/celatone-frontend/pull/89) Update feedback link
- [#90](https://github.com/alleslabs/celatone-frontend/pull/90) Add update admin (`/admin`) and migrate (`/migrate`) page routes
- [#91](https://github.com/alleslabs/celatone-frontend/pull/91) Add migrate shortcut to the sidebar
- [#75](https://github.com/alleslabs/celatone-frontend/pull/75) Add code-related contracts table to the code detail page
- [#81](https://github.com/alleslabs/celatone-frontend/pull/81) Can scroll on side bar with fix deploy new contract button
- [#86](https://github.com/alleslabs/celatone-frontend/pull/86) Add transactions table in contract details page
- [#74](https://github.com/alleslabs/celatone-frontend/pull/74) Add tokens rendering for contract details page
- [#85](https://github.com/alleslabs/celatone-frontend/pull/85) Add sending asset in execute contract page
- [#84](https://github.com/alleslabs/celatone-frontend/pull/84) Contract proposals table ui and wireup
- [#82](https://github.com/alleslabs/celatone-frontend/pull/82) Add all codes page
- [#83](https://github.com/alleslabs/celatone-frontend/pull/83) Add invalid code state
- [#73](https://github.com/alleslabs/celatone-frontend/pull/73) Wireup migration table
- [#77](https://github.com/alleslabs/celatone-frontend/pull/77) Wireup code info section in code details page
- [#70](https://github.com/alleslabs/celatone-frontend/pull/70) Change default token denom on contract detail
- [#78](https://github.com/alleslabs/celatone-frontend/pull/78) Ignore building step when branch is not main
- [#62](https://github.com/alleslabs/celatone-frontend/pull/62) Add footer
- [#71](https://github.com/alleslabs/celatone-frontend/pull/71) Add search bar at the top (currently support only contract address and code id)
- [#69](https://github.com/alleslabs/celatone-frontend/pull/69) Add execute table in contract details page
- [#65](https://github.com/alleslabs/celatone-frontend/pull/60) Create instantiate button component
- [#64](https://github.com/alleslabs/celatone-frontend/pull/64) Add contract not exist page
- [#63](https://github.com/alleslabs/celatone-frontend/pull/63) Add code id explorer link and code table row navigation
- [#67](https://github.com/alleslabs/celatone-frontend/pull/67) Add Public Codes shortcut to sidebar and add Quick Actions section
- [#66](https://github.com/alleslabs/celatone-frontend/pull/66) Add code details data loader including code info and contract instances
- [#60](https://github.com/alleslabs/celatone-frontend/pull/60) Add navigation to contract row
- [#47](https://github.com/alleslabs/celatone-frontend/pull/47) Wireup init msg in contract details page
- [#51](https://github.com/alleslabs/celatone-frontend/pull/51) Wireup contract info in contract details page
- [#59](https://github.com/alleslabs/celatone-frontend/pull/59) Wireup code name, description, and cta section
- [#53](https://github.com/alleslabs/celatone-frontend/pull/53) Show contract description in contract details page
- [#58](https://github.com/alleslabs/celatone-frontend/pull/58) Wireup top section in contract details page
- [#54](https://github.com/alleslabs/celatone-frontend/pull/54) Render execute cmds shortcut in contract details page
- [#46](https://github.com/alleslabs/celatone-frontend/pull/46) Wireup instantiate info in contract details page
- [#55](https://github.com/alleslabs/celatone-frontend/pull/55) Add "Add To List / Edit" button to edit offchain details on query and execute pages
- [#44](https://github.com/alleslabs/celatone-frontend/pull/44) Render query cmds shortcut in contract details page
- [#38](https://github.com/alleslabs/celatone-frontend/pull/38) Show execute msg cmds when wallet is not connected
- [#49](https://github.com/alleslabs/celatone-frontend/pull/49) Add `develop` branch to `main.yml`
- [#39](https://github.com/alleslabs/celatone-frontend/pull/39) Render "Me" instead of user address
- [#43](https://github.com/alleslabs/celatone-frontend/pull/43) Add code details page ui skeleton
- [#37](https://github.com/alleslabs/celatone-frontend/pull/37) Add contract details data loader
- [#31](https://github.com/alleslabs/celatone-frontend/pull/31) Add contract details page ui skeleton
- [#41](https://github.com/alleslabs/celatone-frontend/pull/41) Add Github action for tracking CHANGELOG.md for changes

### Improvements

- [#204](https://github.com/alleslabs/celatone-frontend/pull/204) Change back button wording and adjust flow
- [#191](https://github.com/alleslabs/celatone-frontend/pull/191) Add typeface (Poppins) and add new styling for command shortcut
- [#190](https://github.com/alleslabs/celatone-frontend/pull/190) Setup sentry tunnel in next config
- [#179](https://github.com/alleslabs/celatone-frontend/pull/179) Add loading state to My code, Recent Codes, Contract details, Code details, All public projects, Public project, Saved Contract, Instantiated my be
- [#182](https://github.com/alleslabs/celatone-frontend/pull/182) Disable mainnet store code and show alert, refactor select chain hook and alert variants
- [#180](https://github.com/alleslabs/celatone-frontend/pull/180) Add helper text to editable cell, Change trash button to bookmark button
- [#181](https://github.com/alleslabs/celatone-frontend/pull/181) Refactor funds filtering logic and sort by denom, enable clicking the whole row of contract list when its readOnly
- [#171](https://github.com/alleslabs/celatone-frontend/pull/171) Change gql query for better speed, remove unwrap and default values, and better handle data rendering
- [#177](https://github.com/alleslabs/celatone-frontend/pull/177) Handle instantiate render: tx hash, proposal, genesis, and data not available case
- [#176](https://github.com/alleslabs/celatone-frontend/pull/176) Adjust contract table fraction, limit tag render, full ellipsis contract desc/name length
- [#168](https://github.com/alleslabs/celatone-frontend/pull/168) Past tx: Long messages should wrap to new line, clear text input when click on action in filter by actions, fail transaction should not show resend button, header table from "tx hash" to "transaction hash", send message should count unique address, contract details page transaction header (from "actions" to "messages"), hover row should display copy button
- [#174](https://github.com/alleslabs/celatone-frontend/pull/174) Change "code description" to "code name" and wireup public code name in code detail page
- [#173](https://github.com/alleslabs/celatone-frontend/pull/173) Add connect wallet alert to migrate page
- [#161](https://github.com/alleslabs/celatone-frontend/pull/161) Fix editable cell, no wrap when hover and click outside to close the editable cell
- [#159](https://github.com/alleslabs/celatone-frontend/pull/159) Add query key so refetch data when network change
- [#145](https://github.com/alleslabs/celatone-frontend/pull/145) Disable closing on some modal when click on modal overlay
- [#147](https://github.com/alleslabs/celatone-frontend/pull/147) Add empty state for select code modal
- [#140](https://github.com/alleslabs/celatone-frontend/pull/140) Add placeholder texts to upload&instantiate, save code, and save&edit contract
- [#139](https://github.com/alleslabs/celatone-frontend/pull/139) Fix Date to Dayjs
- [#135](https://github.com/alleslabs/celatone-frontend/pull/135) Invalidate queries after update/clear admin tx
- [#123](https://github.com/alleslabs/celatone-frontend/pull/123) Refactor tables to use custom components
- [#128](https://github.com/alleslabs/celatone-frontend/pull/128) Rewrite add to other list state and add default list to save to
- [#114](https://github.com/alleslabs/celatone-frontend/pull/114) Handle wallet connection cases in instantiate button
- [#115](https://github.com/alleslabs/celatone-frontend/pull/115) (Contract Details Page) Show no admin and correctly handle explorer link by address type
- [#68](https://github.com/alleslabs/celatone-frontend/pull/68) Refactor past txs link props and make sure navigation works
- [#64](https://github.com/alleslabs/celatone-frontend/pull/64) Add address validation functions for contract and user addresses
- [#52](https://github.com/alleslabs/celatone-frontend/pull/52) Create a component for disconnected State and apply to contract, code, past tx
- [#56](https://github.com/alleslabs/celatone-frontend/pull/56) Refactor offchain form component by not receiving nameField and descriptionField
- [#50](https://github.com/alleslabs/celatone-frontend/pull/50) Refactor offchain component to use react-form and remove redundant offchain components, and refactor edit contract details modal

### Bug fixes

- [#211](https://github.com/alleslabs/celatone-frontend/pull/211) Fix contract count not display for code table in public project
- [#208](https://github.com/alleslabs/celatone-frontend/pull/208) Fix messages shown in past tx page (should show only wasm and send messages)
- [#200](https://github.com/alleslabs/celatone-frontend/pull/200) Fix add attached assets property
- [#198](https://github.com/alleslabs/celatone-frontend/pull/198) Fix handle keplr wallet ready
- [#194](https://github.com/alleslabs/celatone-frontend/pull/194) Fix "connect wallet state" for tables
- [#196](https://github.com/alleslabs/celatone-frontend/pull/196) Fix rewrite rule for amplitude
- [#188](https://github.com/alleslabs/celatone-frontend/pull/188) Fix "No contact description" prefill in description section in contract detail page
- [#187](https://github.com/alleslabs/celatone-frontend/pull/187) Fix renaming list flicker to the all lists for a second
- [#184](https://github.com/alleslabs/celatone-frontend/pull/184) Fix next seo to use default seo
- [#186](https://github.com/alleslabs/celatone-frontend/pull/186) Fix logo navigation
- [#185](https://github.com/alleslabs/celatone-frontend/pull/185) Fix sentry in next.config.js
- [#183](https://github.com/alleslabs/celatone-frontend/pull/183) Fix build failed because sentry env
- [#175](https://github.com/alleslabs/celatone-frontend/pull/175) Fix css related issue and tag selection input
- [#165](https://github.com/alleslabs/celatone-frontend/pull/165) Fix messages type
- [#172](https://github.com/alleslabs/celatone-frontend/pull/172) Fix infinite loop dep, wrong fallback validation
- [#157](https://github.com/alleslabs/celatone-frontend/pull/157) Fix chain path bug when mixed up with query params
- [#154](https://github.com/alleslabs/celatone-frontend/pull/154) Stay on the same contract list page after renaming the list
- [#155](https://github.com/alleslabs/celatone-frontend/pull/155) Fix uncontrolled input error and fix space bar issue in editable cell
- [#156](https://github.com/alleslabs/celatone-frontend/pull/156) Fix json editor cannot focus by clicking on empty area
- [#166](https://github.com/alleslabs/celatone-frontend/pull/166) Change default list when editing contract information
- [#164](https://github.com/alleslabs/celatone-frontend/pull/164) Add observer in code details page
- [#151](https://github.com/alleslabs/celatone-frontend/pull/151) Fix state reset on clicking wallet button
- [#158](https://github.com/alleslabs/celatone-frontend/pull/158) Change dayjs back to Date type as it is incompatible with mobx storage
- [#153](https://github.com/alleslabs/celatone-frontend/pull/153) Fix network dropdown blocked by filter topic
- [#137](https://github.com/alleslabs/celatone-frontend/pull/137) Throw error instead of returning undefined in query function
- [#148](https://github.com/alleslabs/celatone-frontend/pull/148) Fix scrolling to table header on first land
- [#146](https://github.com/alleslabs/celatone-frontend/pull/146) Fix contract select always fetch when theres no contract address, edit query keys
- [#143](https://github.com/alleslabs/celatone-frontend/pull/143) Use dummy address only when getting execute cmds
- [#142](https://github.com/alleslabs/celatone-frontend/pull/142) Fix migration table row duplicate and add key to port id render
- [#138](https://github.com/alleslabs/celatone-frontend/pull/138) Remove execute table in contract details page (due to data issue)
- [#136](https://github.com/alleslabs/celatone-frontend/pull/136) Fix decode message from query param in execute page
- [#132](https://github.com/alleslabs/celatone-frontend/pull/132) Fix permission field in upload simulation
- [#121](https://github.com/alleslabs/celatone-frontend/pull/121) Fix code snippet for query axios
- [#129](https://github.com/alleslabs/celatone-frontend/pull/129) Fix wallet disconnection on network query change
- [#124](https://github.com/alleslabs/celatone-frontend/pull/124) Fix public project query, display project image in contract details page
- [#125](https://github.com/alleslabs/celatone-frontend/pull/125) Fix incorrect CosmJS execute snippet
- [#117](https://github.com/alleslabs/celatone-frontend/pull/117) Fix native token label formatting
- [#121](https://github.com/alleslabs/celatone-frontend/pull/121) Fix code snippet for query axios
- [#122](https://github.com/alleslabs/celatone-frontend/pull/122) Fix unknown code upload block height
- [#121](https://github.com/alleslabs/celatone-frontend/pull/121) Fix code snippet for query axios
- [#119](https://github.com/alleslabs/celatone-frontend/pull/119) Fix searching and project ordering in public projects page
- [#118](https://github.com/alleslabs/celatone-frontend/pull/118) Fix floating tooltip when scrolling out of copy button
- [#111](https://github.com/alleslabs/celatone-frontend/pull/111) Fix recent activities navigation and instantiate encode/decode
- [#105](https://github.com/alleslabs/celatone-frontend/pull/105) Propoerly show instantiator of code contracts and contract in the instantiated list
- [#72](https://github.com/alleslabs/celatone-frontend/pull/72) Fix general wording and grammar
- [#110](https://github.com/alleslabs/celatone-frontend/pull/110) Fix proposal detail rendering
- [#109](https://github.com/alleslabs/celatone-frontend/pull/109) Fix incorrect rendering of zero value badges
- [#101](https://github.com/alleslabs/celatone-frontend/pull/101) Fix incorrect truncating of proposal id in contract detail's migration table
- [#100](https://github.com/alleslabs/celatone-frontend/pull/100) Fix contract instantiated time parsing
- [#96](https://github.com/alleslabs/celatone-frontend/pull/96) Fix incorrect instantiated block height explorer link
- [#87](https://github.com/alleslabs/celatone-frontend/pull/87) Fix funds didn't microfy before sending tx
- [#80](https://github.com/alleslabs/celatone-frontend/pull/80) Fix the misalignment of state in the PastTx page
- [#42](https://github.com/alleslabs/celatone-frontend/pull/42) Properly show CTAs on contract-list page and edit zero/disconnected state
- [#45](https://github.com/alleslabs/celatone-frontend/pull/45) Add chain ID and code details to contract detail data loader

### Docs

- [#57](https://github.com/alleslabs/celatone-frontend/pull/57) Rewrite README file with more information and structure
