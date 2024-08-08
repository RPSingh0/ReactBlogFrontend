# React-Blogs FrontEnd

[Live View](http://react-blogs-r.s3-website-us-east-1.amazonaws.com)

This project is created using ReactJS for the frontend development. It utilizes Redux for global state management, React
Device Detect for rendering components based on devices, React Icons for icon display, React Markdown for rendering text
as markdown, and React Router for managing routes.

## Project Structure

The project structure includes the following components and libraries:

- ReactJS
- Redux
- React Device Detect
- React Icons
- React Markdown
- React Router

## Routes Table

| Path             | Component      | Description                                     |
|------------------|----------------|-------------------------------------------------|
| `/`              | `AppLayout`    | Main layout component                           |
| `/dashboard`     | `Dashboard`    | Dashboard page                                  |
| `/blog/:blogId`  | `Blog`         | Blog page with dynamic blog ID                  |
| `/topics/:topic` | `TopicBlogs`   | Page for specific topics                        |
| `/favourites`    | `Favourites`   | Page for favorite items                         |
| `/our-story`     | `OurStory`     | Page describing the project's story             |
| `/*`             | `PageNotFound` | Page for handling 404 errors and unknown routes |

## How to prepare this for GitHub pages

* Install `gh-pages` with following command and save as dev dependency

```bash
npm install gh-pages --save-dev
```

* Now, head to `package.json` and the following at top

```json
{
  ...
  "homepage": "https://<github-user-name>.github.io/<repository-name>/",
  ...
}
```

* And add the following to the scripts (since we're using [Vite](https://vitejs.dev/guide/) for our application, we'll
  be using deploy command with `dist` instead of `build`)

```json
{
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  ...
}
```

* Now, head to `vite.config.js` and add the following in config

```json
{
  ...
  "base": "/<repository-name>/",
  ...
}
```

* One last change 😁, if you're using BrowserRouter with react-route, Github doesn't support that as of now, so go ahead
  to your imports and change

```js
import {

...,
HashRouter,
...
}
from
"react-router-dom";
```

* And use `HashRouter` in place of `BrowserRoute`

```jsx
<HashRouter>
    ...
</HashRouter>
```

### After all the steps above, save all of your code and run the following command

```bash
npm run deploy
```

* This will do the following things
    * Build the project and put the built files under `dist` directory
    * Reach out to github and create/update the build files under the branch `gh-pages`
    * Once you see `Published` in your console, it's all done!

### Now go to Github under the following path

* `github` -> `repository` -> `settings` -> `pages`
* And ensure that `gh-pages` is selected as deploy under `Build and deployment` section and `source` is set
  to `Deploy from a branch`
* After a few minutes, you'll be able to see the url for your site 🥳