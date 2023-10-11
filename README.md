# DontSkip - gym/fitness app (frontend)

Welcome to DontSkip, your go-to gym and fitness app for all things leg-focused exercises! Whether you're a fitness enthusiast or just starting your fitness journey, DontSkip is here to help you build stronger legs and not skip leg day. With our app, you can browse a wide range of leg exercises, create personalized routines, and take your leg workouts to the next level. For our backend, please refer to the [gym-fitness-api README](https://github.com/rickyjmartinez/gym-fitness-api)

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)

## Features

DontSkip offers a variety of features to help you achieve your fitness goals effectively:

## Browse Leg-Focused Exercises

* Explore a vast collection of leg-focused exercises, complete with detailed instructions and images.
* Discover new exercises to target different muscles in your legs, from quads to hamstrings and more.

## Create and Edit Personalized Routines

* Logged-in users can create customized workout routines tailored to their fitness goals.
* Add your favorite leg exercises to your routine and adjust sets and reps to match your preferences.
* Edit and remove exercises from your routine at any time to adapt to your evolving fitness needs.

# Search for More Exercises
* Looking for even more leg exercises? Visit our "More Exercises" page.
* Specify your desired muscle group and difficulty level as search criteria.
* Our app will make a GET request to [API Ninjas exercise API](https://api-ninjas.com/api/exercises) using your choices as query parameters to fetch additional exercises for you.

# Getting Started

To get started with Don'tSkip, follow these steps:

1. Clone this repository to your local machine.
```
https://github.com/rickyjmartinez/dont-skip-frontend.git
```
2. Set up and configure the Ruby on Rails backend. Refer to the backend documentation for detailed instructions.

3. Navigate to the project directory:
```
cd dont-skip-frontend
```
4. Install the project dependencies using npm: 
```
npm install
```
5. Start frontend server. 
```
npm run dev
```
This command will start the development server, and you should be able to access the DontSkip application in your web browser at `http://localhost:5173`

# Usage

To use DontSkip to create routines, you will need to log in or register to access those features. Once logged in, you can still browse exercises but now have the ability to add exercises to your routine and see your routine on the 'My Routine' tab. 