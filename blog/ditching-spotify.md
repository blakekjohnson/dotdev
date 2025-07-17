---
layout: blog-layout.njk
title: Ditching Spotify
date: "2025-07-16"
tldr: "Setting up a Plex server finally."
---

The idea of getting off of Spotify has been bouncing around in my head for
quite a while especially as new reasons for me to leave have been coming in.
From the dwindling amount of money that actual artists receive per stream to
the CEO investing his fortune on AI battle tech - they've all been slowly but
surely pushing me awawy from using the most convient music streaming platform.
But the biggest reason of all has to be my increasing drive to hosting my own
**stuff**.

Since July of 2024 I've been experimenting with learning NixOS; since August of
2024 I've had my own homelab running a few services that I use on my home
network. From the start my homelab was (and still is) being woefully
underutilized. Despite there being thousands of self-hosted alternatives to
services I use everyday, I ended up using a miniscule subset of them: Nextcloud
(in the hopes of one day ditching the big G) and Blocky (to block some domains
on my network). In the past week I've decided to finally get my own Plex music
library set up in the hopes of cutting Spotify out of my day-to-day.

The best part of it all was how shockingly easy it was to get my configuration
in a "good enough" state to start streaming music that I own across all my
devices. I had already gotten into the habit of storing my music on my Nextcloud
instance, all I needed to do was make sure that my Plex server was able to look
at the proper directory. The way that Nextcloud stores files was a bit of a
curveball that I had to get around with mounting WebDAV directories, but after
that everything fell into place. I've finally got a setup where from any of my
devices I can simply upload my music to Nextcloud, manually trigger a scan for
my Plex media library (or wait for the periodic scan), and stream my music.

The only issue I have now is the file structure (or lack thereof) for my
collection. I'm sure there are tons of already made tools for doing some bulk
cleanup but making a small utility for myself seems like the more fun option.

