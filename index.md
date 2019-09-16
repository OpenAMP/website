---
layout: flow
title: The OpenAMP Project
css-package: home
description: >-
    OpenAMP (Open Asymmetric Multi-Processing) seeks to standardize the interactions between operating environments in a heterogeneous embedded system through open source solutions for Asymmetric MultiProcessing (AMP).
jumbotron:
    title: ""
    description: ""
    include: openamp-jumbotron.html
    background-image: /assets/images/content/triangle_background.svg
flow:
    - row: container_row
      sections:
        - format: members
          style: zoom
          members_content:
            item_width: "2" #bootstrap col-sm- value e.g 3, 4, 5ths etc
            items:
              - name: Arm
                image:
                    path: /assets/images/members/arm.jpg
                    alt: Arm Logo
                url: https://www.arm.com/
              - name: Kalray
                image:
                    path: /assets/images/members/kalray.jpg
                    alt: Kalray Logo
                url: https://www.kalrayinc.com/
              - name: Linaro Logo
                image:
                    path: /assets/images/members/linaro-logo.png
                    alt: Linaro Logo
                url: https://www.linaro.org/
              - name: Mentor Logo
                image:
                    path: /assets/images/members/Mentor-ASB.png
                    alt: Mentor Logo
                url: https://www.mentor.com/
              - name: Wind River Logo
                image:
                    path: /assets/images/members/WindRiver.png
                    alt: Wind River Logo
                url: https://www.windriver.com/
              - name: Xilinx Logo
                image:
                    path: /assets/images/members/xilinx.png
                    alt: Xilinx Logo
                url: https://www.xilinx.com/
    - row: main_content_row
---

SoCs (System on a Chip) are becoming more heterogeneous, with multiple processor clusters and special-purpose accelerators. As a result, AMP (Asymmetric MultiProcessing) systems need to be able to run different operating environments side-by-side on the same chip. Developing a standard shared memory scheme for the configuration and interaction between these environments will simplify working with SoCs.

OpenAMP (Open Asymmetric Multi-Processing) is a framework providing the software components needed to enable the development of software applications for AMP systems. It allows operating systems to interact within a broad range of complex homogeneous and heterogeneous architectures and allows asymmetric multiprocessing applications to leverage parallelism offered by the multicore configuration.
