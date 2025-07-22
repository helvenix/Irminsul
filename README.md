# Irminsul

Irminsul is a productivity web application that blends community accountability with gamified growth mechanics. Each project—whether individual or team-based—is visualized as a **Sacred Tree**. Users "offer blessings" (progress logs and task completions) to grow their tree, earn rewards, and maintain motivation.

---

## Key Features

* **Progress Logging**: Record daily effort with text notes, images, and optional attachments.
* **Task Management**: Create, rate (by effort), and complete tasks for bonus growth points.
* **Streak System**: Maintain productivity with daily logs; streak multipliers boost growth.
* **Sacred Tree Growth**: Visualize progress through evolving tree stages, from sapling to divine.
* **Team Collaboration**: Up to 5 members tend a single shared tree; each contribution is logged as a "blessing."
* **Rewards & Milestones**: Unlock badges, boosters, and cosmetic builds when growth thresholds are reached.
* **Social Interaction**: View team feed, react to contributions, and celebrate shared achievements.

---

## Benefits

* **Encourages Consistency**: Even partial progress logs keep streaks alive and reinforce habit formation.
* **Fosters Accountability**: Team mode provides peer visibility, reducing the chance of skipped entries.
* **Visual Motivation**: The Sacred Tree metaphor and milestone rewards deliver satisfying feedback loops.
* **Flexible Use**: Support for solo goals and collaborative projects in one unified interface.

---

## How It Works

1. **Onboarding**

   * Select or create a new project (tree), choose solo or team mode.
2. **Daily Workflow**

   * Log progress (a "blessing") with text or image to preserve your streak.
   * Complete rated tasks for additional growth points.
   * Watch your tree evolve and check for new drops (rewards).
3. **Team Mode**

   * Invite up to 5 members to share a single tree.
   * Each member’s blessings appear in the team feed with contributor summaries.
4. **Rewards**

   * Trees drop gifts at defined growth milestones—badges, point boosters, and new tree skins.

---

## Tech Stack

* **Frontend**: React.js, Tailwind CSS, Framer Motion
* **Backend**: Node.js, Express.js, MongoDB
* **Real-Time**: Socket.io for live team feeds
* **Storage**: AWS S3 (or equivalent) for media uploads

---

## Installation & Development

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/irminsul.git
   cd irminsul
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure environment variables (`.env`):

   ```ini
   MONGO_URI=your_mongodb_connection_string
   WS_URL=your_websocket_server_url
   S3_BUCKET=your_s3_bucket_name
   ```
4. Start development servers:

   ```bash
   npm run dev:backend
   npm run dev:frontend
   ```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or documentation improvements.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
