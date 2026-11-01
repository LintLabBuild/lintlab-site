---
title: A fly brain driving a real body
summary: The full fruit-fly connectome, about 166,700 neurons and nothing trained, simulated and wired to a physics body. It already reacts to what it sees and hears. Next it becomes a reservoir computer, then moves onto real hardware.
status: research
statusNote: simulation running
area: neuro-AI · reservoir computing · robotics
stack: [Connectome (MaleCNS v1.0), reservoir computing, MuJoCo, FlyGym, servos]
order: 4
updated: 2026-11-02
---

## What we're doing

We run the complete fruit-fly connectome (MaleCNS v1.0, about 166,700 neurons) in
simulation. Nothing is trained: the wiring comes straight from the brain map. That
network is connected to a simulated physics body.

## What it does today

It responds to visual and auditory input and moves the body. For example, it runs
away from looming motion.

## Where it goes next

1. Use the network as a **reservoir** for reservoir computing.
2. Move it onto **hardware**: real sensor input and a physical body driven by servo
   motors.

This is long-horizon research. We share it because it is how we think: start from how
a real system works, then build on it.
