import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const explainTool = createTool({
  id: 'explain',
  description: 'Explain a STEM concept in a fun, kid-friendly way',
  inputSchema: z.object({
    topic: z.string().describe('The concept to explain, e.g., "gravity"'),
  }),
  outputSchema: z.object({
    explanation: z.string(),
  }),
  execute: async ({ context }) => {
    const { topic } = context;
    const explanation = `Here’s a fun way to think about ${topic}! 🌟
${topic} is an important part of STEM. Imagine you’re learning it through a story — EduBuddy will make it easy to understand!`;

    return { explanation };
  },
});
