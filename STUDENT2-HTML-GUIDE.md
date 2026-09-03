# Student 2's Guide: Building the HTML

This is your simple, step-by-step guide for the HTML part of the Brewhaven Coffee website. Your job is the **structure and content** — the words, headings, images, tables, and forms. You are NOT responsible for colors or layout (that's Student 3) or interactive behavior (that's Student 4) — but understanding the basics helps you work well with them.

## Step 1: Understand what HTML actually does

Think of building a webpage like building a house:

- **HTML** = the walls, rooms, doors (the structure and content)
- **CSS** = the paint, furniture, decoration (how it looks)
- **JavaScript** = the electricity and plumbing (things that move or respond)

Your job is just the walls and rooms. Don't worry about making it pretty — that happens later, automatically, once CSS is linked.

## Step 2: Learn the skeleton every page needs

Every HTML page starts with the same basic skeleton. Here it is, plain:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title Goes Here</title>
</head>
<body>

  <!-- Your content goes here -->

</body>
</html>
```

- `<!DOCTYPE html>` tells the browser "this is a modern HTML page."
- `<head>` holds information ABOUT the page (title, links to CSS) — nothing here is visible on the page itself.
- `<body>` holds everything the visitor actually SEES.

Open any of the pages I built (like `index.html`) and you'll see this exact skeleton at the top and bottom.

## Step 3: Learn the "big three" body sections

Nearly every page is divided into three parts:

```html
<body>
  <header>...</header>   <!-- top: logo + navigation menu -->
  <main>...</main>       <!-- the actual page content -->
  <footer>...</footer>   <!-- bottom: copyright, extra info -->
</body>
```

Look inside `index.html` and you'll see exactly this pattern. This is the map you should keep in your head for every page.

## Step 4: Learn the basic content tags

You only need a handful of tags to write 90% of a webpage:

| Tag | What it's for | Example |
|---|---|---|
| `<h1>` to `<h3>` | Headings (h1 = biggest/most important, only one per page) | `<h1>Our Menu</h1>` |
| `<p>` | A paragraph of text | `<p>We roast our own beans.</p>` |
| `<a href="...">` | A link | `<a href="menu.html">Menu</a>` |
| `<img src="...">` | An image | `<img src="latte.jpg" alt="A latte">` |
| `<ul>` / `<li>` | A bullet list | `<ul><li>Item one</li></ul>` |
| `<div>` | A generic box/container (used with CSS) | `<div class="card">...</div>` |

That's really it. Everything else on the site is just these tags combined in different orders.

## Step 5: Practice by reading, not just writing

Before writing new content, open `index.html` in a text editor and read it top to bottom. Try to say out loud what each section is, e.g. "this `<section class="hero">` is the big welcome banner," "this `<div class="card">` is one of the three feature boxes." Once you can explain every block in your own words, writing your own becomes much easier.

## Step 6: Build a table (used on the Menu page)

Tables are for information that fits in rows and columns — perfect for a price list:

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Espresso</td>
      <td>RM 8.90</td>
    </tr>
  </tbody>
</table>
```

- `<thead>` = the header row (column titles)
- `<tbody>` = the actual data rows
- `<tr>` = table row, `<th>` = header cell, `<td>` = normal cell

Look at `menu.html` to see this pattern repeated for Coffee, Tea, and Pastries.

## Step 7: Build a form (used on the Contact page)

Forms let visitors type information and submit it:

```html
<form>
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Send</button>
</form>
```

- `<label>` describes the field (and `for` must match the input's `id` — this matters for accessibility)
- `<input type="text">` for short text, `type="email"` for emails
- `required` tells the browser "don't let them submit this empty"

Look at `contact.html` to see the full version.

## Step 8: Connect your pages with navigation

Every page needs the same menu bar linking to the others:

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

Rule of thumb: the `href` must exactly match the other file's name, including `.html`. This is the #1 cause of broken links for beginners.

## Step 9: Leave "hooks" for Student 3 and Student 4

You don't need to know CSS or JavaScript, but you should leave small labels in your HTML so your teammates can find things:

- Add `class="..."` to boxes you want styled differently, e.g. `<div class="card">`.
- Add `id="..."` to anything Student 4 needs to make interactive, e.g. `<button id="navToggle">`.

You've already got working examples of both throughout the site files — reuse the same class/id names when you add new content so the existing CSS and JS keep working.

## Step 10: Test your own work before handing it off

Before telling your group "the HTML is done":

1. Double-click `index.html` to open it in a browser (it'll look plain/unstyled until Student 3's CSS loads — that's normal).
2. Click every link in the navigation menu and confirm it goes to the right page.
3. Check every image has an `alt="..."` description (helps accessibility and shows text if the image fails to load).
4. Read through your text once for typos.

## Quick cheat-sheet to keep next to you

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>...</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <nav><ul><li><a href="...">...</a></li></ul></nav>
  </header>

  <main>
    <section>
      <h1>...</h1>
      <p>...</p>
    </section>
  </main>

  <footer>
    <p>...</p>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
```

Fill in the `...` and you have a complete page.
