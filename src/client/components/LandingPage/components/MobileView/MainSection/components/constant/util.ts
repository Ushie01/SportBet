type SportData = {
  gameType: string;
  eventType: string[];
}

export const getEventTypesByGameType = (link: string, data: SportData[]): string[] => {
  const result = data.filter((item) => item.gameType === link);
  return result.length > 0 ? result[0].eventType : [];
};

