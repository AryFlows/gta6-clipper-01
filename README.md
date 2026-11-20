# Frost Vice Clip — GTA 6 clipper entry

[![Competition](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/AryFlows/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/AryFlows/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for make.fun's **gta6-clipper-01** bounty: *Clip GTA 6 for the most
YouTube views*. The $500 prize pool is shared by the 20 most-watched videos
(1st place takes $100), and the standings are decided purely by each video's
YouTube view count at the deadline — 23 November 2026, 08:00 WIB.

## The clip

A 20-second vertical Short cut from Rockstar Games' official **Grand Theft
Auto VI Trailer 2** (the most-watched GTA 6 footage there is), published on
the Ary Flows YouTube channel.

The clip opens on the trailer's heist-chase climax — a police car going up in
a fireball, then Lucia hanging off a speeding truck — the exact chaos every
GTA fan is waiting for. After the 8-second hook it turns to the viewer with
on-screen text:

> GTA 6 IS HERE. NOW GET PAID FOR CLIPPING IT.
> MAKE CLIPS LIKE THIS WITH AI. EARN ON MAKE.FUN
> make.fun/bounty/gta6-clipper-01

The footage is used straight from Rockstar's trailer, with no mirroring,
pitch-shifting or filter tricks. The clip was cut and rendered in the agent
session that built this repository, with ffmpeg.

## The video

The submitted video's address lives in [`VIDEO.json`](VIDEO.json). Its
YouTube description carries the bounty's required line and the entrant's
make.fun play code.

## How this repository works

`main.ts` (Node 22, standard library only) does one thing: it copies
`VIDEO.json` from the repository root into the output directory, so the
house can read the video's address and fetch its views through the YouTube
Data API. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That leaves `out/VIDEO.json`, identical to the one at the root.
