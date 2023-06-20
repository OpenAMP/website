---
layout: flow
title: Governance
permalink: /governance/
description: |-
  As the OpenAMP Project governance gets defined, it will be documented here.

  Governance discussions are typically held during the OpenAMP Technical Steering Committee meetings.
jumbotron:
  title: Governance
  class: openamp_bg overlay flex-column expandable_jumbotron background-image
  description: >
    As the OpenAMP Project governance gets defined, it will be documented here.
  image: /assets/images/content/triangle_background.png
---

# Introduction

Governance discussions are typically held during the OpenAMP Technical Steering Committee meetings.

# Strategic and Technical Direction

## Board

The OpenAMP Project board consists of a representative from each of the member companies. For more details regarding the Board, please refer to the [Project Charter][project charter].

## Technical Steering Committee

The Technical Steering Committee (TSC) calls are open to all. Items requiring a vote are voted upon by a representative from each of the member companies. To be notified of TSC calls, please subscribe to the TSC mailing list [via the OpenAMP Project mailing lists page][openamp mailing lists page].

For more details regarding the TSC, please refer to the [Project Charter][project charter].

## Working Groups

The OpenAMP Working Groups are currently:

- OpenAMP Remoteproc (a.k.a. OpenAMP classic)
- System Device Tree
- System reference

To be notified of working group calls, please subscribe to the corresponding working group mailing list [via the OpenAMP Project mailing lists page][openamp mailing lists page].

To review past meeting notes of the working groups, please visit the [Meeting notes page][openamp meeting notes page].

# Membership

It is not a requirement to be employed at a Member company to participate as a developer or in the OpenAMP Technical Steering Committee. Community participation is welcome!

Governance of the community project is overseen by a board of representatives from Member companies. Member fees support administration for the project, such as the project website and mailing lists. Details can be found in the [Project Charter][project charter].

To get more information about membership, contact [enquiries@openampproject.org](mailto:enquiries@openampproject.org "Enquiries email")

# Consensus and Conflict Resolution

