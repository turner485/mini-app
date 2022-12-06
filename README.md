### Objective

In this challenge, your task is to retrieve data from an external API and render it like the provided designs. Use JavaScript and no framework.

### Brief

Your challenge is to build out this personal time-tracking dashboard. A perfect opportunity to flex your CSS Grid muscles! Your task is to build the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding`, and `margin`. You will find all the required assets in the `/images` folder. The assets are already optimized. Fetch data from the following endpoint:

    https://wookie.codesubmit.io/time-tracking

### Expected behavior

Your users should be able to:

-   [ ] View the optimal layout for the site depending on their device's screen size
-   [ ] See hover states for all interactive elements on the page
-   [ ] Switch between viewing Daily, Weekly, and Monthly stats
-   [ ] The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week," e.g. "Last Week - 32hrs". It should read "Last Month" for monthly, e.g., "Last Month - 19hrs".

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### Evaluation Criteria

-   **JavaScript** best practices
-   Show us your work through your commit history
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?
-   Testing: is the system adequately tested?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding!

The Sportlabs Team

## Bens notes
#### Brief notes of how I went about building the app.
---

- setting up the work environment, setting up the index.html, script, scss/css files.
- Importing the fonts, adding the favicon.
- Building the base html template, this including the images, svgs, text etc.
- Begin the styles starting with css grid, then began to style the rest, desktop first then mobile once drafted desktop
- Continued with the mobile styles as a first draft so most was looking correct.
- Began with js, fetching from API with headers.
- Created a func that would pre-populate app with weekly stats on page load.
- Created three more funcs that applied data to daily, weekly & monthly on click of corresponding ctas.
- Added functionality that applied the class `.active` to whichever button was clicked, and removed from 'inactive'.
- Added functionality that updated `.client-modules__data__recent-time-text` to applicable time frame.
- Split SCSS file out, create new files for variables and mixins for general house keeping and readability 
- Second draft of styles, picking up anything I missed on first with both desktop and mobile.
- Change some styled to use css grid for better scalability from tablet down.
- Add view port to svg for additional styles.
- Proof and a few more style clean ups/changes,
- Last skim through, removing any redundant styles and code.

### Issues
---
Only knows issue that I had building the app was getting the `border-radius: 10px 10px 0 0;` top on the modules, the property is present but it has no effect, I did some google-fu and tried many solutions, but nothing seemed to work, it puzzled me because this appears to be an easy thing to do, but no luck.

## Commits;
```
* e523d6c - (HEAD -> master, origin/master, origin/HEAD) removing any unused styles (6 minutes ago) <Ben Turner>
* ac351f1 - Proof and a few more style clean ups/changes (50 minutes ago) <Ben Turner>
* 2178ef0 - adjust module svgs /w svg viewport (2 hours ago) <Ben Turner>
* 5c45d28 - add UI/UX hover states, continue  with mobile styling (3 hours ago) <Ben Turner>
* f164add - add active states to ctas when clicked & update module text, Yesterday, Last week etc (3 hours ago) <Ben Turner>
* 99ae309 - fetch & populate daily weekly & months stats onclick ctas (4 hours ago) <Ben Turner>        
* 9bcb7a7 - add variables, mixins & import, bit of clean up, fetch data & populate the default app on load with weekly stats (4 hours ago) <Ben Turner>
* b2140dc - add variables, mixins & import, bit of clean up, fetch data & populate the default app on load with weekly stats (4 hours ago) <Ben Turner>
* 33c7ef8 - Start build, populate app with static objects, text, images, svgs & style (22 hours ago) <Ben Turner>
* 14f6aa8 - Set up core files, add favicon, fonts etc, start grid build (27 hours ago) <Ben Turner>     
* 7480f7c - We wish you all the best! The CodeSubmit Team. (2 days ago) <CodeSubmit Team>
* 11aa0cd - Initial commit (2 days ago) <CodeSubmit Team>
```
---
### Thank you for the opportunity to complete the technical task Tim, I look forward to hearing your thought on my completed task!