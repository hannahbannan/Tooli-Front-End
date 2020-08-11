
# Tooli-Front-End
A full-stack inventory management application. Uses React, Ruby on Rails, and PostsgreSQL

## Project Link

LIVE LINKS:

font-end link: https://tooli.netlify.app/

back-end link: https://tooli.herokuapp.com/

GITHUB LINKS:

front-end link: https://github.com/hannahbannan/Tooli-Front-End

back-end link: https://github.com/hannahbannan/Tooli-Back-End

## Project Description

An inventory management application that tracks tools and construction equipment across a company's construction sites. There will be two levels of users, admin and crew. I am building this app for Simzee Construction & Development, after one of their project managers (also my boyfriend) mentioned that they are always losing track of where their tools and equipment are.

## WireFrames

Wireframes: https://www.figma.com/file/shGPKshWY85azVCLIWpccp/Tooli?node-id=0%3A1


Database architecture: https://dbdiagram.io/d/5f30a20208c7880b65c5a48f


# USER STORIES

* Admin user will be able to login and will have access to full CRUD for sites and tools. 
* Admin can create, update, and delete construction sites and tools.
* Admin can also see a log of current locations for all tools, and see which crewmember updated the location log.
* Crew user will be able to login and will have access to RU for sites and tools.
* Crew can update the location of a tool.
* Crew and admin can search for a tool and pull up its information and location.

# MVP Matrices

| BackEnd                            | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
|  Database structure planning       |    H     |       3        |               |             |
|  Spin up Rails server              |    H     |       1        |      0.5      |             |
|  Create seed data for Simzee       |    H     |       3        |               |             |
|  Config schema for tools and sites |    H     |       3        |               |             |
|  Config log join table             |    H     |       1        |               |             |
|  Set up CRUD routes                |    H     |       4        |               |             |
|  Research user auth for admin      |    H     |       5        |      1.5      |             |
|  Set up admin/crew routes          |    H     |       4        |               |             |
|  Deploy server on heroku           |    H     |       2        |      0.5      |             |
|  Total                             |    H     |      26        |      2.5      |             |

| React/Front End                               | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Spin up React app                             |    H     |       1        |     0.5       |             |
| Navbar & Footer                               |    H     |       2        |     0.5       |             |
| React Router                                  |    H     |       3        |      1        |             |
| Login page                                    |    H     |       3        |               |             |
| Research login/cookies                        |    H     |       6        |     1.5        |             |
| Sites list/dashboard                          |    H     |       4        |               |             |
| Google Maps API research                      |    H     |       4        |               |             |
| Implement google maps API for dashboard       |    H     |       3        |               |             |
| Create account page                           |    H     |       3        |               |             |
| Site details page w/ tools                    |    H     |       4        |               |             |
| Tool searchbar.                               |    M     |       4        |               |             |
| Tool details page                             |    L     |       3        |               |             |
| Cookies - attach user to tool?                |    M     |       3        |               |             |
| Responsive Design                             |    H     |       6        |               |             |
| CSS/ Styling                                  |    H     |       8        |               |             |
| Deploy on Netlify                             |    H     |       2        |     0.5       |             |
| Site logo                                     |    M     |       2        |               |             |
| Total                                         |          |       61       |       4       |             |

TOTAL HOURS: 86 Hours

# POST-MVP 

| Task                               | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
|  Location services to track tools  |    M     |       6        |               |             |
|  Replenish tools: keep tally       |    L     |       6        |               |             |
|  Add in site schedules             |    L     |       4        |               |             |
|  About Simzee page                 |    L     |       3        |               |             |
| Total                              |          |       19       |               |             |

# Components

| Component              |                               Description                                |
| ---------------------- | :----------------------------------------------------------------------: |
| App                    |                      Sets up app with React Router                       |
| Nav                    |       Nav links to sites, profile, tool search, crew members             |
| Login form             |                          Crew login page                                 |
| Admin login form       |                        Admin login page                                  |
| Site map               |            Load sites on map using Google Maps API                       |
| Sites page             |                    List of active construction sites                     |
| Site details           |                   See site details plus tools at that site               |
| Tool details           |       Displays tool details once selected from site or search            |
| Tool location history  |            Lists all logs of locations inside tools details page         |
| Tool Search            |          Searchbar that renders search results using filters             |
| Crew member Details    |                         Crew member profile                              |
    

# Additional Libraries

Front End:

- Axios
- React-Media
- Material-UI
- Google Maps API

Back End:

- Cors
- Morgan

# Code Snippet


# Bugs & Fixes:


