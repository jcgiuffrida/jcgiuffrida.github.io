---
layout: post
title: HealthViz
categories: none
date: '2017-10-09 00:00:00 -0500'
excerpt: An interactive scatterplot visualization and community health data platform.
image: '/resources/images/INC-county-medium.jpg'
tags: viz smart health policy
---

When I joined Presence Health in the summer of 2015, I was tasked with turning our community benefit reporting from an accounting procedure into a tool for strategy and policy-making. After working on [several projects of this nature](https://healthviz.org/blog/our-origin-story/), I began improving the code I had written for [HealthyChi Viz]({{ site.baseurl }}/project/2015/03/01/SDH/), an interactive scatterplot of Chicago's communities.

The platform soon became far more complex, as software projects do, and by the fall of 2016 I had built an internal planning tool with the working name HealthViz. 

[<img src="{{ site.baseurl }}/resources/images/INC-county-medium.jpg" width="100%">](https://healthviz.org)
*HealthViz is an intelligent, growing platform that analyzes data to understand communities, populations, and places with decision-ready insights.*

### Landscape
As a nonprofit health system with a mission to improve the health of the most vulnerable in our communities, Presence Health needed an easy way to understand those communities. Existing platforms that I reviewed generally fell into one of several categories:

* **Too map-heavy:** A number of platforms repackaged existing data with minimal processing and context to provide color-coded maps. While maps are an intuitive way to look across geographies, they have serious limitations:
  * They give more visual space to less-populated rural areas, while densely packed cities and towns are difficult to make out.
  * They present the world along a single vector, neatly avoiding the complexity of our communities.
  * They tend to look the same for every topic: poorer areas are always red (bad) and wealthier areas are always green (good). 

* **Too simplistic:** Most platforms present data points in isolation. This is great if we only need to know the poverty rate in a neighborhood, but not so great if we care about *why* the poverty rate is what it is, or how it compares to similar locations, or other ways to measure economic insecurity.

* **Inflexible:** We need a platform that can dig deep into each of our communities, as we define them. Other platforms that allow us to create a custom region are difficult to update, confusing to use, or both.

* **Not attractive:** This is the most subjective, but one of the most important. There is a widespread sense that socially-minded organizations, like community health departments or community organizations, need to live "within their budgets" and cannot afford the best. We become used to tools that feel slow, look outdated, and don&rsquo;t take advantage of the latest technology. As web technology continues to improve, this is no longer acceptable. We *do* deserve the best. 

As we could not find an appropriate platform for community health visualization, I decided to build my own. My colleague Will Snyder, also a Classics major, guided the development, secured additional resources, and has continually pushed HealthViz to become better, broader, and more intelligent. 

### Overview
HealthViz is my attempt to address the issues I saw with alternative platforms. It has maps, but contextualizes all of its data to respect the complexity of our communities. (For instance, data on poverty is presented alongside data about health conditions, economic opportunity, and housing). It includes several ways to visualize data, like a scatterplot and interactive charts. It is built using the latest open-source web technology, making it easier to update and keep fresh. At Presence Health, we use HealthViz to understand the health conditions and social determinants in our communities, and many projects begin with a search of HealthViz. 

As HealthViz has grown, we&rsquo;ve realized that it has potential applications outside of Presence Health and even outside of healthcare. We are working to enable it to be used by other organizations and the general public.

### How did you build this?
We are frequently asked: how did two Classics majors build the best platform for understand community data? 

It&rsquo;s a long story, but ultimately a meaningful one. See [our blog post](https://healthviz.org/blog/how-did-we-build-healthviz/) for more.

### Future
We are hoping to open HealthViz up for public use soon. If you are interested in joining, please add yourself to the waitlist at the bottom of the homepage, and I&rsquo;ll reach out when it&rsquo;s ready.  

<div style="text-align: center;"><a class="btn" href="https://healthviz.org/blog/our-origin-story/" style="padding: 10px 20%;">Learn more about HealthViz</a></div>
