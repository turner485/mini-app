
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