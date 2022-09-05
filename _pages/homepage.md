---
layout: flow
title: The OpenAMP Project
permalink: /
description: >-
  OpenAMP (Open Asymmetric Multi-Processing) seeks to standardize the interactions between operating environments in a heterogeneous embedded system through open source solutions for Asymmetric MultiProcessing (AMP).
jumbotron:
  inner_class: text-center
  title: ""
  include: openamp-jumbotron.html
  class: openamp_bg overlay flex-column expandable_jumbotron background-image
  title-class: font-weight-bold
  image: /assets/images/content/triangle_background.png
flow:
  - row: container_row
    sections:
      - format: text
        style: text-center blockquote
        text_content:
          text: |
            SoCs (System on a Chip) are becoming more heterogeneous, with multiple processor clusters and special-purpose accelerators. As a result, AMP (Asymmetric MultiProcessing) systems need to be able to run different operating environments side-by-side on the same chip. Developing a standard shared memory scheme for the configuration and interaction between these environments will simplify working with SoCs.

            OpenAMP (Open Asymmetric Multi-Processing) is a framework providing the software components needed to enable the development of software applications for AMP systems. It allows operating systems to interact within a broad range of complex homogeneous and heterogeneous architectures and allows asymmetric multiprocessing applications to leverage parallelism offered by the multicore configuration.

            [This presentation](/docs/presentations/OpenAMP-Elevator-Pitch-2022-Q1.pdf "OpenAMP elevator pitch slides PDF") gives some brief details about OpenAMP.
---
