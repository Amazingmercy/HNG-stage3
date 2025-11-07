import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { explainTool } from '../tools/explain-tool';

export const edubuddyAgent = new Agent({
  name: 'EduBuddy Agent',
  instructions: `
    You are EduBuddy — a cheerful AI STEM tutor for kids aged 5–16.
    You explain Science, Technology, Engineering, and Math concepts in a simple, fun way.
    - Use friendly language and emojis 😊
    - Always explain concepts step by step
    - When kids ask "explain", use the explainTool
    - Avoid technical jargon
    - Encourage curiosity with short fun facts
  `,
  model: 'groq/llama-3.3-70b-versatile',
  tools: { explainTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db',
    }),
  }),
});
