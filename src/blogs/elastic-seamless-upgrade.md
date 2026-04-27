---
title: "Building the Elastic Seamless Upgrade Tool: My Internship Journey"
date: "2026-04-28"
description: "How my team and I built an orchestration platform to automate Elasticsearch upgrades with prechecks, live logs, and safer upgrade workflows."
comments: 0
---


## Overview

During my internship at Hyperflex, I had the opportunity to work with my team on building the **Elastic Seamless Upgrade Tool**.

What started as an internal upgrade utility gradually evolved into a full orchestration platform designed to simplify one of the most operationally sensitive tasks in distributed systems: upgrading Elasticsearch clusters in production.

This project went through multiple architectural stages. We started with a **Node.js + webhook-based workflow**, then moved to a **single-state solution**, and later redesigned the backend into a **Java modular orchestration system** with granular Ansible execution.

In this blog, I want to share that journey, the challenges we faced, and what I learned along the way.

---

## The Problem We Wanted to Solve

Upgrading Elasticsearch clusters manually is operationally expensive.

A typical upgrade process involves:

- Checking cluster health
- Verifying snapshots
- Ensuring shard allocation stability
- Validating plugin compatibility
- Reviewing breaking changes
- SSH into nodes
- Restarting services in order
- Monitoring recovery

The process is repetitive, risky, and stressful.

A single mistake can impact cluster stability.

As a team, we wanted to automate this process while maintaining operational safety.

---

## Phase 1: The First Version

The first version of the project focused on one simple goal:

**Can we automate rolling upgrades?**

### Initial Architecture

- Frontend: React
- Backend: Node.js
- Database: MongoDB
- Execution Engine: Ansible

### Workflow

Cluster Discovery  
→ Inventory Generation  
→ Upgrade Job Creation  
→ Playbook Execution

At this stage, the goal was simple: prove that upgrade automation was possible.

And it worked.

But it also exposed the hidden complexity of upgrades.

---

## Screenshot: Early UI / First Prototype


![Early Prototype UI 1](public/blogs/seamless-ui-1.png)

![Early Prototype UI 2](public/blogs/seamless-ui-2.png)

*Caption: The early version of the tool focused on basic cluster discovery and upgrade execution.*

---

## The First Big Challenge: State Management

At first, the upgrade process was designed as a simple fire-and-forget Ansible playbook execution.

But during testing, we realized that production upgrades are not linear.

Nodes can fail during upgrade.  
Networks can have interruptions.  
Users might want to pause or resume.

A stateless system could not handle these scenarios reliably.

We needed **state persistence**.

So we added MongoDB to store cluster state:

- Node status
- Upgrade progress
- Shard movement
- Configuration snapshots

This enabled:

- Checkpointing
- Resumable upgrades
- Recovery after failures

This was a critical architectural improvement that transformed the tool from a simple automation script into a production-grade orchestration system.

---

## Phase 2: The Webhook-Based Node.js Architecture

In the Node.js version, we used a heavily decoupled model.

### How it worked

- At first, the architecture was based on Ansible Playbooks
- We expose a UI to user in shich it can see the current cluster state and have a upgrade button
- On clicking upgrade the backend trigger the respective ansible playbook to start the upgrade process
- We exposed webhooks from the backend.
- Ansible playbooks called those webhooks whenever a task was completed.
- The backend updated progress based on those webhook events.

So the orchestration looked something like this:

Ansible Task Completed  
→ Webhook Called  
→ Backend Updated State  
→ UI Refreshed

### Why we used it

This architecture made sense early on because:

- the playbooks and backend were loosely coupled
- Ansible stayed responsible for execution
- the backend only reacted to events
- it was easy to prototype quickly

### The drawback

As the project grew, this design started to show limitations:

- state was spread across multiple places
- task flow became harder to reason about
- checkpointing was less straightforward
- recovery logic became fragmented
- debugging became difficult because the control flow was split between Ansible and webhooks

The system was flexible, but too decoupled for the reliability we needed.

That is when we realized we needed a **single source of truth for workflow state**.

---

### Screenshot: Webhook-Based Flow


![Old Webhook Architecture](public/blogs/old-architecture-seamless.png)

*Caption: The first architecture used webhooks from Ansible playbooks to notify the backend after each task.*

---

## Phase 3: Moving to a Single-State Solution

To address the webhook limitations, we moved toward a **single-state orchestration model**.

Instead of letting playbooks drive the workflow implicitly, the backend became the source of truth for:

- what step is running
- what step completed
- what step failed
- where to resume from

This made the upgrade process much easier to control.

### What changed

- The backend started managing the workflow state explicitly.
- Upgrade steps became structured and trackable.
- Checkpoints were stored centrally.
- Recovery logic became predictable.

This was a big architectural shift.

It gave us cleaner execution flow, better visibility, and stronger recovery support.

---

## Phase 4: Backend Migration to Java

