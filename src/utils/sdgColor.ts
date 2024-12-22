export const getSdgColor = (sdg: string, accent: string): string => {
  if (sdg === "sdg1" && accent === "100") return "bg-sdg1-100";
  if (sdg === "sdg1" && accent === "200") return "bg-sdg1-200";
  if (sdg === "sdg1" && accent === "600") return "bg-sdg1-600";

  if (sdg === "sdg2" && accent === "100") return "bg-sdg2-100";
  if (sdg === "sdg2" && accent === "200") return "bg-sdg2-200";
  if (sdg === "sdg2" && accent === "600") return "bg-sdg2-600";
  return "";
};