Initial discussion at [October 2020 TSC call](https://github.com/OpenAMP/open-amp/wiki/TSC-Meeting-Notes-2020#20201009).

# Code of Conduct

Published at the OpenAMP [code of conduct][code of conduct] page.

# Development Process

The development process in this section applies to the libmetal and open-amp libraries and any RTOS code in openamp-system-reference.

The pull request model applies to all OpenAMP repositories, except from the kernel-staging repository.

The kernel staging repository accepts only pull request from OpenAMP maintainers. Patches for the kernel should be sent to the [linux-remoteproc@vger.kernel.org](mailto:linux-remoteproc@vger.kernel.org) mailing list.

## Maintainers

Maintainers are nominated and voted upon by the TSC. They should be the only ones who can commit to the repositories. As with everyone else, they must use Pull Requests.

[Arnaud Pouliquen][arnaud github] and [Ed Mooring][ed github] are the maintainers of [libmetal][libmetal github] and lib [open-amp][open-amp github]. (2020-02-20)

## Coding Standards

### Coding Style

New OpenAMP code should follow the [Zephyr coding style][zephyr coding style] and uses the checkpatch.pl script to automatically review and leave comments on pull requests (continuous integration process). (2020-02-20)

### MISRA C

(2020-04-17) There was some interest in making the code easier to certify, but no firm decision to proceed. Recommendation is to watch what Zephyr and Xen do, then revisit the question.

### C Version

To be discussed. C99?

## Development Workflow

All development will be done using the standard GitHub workflow of pull requests. (2020-02-20)

### Bug Tracking

Via GitHub issues. (2020-05-12)

### Commit Process

Pull requests will be merged by the maintainers after review.

### New Feature Development

Proposed new features should be discussed actively on the mailing list and the top features selected for the next release. The Technical Steering Committee and Working Groups can also provide direction on feature development.

### Testing

For a new feature: an application or test must be provided so that we can test that the feature works & continues to be valid in the future.

OpenAMP CI is relying on the checkpatch tool, using Zephyr coding rules.

TO DO: Add guidelines once they get baked

### Documentation

Sphinx and Doxygen are used.
The Documentation has to be be updated for any new feature or API update.

## Branching and Tagging Strategy

### Development on main

The main branch is where all accepted changes are first committed. The CI loop is primarily focused on this branch.

### Release branches

A release branch is created from the main branch on the release, for maintenance.

### Release Tags

At the time of the release, the release branch will be tagged. This will help enable reproducible builds.

## Releases

### Release Frequency

Releases will be twice yearly, in the spring and fall (usually end of April and end of October).

### Naming Conventions

Releases will be named yyyy.mm.n (e.g. 2019.10.0).

### Release Process

As the OpenAMP project is rather small as open-source projects go, the release process can be fairly simple. The phases and milestones are listed below. This information should be maintained on the Wiki page for the project.

#### Discussion and Development

This is for discussion and development of new features. It starts as soon as the release branch is created. During this period, new features can be committed after the usual review.

#### Feature Freeze

This occurs at about the five-month mark in the release cycle. The release branch is created from the main at this point.

#### Debug

This occurs at about the five-month mark in the release cycle
After Feature Freeze, no new features are committed until the release, only bug fixes.

#### Code Freeze

This occurs at about fifteen days before the release
At this time, no further commits may be made to the release branch unless they fix a critical bug found in testing.

#### Release

The release branch is tagged and the code archived and made accessible for download.

#### Release Maintenance

Topic to be revisited.

See [https://wiki.yoctoproject.org/wiki/Stable_branch_maintenance](https://wiki.yoctoproject.org/wiki/Stable_branch_maintenance)

## Interface Stability Policy

### API Stability

#### Scope

The scope of the OpenAMP API lifecycle policy is mostly the libraries and supporting code owned by the project. Today that is primarily the open-amp and libmetal libraries but we expect that to expand in the future.

Specifically out of scope would be the APIs internal to the Linux kernel. The Linux kernel has a famous "no stable api" policy. Probably also out of scope would be the kernel / user interface. This interface has a more stringent "don't break the user interface policy" than will be described here.

#### Adding New APIs

An update of the API shall not break the existing one. When possible a new API should be created instead of updating the existing one, else the deprecating APIs process described below shall be applied.

#### Deprecating Existing APIs

If an API is to be removed, it must remain in a deprecated state for 2 year (4 releases). In extraordinary cases such as a critical security issue, the TSC may impose a shorter period.

#### Kernel vs. Library Compatibility

The kernel and library implementations of OpenAMP must be interoperable at all times. Extensions on either side must be downward compatible.

### Wire Protocol Stability

The wire protocol describes the interactions of two independent CPUs in an AMP system. The bar for maintaining compatibility at this level is much higher.

This is being discussed on the TSC mailing list in the [thread "API and Wire protocol stability"](https://lists.openampproject.org/archives/list/tsc@lists.openampproject.org/thread/6PEWEBRDTEX6GOMFF5YOO7YRMX5T5SCD/).

## Certification Concerns

### Security and Safety

We expect OpenAMP libraries will be used in security and safety sensitive areas. OpenAMP will align to reasonable requirements as they become clear.

[openamp mailing lists page]: http://lists.openampproject.org
[openamp meeting notes page]: https://github.com/OpenAMP/open-amp/wiki/Meeting-Notes
[project charter]: ../docs/OpenAMPProject_Charter_Approved2020Mar06BoardMeeting.pdf
[arnaud github]: https://github.com/arnopo
[ed github]: https://github.com/edmooring
[libmetal github]: https://github.com/OpenAMP/libmetal
[open-amp github]: https://github.com/OpenAMP/open-amp
[zephyr coding style]: https://docs.zephyrproject.org/latest/contribute/index.html#coding-style
[code of conduct]: https://www.openampproject.org/conduct