As the codebase grew, Node.js started becoming limiting for the kind of orchestration and modularity we wanted.

So we migrated the backend to Java.

This was a major rewrite.

### Why?

We wanted:

- stronger architecture
- modular boundaries
- better service organization
- better maintainability
- clearer state handling

### Modules

We split the system into modular pieces:

- Core
- Upgrade
- Prechecks
- Breaking Changes
- Plugin Management
- Ansible Integration
- SSH Client

This made the system easier to maintain and easier to evolve.

The Java backend also gave us a cleaner foundation for a more controlled orchestration engine.

---

## Phase 5: The Granular Ansible Ad-Hoc Approach

In the current architecture, we moved away from large, static Ansible playbooks.

Instead, we adopted a more granular, Java-driven orchestration approach using **Ansible Ad-Hoc commands**.

### How it works now

Rather than running one giant `.yml` file, the **Upgrade Plan Builder** in Java breaks the upgrade into small, discrete tasks such as:

- Stop Service
- Update Config
- Restart Service
- Validate Health
- Move to the Next Node

Each of these tasks becomes an Ansible ad-hoc command.

### Why this is better

This gives us:

- better resilience
- better visibility
- more control over each step
- easier recovery and resumption
- less black-box behavior

### Dynamic command generation

The Java backend dynamically builds the Ansible command on the fly.

It injects:

- **Dynamic inventory**: the target node IP address
- **Module selection**: systemd, apt/yum, or shell depending on the task
- **SSH orchestration**: private key, user, and sudo parameters

### Real-time telemetry

Because these commands run as subprocesses from Java, we can capture `stdout` and `stderr` in real time.

That data is streamed to the frontend through WebSockets, so users get a live terminal-like experience for every step.

### Stateful resumption

Since the upgrade is broken into smaller execution units, we can save a checkpoint in MongoDB after every successful task.

If an upgrade is interrupted, the tool knows exactly where to resume from instead of restarting an entire playbook.

---

## Screenshot: Live Logs and Step-by-Step Execution

Add screenshots here showing the live terminal-style logs and the step-by-step upgrade progression.

![Live Logs](./screenshots/03-live-logs.png)

*Caption: The Java-driven execution layer streams live logs to the UI in real time.*

![Upgrade Progress](./screenshots/04-upgrade-progress.png)

*Caption: Each step is tracked individually, making failures easier to understand and resume from.*

---

## Why This New Architecture Is Better Than the Old One

The Java modular architecture with ad-hoc Ansible execution gave us much better control than the earlier webhook-based setup.

![New Architecture](public/blogs/seamless-architecture.png)

*Caption: The current architecture uses Java as the orchestration layer, MongoDB for workflow state, and Ansible Ad-Hoc commands for granular execution.*


### Better resilience

Failures can be handled at a granular level.

### Improved visibility

Every individual step is observable.

### Less black box

Java handles the decision-making, and Ansible handles the remote execution.

### Easier checkpointing

The backend knows exactly which task completed successfully and which task needs to resume.

This was a major improvement in how we approached orchestration.


Architecure

![Architecture](./blogs/seamless/seamless-architecture.png)

---

## Phase 6: Prechecks Framework

One of the most important improvements was introducing a **precheck framework**.

We realized that upgrade automation without validation is risky.

Before every upgrade, the tool validates:

- Cluster health
- Disk space thresholds
- Shard allocation
- Snapshot availability
- Plugin compatibility
- Version consistency
- Node readiness
- Index readiness

### Before

Upgrade  
→ Hope it works

### After

Precheck  
→ Validate  
→ Upgrade  
→ Verify

This significantly reduced operational risk.

---

## Screenshot: Precheck Summary

Add a screenshot here showing the precheck report or the validation summary page.

![Precheck Summary](./screenshots/05-precheck-summary.png)

*Caption: Prechecks help catch issues before the upgrade begins.*

---

## Phase 7: Solving Upgrade Order

Not all nodes in Elasticsearch are equal.

Clusters contain:

- Master nodes
- Data nodes
- Ingest nodes
- Coordinating nodes

Upgrading them in the wrong sequence can destabilize the cluster.

To solve this, we implemented role-based upgrade sequencing.

This made the process much safer.

---

## Phase 8: Breaking Changes Detection

One major upgrade challenge is hidden incompatibilities.

Sometimes an upgrade succeeds technically but breaks functionality later.

To solve this, we added breaking-change analysis.

The tool checks:

- Deprecated settings
- Removed APIs
- Unsupported configurations

before the upgrade begins.

This made the tool proactive instead of reactive.

---

## Phase 9: Plugin Compatibility Checks

Plugins are often overlooked during upgrades.

But incompatible plugins can break nodes after restart.

We added plugin validation to:

- Detect installed plugins
- Compare compatibility with target version
- Warn users before execution

This improved upgrade reliability.

---

