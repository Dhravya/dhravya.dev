# [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%dhravya%2Fdhravya.dev)

# dhravya.dev

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## TODO

In early 2023, I refactored my site to use the new `app/` directory in Next.js 13. I went ahead and shipped it, but there are still a few things I want to do:

- [ ] Global `404` page coming soon
- [ ] Move redirects to end of routing stack (not in `next.config.js`)
- [ ] Use new support for API routes in `app` (not ready yet)
- [ ] Improved scroll position support in `app/` (not implemented yet)

You can learn more about the `app/` directory [here](https://beta.nextjs.org/docs).

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/dhravya/dhravya.dev.git
cd dhravya.dev
pnpm install
pnpm run setup # Remove all of my personal information
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/dhravya/dhravya.dev/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/dhravya/dhravya.dev/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.
