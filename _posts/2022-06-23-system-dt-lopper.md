---
title: Watch Embedded Linux Conference 2022 presentation on System Device Tree and Lopper
author: openamp
layout: post
date: 2022-06-23 01:00:00
description: >-
  Bruce Ashfield and Stefano Stabellini from AMD Xilinx presented at Embedded Linux Conference 2022 about "System Device Tree and Lopper: Concrete Examples"
category: news
tags:
  - OpenAMP
  - Lopper
  - Conference
  - Open Source
  - System-DT
image: /assets/images/content/openAMP_share_image.png
---
Bruce Ashfield and Stefano Stabellini from AMD Xilinx presented at Embedded Linux Conference 2022 about "System Device Tree and Lopper: Concrete Examples".

Abstract:
System Device Tree is an extension to Device Tree to describe all the hardware on an SoC, including heterogeneous CPU clusters and secure resources not typically visible to an Operating System like Linux. This full view allows the System Device Tree to be the "One true source" of the entire hardware description and helps to prevent the common (and hard-to-debug) problem of conflicting resources and system consistency. Lopper is an Open Source framework to parse and manipulate System Device Tree. With Lopper, it is possible to generate multiple traditional Device Trees from a single larger System Device Tree. This presentation will provide an overview of System Device Tree and will discuss the latest updates of the specification and tooling. The talk will illustrate multiple use-cases for System Device Tree with concrete examples, such as Linux running on the more powerful CPU cluster and Zephyr running on a smaller Cortex-R cluster. It will also show how to use Lopper to generate multiple traditional Device Trees targeting different OSes, not just Linux but also Zephyr/other RTOSes. Finally, an end-to-end demo based on Yocto to build a complete heterogeneous system with multiple OSes and RTOSes running on different clusters on a single reference board will be shown.

You can watch the video of the presentation [here](https://www.youtube.com/watch?v=m8wh0pT_P-c&list=PLbzoR-pLrL6r8ZZ_3KT5dYt6yhL3V_Ig4&index=37).

You can download the PDF of the presentation [here](https://static.sched.com/hosted_files/ossna2022/d9/Lopper%20ELCNA%202022.pdf).

Additional presentations by Stefano Stabellini, which you might find interesting are:
* Embedded Linux Conference 2022: Static Partitioning with Xen, LinuxRT, and Zephyr: A Concrete End-to-end Example - Stefano Stabellini, AMD Xilinx: [Abstract](https://ossna2022.sched.com/event/11NqZ/static-partitioning-with-xen-linuxrt-and-zephyr-a-concrete-end-to-end-example-stefano-stabellini-amd?iframe=no), [Video](https://www.youtube.com/watch?v=CiELAJCuHJg&list=PLbzoR-pLrL6r8ZZ_3KT5dYt6yhL3V_Ig4&index=35)
* Critical Software Summit 2022: Xen in Safety-Critical Systems - Stefano Stabellini, AMD Xilinx & Bertrand Marquis, Arm: [Abstract](https://ossna2022.sched.com/event/11Nua/xen-in-safety-critical-systems-stefano-stabellini-amd-bertrand-marquis-arm?iframe=no), [Video](https://www.youtube.com/watch?v=SHo-gCZH5rg&list=PLbzoR-pLrL6pR0cSMlk3Lz3ncNbP21AB0&index=5)