## Phase 10: Stop and Resume Support

Upgrades are not always completed in one go.

Sometimes users need to pause.

So we introduced checkpoint-based stop/resume support.

This required:

- State persistence
- Workflow checkpointing
- Recovery logic

This was one of the more interesting engineering challenges in the project.

---

## Current Capabilities

Today the Seamless Upgrade Tool supports:

- Cluster discovery
- Upgrade path validation
- Prechecks
- Breaking changes detection
- Plugin compatibility checks
- Role-based upgrade ordering
- Live logs
- Stop/resume workflows
- Kibana upgrade support

---

---

## Future Improvements

Like every production system, there’s always room for improvement.

Over the course of building this tool, we identified several areas where the platform can evolve further.

### Automated Rollback Support

One of the biggest missing pieces today is rollback orchestration.

If an upgrade fails midway, recovery is still partially manual.

A future rollback engine could:

- Restore previous package versions
- Restore previous configurations
- Restart services safely
- Validate node health after rollback

This would make the system much more resilient.

---

### Better Observability

Although the tool provides real-time logs, deeper observability would make upgrades even more transparent.

Future improvements could include:

- Upgrade duration metrics
- Node recovery timing
- Shard relocation metrics
- Failure analytics
- Historical upgrade reports

This would help teams analyze upgrade behavior over time.

---

### Multi-Cluster Upgrade Support

Currently, upgrades are managed cluster by cluster.

A future improvement would be centralized multi-cluster orchestration.

This would allow:

- Managing multiple clusters from one dashboard
- Sequential cluster upgrades
- Cluster grouping by environment (dev/staging/prod)

This would be valuable for larger organizations.

---

### Smarter Prechecks

The precheck framework can evolve significantly.

Future checks could include:

- JVM heap pressure analysis
- Thread pool saturation checks
- Indexing pressure analysis
- Segment merge pressure
- Resource forecasting

This would make upgrades even safer.

---

### Event-Driven Workflow Engine

The current workflow is stateful and modular, but an event-driven orchestration engine could improve scalability even further.

Potential improvements:

- Event-based task execution
- Retry queues
- Workflow auditing
- Better fault isolation

This would make orchestration even cleaner.

---

## Key Learnings

This project taught me a lot about building production-grade operational systems.

### Distributed Systems Are Operationally Sensitive

Upgrading a distributed system is not just changing versions.

It affects:

- Cluster leadership
- Shard allocation
- Replication
- Recovery
- Availability

This project gave me practical exposure to distributed systems behavior during upgrades.

---

### State Is Critical

One of the biggest lessons was understanding how important state management is.

The transition from webhook-driven workflows to centralized state orchestration changed the reliability of the system completely.

Without proper state:

- recovery becomes difficult
- retries become inconsistent
- visibility becomes fragmented

Stateful orchestration changed everything.

---

### Granularity Improves Reliability

Moving from large Ansible playbooks to smaller ad-hoc execution units gave us:

- better failure handling
- better checkpointing
- better debugging
- better visibility

This reinforced an important engineering principle:

**smaller execution units create more reliable systems.**

---

### Visibility Builds Trust

Live logs made a huge difference.

Users could see:

- what task was running
- what succeeded
- what failed

This reduced uncertainty and improved debugging.

Good operational systems need visibility.

---

### Architecture Evolves

The first architecture solved the initial problem.

The second architecture solved the scaling problem.

The third architecture solved the orchestration problem.

That taught me an important lesson:

**good architecture evolves with the problem.**

---

### Collaboration Matters

Since this was a team project during my internship, one of the biggest learnings was collaboration.

Working together taught me:

- architecture discussions
- feature planning
- code reviews
- production problem-solving

Building operational tooling is always collaborative.

---

## Final Thoughts

The Elastic Seamless Upgrade Tool started as a simple idea:

make Elasticsearch upgrades easier.

Over time, it evolved into a full orchestration platform.

The journey from:

- static playbooks
- webhook-driven workflows
- centralized state orchestration
- granular ad-hoc execution

taught me how production-grade automation systems are actually built.

This project helped me understand:

- distributed systems
- workflow orchestration
- infrastructure automation
- fault recovery
- operational safety

It remains one of the most impactful and educational projects of my internship journey.

More importantly, it changed how I think about infrastructure engineering.

What looks like “just an upgrade” is actually a complex orchestration problem.

And building software to solve that was one of the best learning experiences I’ve had.

---

## Open Source Project

The Elastic Seamless Upgrade Tool is publicly available and actively maintained by the Hyperflex team.

This project represents our approach to making Elasticsearch upgrades safer, more transparent, and more reliable.

🔗 Tool Repository: https://github.com/ConsultaddHQ/elastic-seamless-upgrade-tool

If you're working with Elasticsearch clusters and want to explore the project, contributions and feedback are always welcome.

Thanks for reading.
More engineering stories coming soon.