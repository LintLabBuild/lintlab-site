---
title: Lint Contest Platform
summary: A coding assessment and contest platform for colleges and hiring teams, with a sandboxed code runner, contests, leaderboards and role-based access. Our answer to HackerRank, built to be secure and to scale.
status: prototype
statusNote: working prototype · preparing pilot
area: secure platforms · system design
stack: [Next.js, PostgreSQL, Redis, Docker, sandboxed judge]
order: 1
featured: true
updated: 2026-11-02
---

## What it is

A platform where students practise, faculty run contests and exams, and admins
manage organisations. Code is compiled and run inside an isolated sandbox, so a
submission can't touch the host or other users' data.

## Why we built it

Most college contest setups are a shared spreadsheet and a free online judge. They
leak test cases, they can't handle a whole batch submitting at once, and nobody owns
the security. We wanted a platform we could put under real exam load and still trust.

## What it proves

- **Secure code execution.** Untrusted code runs in locked-down containers with
  resource limits.
- **System design under load.** Queues, caching and connection pooling sized for a
  whole class submitting in the last minute of a contest.
- **Role and tenant isolation.** Students, faculty and admins only see what they should.

## Status

It works end to end today. We are hardening it for a first pilot, and it is not open
to the public yet. If you run a college department or a hiring team and want to be a
pilot user, [write to us](/contact/).
