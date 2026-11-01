---
title: Router firmware reverse engineering
summary: Reverse engineering a proprietary home router (Beetel 777VR1) with no datasheet, from the UART console and SPI flash dump down to the GPIO registers that drive its hardware.
status: in-progress
area: hardware · firmware RE
stack: [UART, SPI flash, binwalk, Ghidra, MIPS]
order: 3
featured: true
updated: 2026-11-02
---

## The target

The Beetel 777VR1 is a common ISP-supplied router in India. There is no public
datasheet and no source for its firmware, which makes it a good, honest test of
reverse engineering skill.

## What we've done so far

1. Found and connected to the **UART** debug console on the board.
2. **Dumped the SPI flash** and unpacked the firmware image with binwalk.
3. Loaded the binaries into **Ghidra** (MIPS) and mapped the firmware's LED control
   surface.

## What's next

Tracing that control path down to the **raw GPIO registers**, so we can drive the
hardware directly and document how the firmware talks to it.

## Why it matters

Cheap embedded devices sit on almost every network, and very few people check what
runs on them. This project is how we build, and teach, the skills to do that.
Everything here is done on hardware we own.
