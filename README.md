# Worst Fix Ever: Funniest Commit Message

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/muhammad-rafly/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/muhammad-rafly/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

One commit message for the bug fix that made everything worse, built for the
[make.fun Worst Fix Ever: Funniest Commit Message bounty](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722).

## The entry

> fix: slow homepage by caching the error page, now it fails instantly

The homepage was slow, so a tired engineer cached it — and cached the error
page instead of the working one. The slowness is gone: the page now fails
instantly, every time, for everyone. A real fix would have made it faster;
this one made it reliably broken, which is worse in exactly the way only a
performance optimisation can be: the metric improved, the product died.

## How it is made

`main.ts` (Node 22, standard library only) writes the single fixed line to
`entry.txt`. No network, no clock, no randomness — two runs produce
byte-identical output. The program checks the gate itself before writing:
the entry must be 1 to 100 characters and not only white space (this one is
68 characters), and it exits non-zero rather than handing in an entry the
gate would refuse.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`.
