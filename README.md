
# Tooli-Front-End
A full-stack inventory management application. Uses React, Ruby on Rails, and PostsgreSQL

## Project Link

LIVE LINKS:

font-end link: https://tooli.netlify.app/

back-end link: https://tooli-back-end.herokuapp.com/

GITHUB LINKS:

front-end link: https://github.com/hannahbannan/Tooli-Front-End

back-end link: https://github.com/hannahbannan/Tooli-Back-End-Final

API LINKS:

Google Maps API Key: AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E

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
|  Database structure planning       |    H     |       3        |       3       |      3      |
|  Spin up Rails server              |    H     |       1        |      0.5      |     0.5     |
|  Create seed data                  |    H     |       3        |      1.5      |     1.5     |
|  Config schema for tools and sites |    H     |       3        |       1       |      1      |
|  Config log join table             |    H     |       1        |       1       |      1      |
|  Create own API (then not use)     |    H     |                |       4       |      4      |
|  Set up CRUD routes                |    H     |       4        |       2       |      2      |
|  Research user auth for admin      |    H     |       5        |       4       |      4      |
|  Set up admin/crew routes          |    H     |       4        |       2       |      2      |
|  Deploy server on heroku           |    H     |       2        |       6       |      6      |
|  Debug CORS issues                 |    H     |       0        |       3       |      3      |
|  Total                             |    H     |      26        |      28       |     28      |

| React/Front End                               | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Spin up React app                             |    H     |       1        |     0.5       |    0.5      |
| Navbar                                        |    H     |       2        |      1        |      1      |
| React Router                                  |    H     |       3        |      1        |      1      |
| Login page                                    |    H     |       3        |      3        |      3      |
| Registration page                             |    H     |       3        |      2        |      2      |
| Profile page and update profile               |    H     |                |      3        |      3      |
| Research login/cookies                        |    H     |       6        |      5        |      5      |
| Sites list/dashboard                          |    H     |       4        |      4        |      4      |
| Google Maps API research                      |    H     |       4        |      4        |      4      |
| Implement google maps API for dashboard       |    H     |       3        |      4        |      4      |
| Site details page w/ tools                    |    H     |       4        |      3        |      3      |
| Tool searchbar                                |    L     |       4        |               |             |
| Tool details page w/ update form              |    H     |       5        |      4        |      4      |
| Add Tool form (admin)                         |    M     |                |      2        |      2      |
| Delete Tool form (admin)                      |    M     |                |      1        |      1      |
| Responsive Design                             |    H     |       6        |      2        |      2      |
| CSS/ Styling                                  |    H     |       8        |      8        |      8      |
| Deploy on Netlify                             |    H     |       2        |     0.5       |     0.5     |
| Site logo                                     |    M     |       2        |     1.5       |     1.5     |
| Total                                         |          |       61       |    47.5       |    47.5     |

TOTAL HOURS: 86 Hours

# POST-MVP 

| Task                               | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
|  Location services to track tools  |    M     |       6        |       2       |     2       |
|  Replenish tools: keep tally       |    L     |       6        |               |             |
|  Add in site schedules             |    L     |       4        |               |             |
|  About Tooli page                  |    L     |       3        |       1       |     1       |
| Total                              |          |       19       |       3       |     3       |

# Components

| Component              |                               Description                                |
| ---------------------- | :----------------------------------------------------------------------: |
| App                    |                      Sets up app with React Router                       |
| Nav                    |       Nav links to sites, profile, tool search, crew members             |
| Login form             |                      Crew & admin login page                             |
| Registration form      |                          Create a profile                                |
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
- React Router
- Google Maps API (Javascript Maps & Geocoding)

Back End:

- Rack-cors
- bCrypt
- Grape (ended up not using)

# Bugs & Fixes:
- Did not include the -d postgresql when I created my rails application. That gave me an issue trying to deploy to Heroku, so I had to go back and recreate a new database with that postgresql flag.
- CORS issues with Heroku. Ended up being an issue with my master key/bcrypt in my production environment.
- PostgresQL crashed overnight and I had to erase some redundant files

