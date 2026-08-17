import { useMemo } from "react";

export function useTenure(startDate) {
  return useMemo(() => {
    const start = new Date(startDate);
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) months--;
    if (months < 0) months = 0;

    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    const parts = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
    if (remMonths > 0 || years === 0) parts.push(`${remMonths} mo`);
    return parts.join(" ");
  }, [startDate]);
}
