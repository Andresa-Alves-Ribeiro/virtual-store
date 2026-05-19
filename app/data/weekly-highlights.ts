import catalog from "./catalog";

const HIGHLIGHT_IDS = [1, 2, 3] as const;

const weeklyHighlights = catalog.filter((item) =>
    HIGHLIGHT_IDS.includes(item.id as (typeof HIGHLIGHT_IDS)[number]),
);

export default weeklyHighlights;
