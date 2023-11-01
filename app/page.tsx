import Image from 'next/image'
import React from 'react'
import Name from 'app/components/name'
import { HeartIcon } from '@heroicons/react/24/solid'
import { DiscordIcon, GitHubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'app/components/icons'

function NewHero() {
  return (
    <section className="min-h-screen relative">

      <div className="flex flex-col items-center justify-center mt-16 font-sans z-10 gap-2">
        <Image
          alt="profile picture of dhravya"
          src="https://pbs.twimg.com/profile_images/1633366608608460801/PDlJYGY4_400x400.jpg"
          width={100}
          height={100}
          className="rounded-full"
        />
        <span className="text-5xl font-bold">dhravya</span>
        <div className="text-lg text-slate-500 flex self-center text-center">
          a.k.a. spacedoggo / drav
        </div>
        <Name />

        <div className="mt-8 text-2xl md:max-w-lg text-center">
          full stack developer, making products that people
          <span
            className="inline-flex items-center gap-1 mx-2 text-transparent bg-clip-text
          bg-gradient-to-b from-pink-600 to-pink-300
          "
          >
            <HeartIcon className="h-6 w-6 text-pink-600" /> love.
          </span>{' '}
          i play guitar, read, write and walk for fun.
          <br />
          <span
            className="text-lg bg-clip-text text-transparent
            bg-gradient-to-r from-purple-300/50 via-yellow-200/50 to-pink-300/50"
          >
            code for fun, money and everything in between.
          </span>
          <div className="tracking-widest uppercase text-sm text-gray-500 mt-4">
            Social media
          </div>
          <li className="flex flex-wrap gap-10 mt-4 items-center justify-center">
            <a
              href="https://github.com/dhravya"
              className="flex gap-2 items-center hover:scale-125"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/dhravyashah"
              className="flex gap-2 items-center hover:scale-125"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://instagram.com/dhravyashah"
              className="flex gap-2 items-center hover:scale-125"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dhravyashah/"
              className="flex gap-2 items-center hover:scale-125"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://discord.io/code"
              className="flex gap-2 items-center hover:scale-125"
            >
              <DiscordIcon />
            </a>
            <a
              href="mailto:hi@dhravya.dev"
              className="flex gap-2 items-center hover:scale-125"
            >
              <MailIcon/>
            </a>
          </li>
        </div>
      </div>
    </section>
  )
}

export default NewHero
