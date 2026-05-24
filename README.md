# CoreStack Frontend Challenge

## Approach

I focused on building a small but complete user flow rather than implementing many features.

The main goal was to simulate a realistic frontend scenario:
- fetching data from an API
- displaying it clearly
- handling loading and error states
- allowing users to add new content
- managing basic interactions

## Key decisions

- I limited the number of posts displayed (first 20) to improve readability and avoid overwhelming the UI.
- I treated the API as read-only and handled new posts locally, since the provided API does not persist data.
- I kept the state management simple using React hooks (`useState`, `useEffect`) to avoid overengineering.

## What I implemented

- Fetch posts from API
- Loading and error handling
- Post list visualization (simple card layout)
- Add new post (local state)
- Form validation (required fields)
- Search/filter posts (by title and body)

## What I did not implement

- Editing or deleting posts
- Pagination or infinite scroll
- Advanced state management (Redux, etc.)

These features were intentionally left out to keep the solution focused and aligned with the time constraints.

## Assumptions

- The API is considered read-only
- New posts are handled locally
- UX clarity is more important than feature completeness

## Improvements (with more time)

- Better UI/UX (layout, spacing, visual hierarchy)
- Component separation (PostCard, Form, etc.)
- Debounced search
- Persist data locally (localStorage)
- Add retry button on API error

## Final notes

The focus of this implementation was not just correctness, but clarity, simplicity, and decision-making.