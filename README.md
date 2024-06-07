<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-tests">Running Tests</a></li>
      </ul>
    </li>
    <li><a href="#link-to-bug-report">Link to Bug Report</a></li>
    <li><a href="#link-to-screencast-test-walkthrough">Link to Screencast Test Walkthrough</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Tic Tac Toe Smoke Test Demo

![Tic Tac Toe Smoke Test Demo](/assets/smoke_test_demo.gif)

This project is centered around a QA Engineer Interview exercise, wherein the candidate is asked to report software issues as well automate test scripts. The web application is a simple tic tac toe game and it has a multitude of issues leading to an overall poor user experience. Still there's enough here to work with with and automate a number of critical path test scenarios. 

Here's why we're doing this:
* Demonstrates bug reporting style, and touches on depth and breadth of test methodologies 
* Demonstrates software engineering test automation technical abilities 
* Demonstrates craft, care, and deliverable completeness  

<!-- GETTING STARTED -->
## Getting Started

This repository contains Cypress test scrpts for the Tic Tac Toe game hosted [Roomy Fire Houseboat](https://roomy-fire-houseboat.glitch.me/). Please follow these steps if you'd like to clone the repo so you can can see the files yourself.

### Prerequisites

Please have a GitHub account and set up your SSH key so you may git pull the latest changes to the repository. It's reccomended to install Visual Studio code as well.

- Node.js and npm: Install from [Node.js official site](https://nodejs.org/)
- Cypress: Install globally by running `npm install -g cypress`

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:stvrmrz/tic-tac-toe.git
   ```
2. Open the repo 
   ```sh
   cd tic-tac-toe
   ```
3. Install dependencies
   ```sh
   npm install
   ```

### Running Tests

1. Open Cypress Test Runner
   ```sh
   npx cypress open
   ```
2. Run the tests 
   ```sh
   Click on the test file `smoke-test.cy.js` in the Cypress Test Runner UI
   ```

<!-- USAGE EXAMPLES -->
## Link to Bug Report

_Here is a link to my [Bug Report](https://docs.google.com/spreadsheets/d/1-IylRrCfK1h-v6kcNKx-wbChhuopxGBbXBJ2YKjpGeY/edit?usp=sharing)_

## Link to Screencast Test Walkthrough

_Here is a link to my [Screencast Test Walkthrough](https://www.loom.com/share/8d885435953c480493dd862fe5f445d5?sid=3a1295de-62a7-4f9a-b76f-2665013f5265)_


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Steve Ramirez - stevearamirez@gmail.com

Project Link: [https://github.com/stvrmrz/tic-tac-toe](https://github.com/stvrmrz/tic-tac-toe)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are some of the resources that I used that I want to give credit to:

* [othneildrew Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Roomy Fire Houseboat](https://roomy-fire-houseboat.glitch.me/)
* [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)