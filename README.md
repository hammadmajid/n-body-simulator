# N-Body Simulation Using Energy-Stable Numerical Methods

This project aims to build a computer program that simulates the motion of many objects that interact with each other through physical forces, mainly gravity. Such systems appear in astronomy, physics, and engineering, for example in planetary systems, star clusters, or particle simulations.

The focus of the project is not only to simulate motion, but to do so in a physically correct and numerically stable way. Many simple simulations slowly become unrealistic because they gain or lose energy over time. This project addresses that problem by using integration methods designed to preserve the physical structure of the system.

The final result will be a clean, well-documented simulation system that demonstrates core ideas from computational science, numerical methods, and physics, implemented using modern systems programming tools.

## Problem Statement

Simulating physical systems on a computer requires converting continuous motion into small time steps. Poor numerical methods cause errors to accumulate, leading to unrealistic behavior such as drifting or exploding orbits.

The problem this project addresses is how to simulate interacting bodies in a way that remains stable and physically meaningful over long periods of simulated time.

## Project Objectives

* Simulate the motion of multiple interacting bodies using classical mechanics
* Maintain stable energy behavior across long simulations
* Demonstrate the use of numerical integration techniques used in real scientific computing
* Build a modular and extensible simulation framework suitable for experimentation

## Core Concepts

The project is based on three main ideas:

1. **N-Body Systems**
   Each object in the system has mass, position, and velocity. Every object exerts a force on every other object. The simulator computes these forces and updates motion step by step.

2. **Numerical Integration**
   Since computers cannot solve continuous equations exactly, the simulator advances time in small increments. A symplectic integration method is used to reduce long-term numerical error.

3. **Energy Stability**
   The chosen integration method preserves the overall structure of the physical system, preventing artificial energy gain or loss during simulation.

## Approach

The simulation advances in discrete time steps. For each step:

* Forces between bodies are computed
* Accelerations are derived from forces
* Positions and velocities are updated using a stable integration scheme

The system is designed so that the physics logic is independent from visualization or user interaction.

## System Architecture and Modules

### 1. Math Foundations Module

Provides basic vector operations such as addition, subtraction, scaling, and distance calculation. This module represents physical quantities like position, velocity, and force.

### 2. Physics Model Module

Defines physical laws used in the simulation. Initially this includes Newtonian gravity, mass handling, and force computation between bodies.

### 3. Integration Module

Implements numerical integration algorithms. The primary method used is Velocity Verlet, chosen for its stability and energy-preserving properties.

### 4. Simulation Core Module

Coordinates the simulation loop. Manages time stepping, applies integration logic, updates system state, and ensures consistency between modules.

### 5. Data Structures Module

Stores and manages collections of bodies efficiently. Responsible for holding positions, velocities, masses, and intermediate values needed during simulation.

### 6. Visualization Module

Displays the simulation state in a clear and understandable way. This may include 2D or 3D rendering and real-time updates for observation and analysis.

### 7. Configuration and Control Module

Allows control over simulation parameters such as number of bodies, initial conditions, time step size, and simulation duration.

### 8. Validation and Analysis Module

Provides tools to verify correctness, such as tracking total energy, momentum, and system behavior over time.

## Expected Outcome

The completed project will demonstrate how mathematical models of physical systems can be translated into reliable computer simulations. It will serve as a practical example of computational science techniques applied within a computer science framework.

The project emphasizes correctness, clarity, and modular design, making it suitable as an academic final-year project and as a foundation for future work in scientific computing.
