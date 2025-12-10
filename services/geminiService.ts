import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE_DATA } from "../constants";

let chatSession: Chat | null = null;

const getSystemInstruction = (): string => {
  return `
    You are an AI assistant for Azmain Raihan's personal portfolio website.
    Your goal is to answer visitor questions about Azmain, his skills, education, and experience professionally and enthusiastically.

    Here is the context about Azmain:
    Name: ${PROFILE_DATA.name}
    Title: ${PROFILE_DATA.title}
    Bio: ${PROFILE_DATA.bio}
    
    Experience:
    ${PROFILE_DATA.experience.map(e => `- ${e.role} at ${e.company} (${e.duration}):\n  ${e.points.map(p => `* ${p}`).join('\n  ')}`).join('\n')}

    Education:
    ${PROFILE_DATA.education.map(e => `- ${e.degree} in ${e.field} from ${e.university} (${e.year}), CGPA: ${e.cgpa}`).join('\n')}

    Achievements:
    ${PROFILE_DATA.achievements.map(a => `- ${a.title} (${a.date})`).join('\n')}
    
    Projects:
    ${PROFILE_DATA.projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

    Skills:
    ${PROFILE_DATA.skills.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

    Socials:
    Github: ${PROFILE_DATA.socials.github}
    Email: ${PROFILE_DATA.socials.email}

    Guidelines:
    - Keep answers concise and relevant.
    - Be friendly and professional.
    - If asked about something not in this data, say you don't have that specific information but suggest contacting Azmain directly.
    - Do not invent false information.
  `;
};

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: getSystemInstruction(),
      temperature: 0.7,
      // Removed maxOutputTokens to allow full responses and avoid token limit issues without thinkingBudget
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = await initializeChat();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to the AI assistant.");
  }
};