---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
*  Mechanical Engineering Ph.D., University of Notre Dame du Lac (01/2023-Now)
* 	Electrical Engineering Master, University of Notre Dame du Lac (08/2021-12/2022)
* 	BSc. in Communications Engineering, National Chung Cheng University (09/2016-01/2020)
  
Skills
======
* Programming Language
  * Python
  * C
  * Verilog
  * RISC-V
* Tools for Electronic Design
  * HFSS 
  * CST Studio
  * Advanced Design System
  * MATLAB
  * AutoCAD
* Operating System: FreeRTOS

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% comment %}
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
{% endcomment %}
