# phoenix-service

Prototype version control
1. Copy previous version folder (e.g. v14) and paste into parent folder (e.g. /app/views/phoenix/employer)
2. Move previous version under the appropriate details component in index.html
3. Rename heading in index.html to new version and update the href so it links to the new version
4. Go into routes.js and copy routes (including the comment) under the previous version (e.g. ////////// EMPLOYER VERSION 18 (pilot / private beta))
5. Paste below the previous version’s section and update the router links to the new version (e.g. '/phoenix/employer/v15/location’ to '/phoenix/employer/v18/location’) and so forth