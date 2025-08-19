import result from '../components/chatbot/result/result.json';

export const generateParagraph = (type: string): string => {
  console.log("type", type);
  return `<p>${result.bodyTypes.find(bodyType => bodyType.type === type)?.objective}</p>`;
}