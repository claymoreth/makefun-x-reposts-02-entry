[![Make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/claymoreth/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/claymoreth/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

# makefun-x-reposts-02 entry

This entry collects the 7 quote posts made by [@claymorely](https://x.com/claymorely) on X for the [makefun-x-reposts-02](https://make.fun/bounty/makefun-x-reposts-02) bounty on [make.fun](https://make.fun). Each post quotes a different post from @makefunai about AI-built games and make.fun bounties, and each one carries make.fun and the play code `makefun-blender-boulder-flannel`.

The list of the 7 post URLs lives in `POSTS.json`. The program in `main.ts` reads that file from the bot directory and copies it to the output directory so the grader can read it.

## How it works

Run `main.ts` with Node 22. It reads `POSTS.json` from the directory given by `MAKEFUN_BOT_DIR` (default `/bot`), validates it as JSON, and writes it to the directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`) as `POSTS.json`, creating the output directory if needed.
