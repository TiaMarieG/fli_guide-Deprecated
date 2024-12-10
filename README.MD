# FLi Guide - An online helper tool for the upcoming game Fantasy Life i: The Girl Who Steals 

 **Originally created by - Tia Marie Gordon**

 **Pair-programmed with - Tav Singh**

## A Quick Rundown

This project was started before the final was announced as it's a personal project of mine that I've been slowly working on over the past few weeks. After learning of the final and what would be needed for it, I realized that my personal project would be a good fit as some of the requirements were tasks that I was going to implement at some point in the future anyway. They'd just be done sooner rather than later now.

The goal of this personal project is to create a main source of information that players of the game 'Fantasy Life i' can quickly access without having to switch between multiple different sites or spend time scouring through social media platforms in hopes of finding answers to niche questions. As a gamer myself, it can be frustrating trying to figure out certain aspects of a game and asking for help can be daunting, especially when one is uncertain as to how others will react to a request for aid. As such, it's my goal for this website to grow and adapt to be supportive in all aspects of the game.

Fantasy Life i is not set to release until April 2025, so much of the data that's seen on this guide was pulled from its predecessor - Fantasy Life. Once Fantasy Life i has gone live, all information will be updated.

## Features
* A comprehensive list of every available class or 'life'
* Quickly peruse recipes and see what materials are needed to make them
* 

## Contributions

**Tia Marie Gordon**

CSS - Many of the images were pulled from the Fli Home website. The color scheme is intended to match the theme of Fli. Each 'life' icon was snipped from the main page and the background removed so that it could be used as part of the links on the main page. The basic page layout was inspired by several different guides that I personally use during my own gaming sessions. The overall point is that the information should be quickly accessible and get straight to the point. A gamer doesn't want to waste time trying to read every little detail to find the information they are looking for.

Mobile CSS - Most of the webpages were already mobile friendly. The only one that wasn't was the homepage due to the size of the navigation menu and the various icons. I implemented media queries that would adjust the webpage once it hit a threshold of 780 pixels wide since that's when much of the CSS started to break and look scattered. Once the web page dips below this width, it will take on the mobile css and reposition various elements of the page to improve coherency and make it appear more streamlined.

Life Skills - I opted to work on the Blacksmith, Carpenter, and Cook lives. The data for each life was pulled from the Fantasy Life Wiki page. The 'recipes' that can be selected were made up and don't actually exist in-game, but they match the theme of the chosen life. I also worked on all the Gathering lives. The data for each life was pulled from the Fantasy Life Wiki page, except for the Farmer life which is a new class that is coming out with Fantasy Life i. Since there is no known information about it, I simply made up a few paragraphs to follow the same layout as the rest of the skills.

*NOTE* - Both the Gathering and Combat skills do not possess information that requires the use of a database. As such, focus was primarily placed on the crafting skills in regard to the final project.

**Tav & Tia**

Database - The database has gone through several iterations as both Tav and I have worked on it. At first, there was going to be two tables for every skill - one for recipes stored on the database and one that contains recipes that users submitted for review - but we decided that that was going to be way too many tables to try and manage. Things could get messy quickly. Tav came up with the idea that we have two overall tables - one for stored recipes and one for submitted recipes - and there would be a column that would have what skill this recipe was tied to. This would make it easier to manage the recipes as well as quickly sort them for review rather than having to bounce between potentially 28 different tables.

app.js - A large portion of this was set up by me (Tia) before we began working on it as the final project since I was practicing how to link up multiple pages together and altering the guide to be used with Node and mariadb. Tav went through and added the finer details such as the validation, handling empty inputs, and being able to tie a select option to a row of information in the database. Tav also had the idea to set each .get with a variable containing the name of what skill that page is related so that when submitting missing recipes, the user doesn't have to type out the name of the skill that recipe belonged to. This is extremely useful because, as a gamer myself, if I was on the cooking page and submitted a missing recipe, why would I want to type out the name of the skill the recipe belonged to? I would assume the two were tied together somehow.

**Tav Singh**