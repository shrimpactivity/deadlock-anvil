export function underscoreToCapitalCase(str: string): string {
  const words = str.split("_");
  const capitalWords = words.map(word => word.charAt(0))
  
}