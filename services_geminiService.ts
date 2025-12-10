import { GoogleGenAI, Type } from "@google/genai";
import { Product } from '../types';

// Declare process to avoid TypeScript errors since Vite defines it globally during build
declare const process: any;

// Initialize the client
// NOTE: In a real production app, you might proxy this through a backend to protect the key.
// For this demo, we use the process.env.API_KEY directly as requested.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const FALLBACK_DESCRIPTIONS = [
  "A high-quality item available at your local store.",
  "Fresh and locally sourced product.",
  "Great value for money and highly recommended.",
  "Customer favorite in this category."
];

export const generateProductDescription = async (name: string, category: string, keywords: string, storeType?: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const storeContext = storeType ? `Store Type: ${storeType} Store` : '';
    
    const prompt = `Write a compelling, short product description (max 2 sentences) for a local store item.
    ${storeContext}
    Product Name: ${name}
    Category: ${category}
    Key Features/Keywords: ${keywords}
    
    Tone: Professional yet warm. Tailor the language to the store type (e.g., appetizing for food, technical for electronics).`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Quality product available at your local store.";
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    
    // Handle Free Tier Quota Limits (429) gracefully
    if (error.message?.includes('429') || error.status === 429) {
       console.warn("AI Quota Exceeded (Free Tier). Using fallback.");
       return FALLBACK_DESCRIPTIONS[Math.floor(Math.random() * FALLBACK_DESCRIPTIONS.length)];
    }
    
    return "A wonderful addition to your home.";
  }
};

export const getShopperRecommendations = async (query: string, availableProducts: Product[]): Promise<string[]> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const productListString = availableProducts.map(p => `${p.id}: ${p.name} (${p.storeType} - ${p.category})`).join('\n');

    const prompt = `You are a smart shopping assistant for a hyper-local marketplace. 
    Here is the store inventory across multiple local shops:
    ${productListString}

    The customer says: "${query}"

    Based on the inventory, recommend up to 3 product IDs that match their request.
    If the user asks for something like "headache" or "pain", look for Medical store items.
    If they ask for "shirt", look for Clothing store items.
    
    Return ONLY a JSON array of strings (product IDs).
    Example: ["1", "3"]`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return [];
    
    const ids = JSON.parse(jsonText);
    return Array.isArray(ids) ? ids : [];
  } catch (error: any) {
    console.error("AI Recommendation Error:", error);
    
    // Handle Free Tier Quota Limits gracefully
    if (error.message?.includes('429') || error.status === 429) {
      alert("We are experiencing high traffic on our AI assistant. Please browse categories manually for now.");
    }
    
    return [];
  }
};