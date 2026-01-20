/**
 * Animation configurations per creative-frontend-design skill
 * "No linear animations. Everything has mass and friction."
 */

export const SPRING_TACTILE = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
};

/**
 * Spring config specifically for opening accordions/cards
 * Slightly higher damping for smooth expansion
 */
export const SPRING_EXPAND = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
};

/**
 * Stagger children for list reveals
 */
export const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

export const STAGGER_ITEM = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: SPRING_TACTILE,
    },
};

/**
 * Button microinteraction - scale on tap
 */
export const BUTTON_TAP = {
    scale: 0.98,
};
