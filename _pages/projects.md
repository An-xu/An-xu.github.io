---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}
## [High-Performance Thermoelectric Materials via Extrusion Printing and Machine Learning](#Bayesian)

This project focuses on leveraging extrusion printing and machine learning to revolutionize thermoelectric device fabrication. Traditional manufacturing methods are costly and restricted to simple geometries, limiting their broader application. By integrating high-throughput experimentation with Bayesian optimization, this work accelerates the optimization of ink formulations and printing parameters, enabling the fabrication of complex 3D thermoelectric structures with exceptional performance. The approach demonstrates a significant leap in thermoelectric materials research, achieving an ultrahigh room temperature zT of 1.3 in printed BiSbTe-based materials—the highest reported for printed thermoelectrics.
<img src="../images/printingbayesian.gif" alt="Workflow of the machine learning-assisted extrusion printing of thermoelectric inks"/><br>

## Key Contributions

- **Integration of Machine Learning**: Implemented a Gaussian process regression (GPR)-based model to predict thermoelectric power factors efficiently, enabling rapid optimization of ink formulations and printing parameters.
- **Optimization via Bayesian Methods**: Leveraged Bayesian optimization (BO) to significantly accelerate the search for high-performance printing conditions, achieving exceptional thermoelectric performance while maintaining shape fidelity.
- **Scalable and Generalizable Approach**: Showcased a machine learning-guided ink-based printing strategy that can be applied to a wide range of functional materials and devices, paving the way for broader technological applications.

## [RadioWare: Courseware and Lab Kit for Interference-Limited Communications and Electronic Defense](#radioware)

This project focuses on the development and enhancement of a software-defined radio (SDR) communication system, designed to provide students with practical experience in both commercial wireless technologies (e.g., 5G, WiFi) and military applications such as electronic warfare and sensing. By addressing the challenges of increasingly congested and contested radio frequency (RF) spectrum environments, the project combines foundational learning with hands-on implementation. Starting with a functional wired transmission model, participants will progressively build a wireless system that addresses key challenges such as propagation effects, interference, and noise. Through this process, students gain an enhanced understanding of wireless communication principles by tackling real-world problem-solving scenarios, develop essential engineering skills such as programming (Python, C), hardware testing, and system debugging, and prepare for advanced prototyping, research projects, and deeper studies in communication systems.
<table>
  <tr>
    <td align="center">
      <img src="../images/RFmodule.jpg" alt="RF Modules" width="300"/><br>
      <b>RF Modules</b>
    </td>
    <td align="center">
      <img src="../images/Python.jpg" alt="Python Code" width="300"/><br>
      <b>Python Code</b>
    </td>
    <td align="center">
      <img src="../images/Measurement.jpg" alt="Measurement Equipment" width="300"/><br>
      <b>Measurement Equipment</b>
    </td>
  </tr>
</table>

## Key Contributions
- **SDR Communication System Development**: Designed and implemented baseband signal processing boards with extensive modification and verification.
- **Simulation and Analysis**: Modeled signal flow and communication scenarios using Python, enabling detailed system design and performance analysis.
- **Measurement and Testing**: Integrated Python-based control for hardware, including ADALM, oscilloscopes, spectrum analyzers, and FieldFox, to validate system functionality under real-world conditions.

This project offers a comprehensive learning experience that combines conceptual depth, technical expertise, and practical application, providing students with the skills and knowledge to excel in modern RF communication environments.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

  
Service and leadership
======
* Currently signed in to 43 different slack teams