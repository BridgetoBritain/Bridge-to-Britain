BRIDGE TO ENGLAND — LOGO DISPLAY FIX V5.74

WHY THE LOGO IS BROKEN
The repository contains bridge-to-england-logo.jpg, but the currently deployed HTML is still using an older logo reference.
That is why the browser shows a broken image box.

THIS FIX
All website pages in this package reference:
bridge-to-england-logo.jpg

IMPORTANT
Upload ALL files in this package to the ROOT of the v2 branch.
Do not upload only the JPG.

UPLOAD / REPLACE:
1. index.html
2. business-expansion.html
3. property-search-investment.html
4. property-acquisition.html
5. refurbishment-coordination.html
6. commercial-building-consultancy.html
7. local-representation.html
8. thank-you.html
9. bridge-to-england-logo.jpg

Recommended commit message:
Fix Bridge to England logo display V5.74

After GitHub finishes deploying:
- Open https://bridgetoengland.co.uk/
- Press Ctrl + F5 once.

The old bridge-to-britain-logo.jpg and bridge-to-england-skyline-v573.png can remain in the repository.
They are not required by this fix.
