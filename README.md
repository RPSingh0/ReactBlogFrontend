# React-Blogs FrontEnd

This project is created using ReactJS for the frontend development. It utilizes Redux for global state management, React Device Detect for rendering components based on devices, React Icons for icon display, React Markdown for rendering text as markdown, and React Router for managing routes.

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
| ---------------- | -------------- | ----------------------------------------------- |
| `/`              | `AppLayout`    | Main layout component                           |
| `/dashboard`     | `Dashboard`    | Dashboard page                                  |
| `/blog/:blogId`  | `Blog`         | Blog page with dynamic blog ID                  |
| `/topics/:topic` | `TopicBlogs`   | Page for specific topics                        |
| `/favourites`    | `Favourites`   | Page for favorite items                         |
| `/our-story`     | `OurStory`     | Page describing the project's story             |
| `/*`             | `PageNotFound` | Page for handling 404 errors and unknown routes |