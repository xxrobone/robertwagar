Hi Robert!

Once again you have gone waaayyy beyond what was requires and once again you nailed it!

There's a few visual bugs and whatnot, but it's beyond clear you know what you are doing. The only issue I had was with the contacts page as is detailed below, but since it's a quick fix II'm happy to say you've met all the requirements and more for a Välgodkänt grade!

Well done, it's very impressive!

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible)

  H1 on every page ❌ ✅
    index.html has 2 h1s
    projects.html has 1
    Every page should have one and only one h1 for SEO.

  Mail to Contact form ❌ ✅
    JS errors are killing the page. The for is there but the script links are 'modules' which trigger a browser CORS warning on a local env. Removing the export on contact.js and the module keyword and it works and is very impressive!

  Links to specific projects opening in new windows ✅
    Excellent

CSS
  External CSS ✅

  General style sheets for common elements ✅

  Typography style sheet ✅

  Locally installed font ✅
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ✅

JS
  jQuery plugin (such as a carousel) ✅
    Nice choice!

  JS/jQuery multi level menu (min 2 levels) ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅
    Could probably put the porfolio images and styles.css in relevant directories

  CSS prefixing where required ✅

  jQuery effects ✅

  Semantic element naming ✅

  Code style ✅
    As you point out a bit of mix with padding. It's not a rule, but I prefer px ( or even %) for margins and paddings - with increments of 8 or 4 - and rem or em for fonts.

    In JS const names should be SNAKE_CASE